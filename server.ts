import express from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocketServer({ server });

  const PORT = 3000;

  // Presence state
  const users = new Map<string, { id: string; name: string; color: string; avatar: string }>();

  const ADDIS_NAMES = ["Abebe", "Kebede", "Almaz", "Tadesse", "Mulu", "Selam", "Dawit", "Hana"];
  const COLORS = ["#F0FF00", "#FF4E00", "#00FF00", "#00E0FF", "#FF00E5"];

  wss.on("connection", (ws: WebSocket) => {
    const userId = Math.random().toString(36).substring(7);
    const name = ADDIS_NAMES[Math.floor(Math.random() * ADDIS_NAMES.length)];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const avatar = `https://picsum.photos/seed/${userId}/100/100`;
    
    const userData = { id: userId, name, color, avatar };
    users.set(userId, userData);

    // Broadcast updated user list
    const broadcast = () => {
      const userList = Array.from(users.values());
      const message = JSON.stringify({ type: "presence", users: userList });
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    };

    broadcast();

    ws.on("close", () => {
      users.delete(userId);
      broadcast();
    });
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
