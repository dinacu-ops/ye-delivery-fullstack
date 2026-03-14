/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Navigation, 
  Search, 
  Bike, 
  Star, 
  CheckCircle2, 
  ChevronUp, 
  X, 
  Phone,
  MessageSquare,
  Clock,
  Users,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Settings,
  Globe,
  CreditCard,
  Lock,
  Sun,
  Moon,
  Bell,
  Plus,
  Github,
  Download,
  ExternalLink,
  Home,
  Briefcase,
  User,
  Check,
  LogOut
} from 'lucide-react';

// Translations
const TRANSLATIONS = {
  en: {
    callDelivery: "FIND BIKE",
    pinging: "PINGING...",
    searchingNear: "SCANNING",
    pickupLocation: "PICKUP",
    landmark: "LANDMARK",
    liveCommunity: "LIVE",
    online: "ACTIVE",
    mins: "MINS",
    confirmOrder: "EXECUTE",
    paymentSummary: "LEDGER",
    secureWallet: "VAULT",
    fundsEscrow: "SECURED",
    escrowNote: "VERIFICATION REQUIRED FOR RELEASE.",
    deliveryCode: "VERIFY",
    pendingBalance: "PENDING",
    payWith: "PAY VIA",
    settings: "CONFIG",
    language: "LOCALE",
    downloadExport: "EXPORT",
    exportGithub: "GITHUB",
    downloadZip: "ZIP",
    exportInstructions: "USE SYSTEM SETTINGS.",
    theme: "INTERFACE",
    lightMode: "LIGHT",
    darkMode: "DARK",
    back: "RETURN",
    notifications: "ALERTS",
    noNotifications: "NONE",
    markAllRead: "CLEAR",
    newOrder: "EXECUTED",
    driverFound: "ASSIGNED!",
    driverArrived: "ON SITE",
    paymentSuccess: "COMPLETE",
    welcomeBack: "RESTORED",
    savedLocations: "NODES",
    home: "BASE",
    work: "HQ",
    saveLocation: "SAVE",
    locationName: "NAME",
    locationSaved: "SAVED",
    locationDeleted: "PURGED",
    loginTitle: "ACCESS",
    loginSubtitle: "INITIALIZE",
    emailPlaceholder: "USER@GMAIL.COM",
    passwordLabel: "KEY",
    passwordPlaceholder: "ENTER KEY",
    getStarted: "GET STARTED",
    errorGmail: "INVALID GMAIL",
    errorPassword: "KEY TOO SHORT",
    telebirr: "TELEBIRR",
    cbe: "CBE",
    card: "CARD",
    oromia: "OROMIA",
    awash: "AWASH",
    baseFee: "BASE",
    priceBreakdown: "ANALYSIS",
    distance: "RANGE",
    perKmFee: "RATE",
    surgeAdjustment: "DELTA",
    totalPrice: "FINAL",
    highDemand: "LOAD",
    rushHour: "PEAK",
    weatherSurge: "ENV DELTA",
    surgeNotification: "SURGE: {reason}",
    trafficInfo: "TRAFFIC",
    recentSearches: "QUERIES",
    clearMap: "CLEAR"
  },
  am: {
    callDelivery: "መላኪያ ጥራ",
    pinging: "ሾፌሮችን በመፈለግ ላይ...",
    searchingNear: "በአቅራቢያ በመፈለግ ላይ",
    pickupLocation: "መነሻ ቦታ",
    landmark: "መለያ ምልክት (አማራጭ)",
    liveCommunity: "የቀጥታ ማህበረሰብ",
    online: "በመስመር ላይ",
    mins: "ደቂቃዎች",
    confirmOrder: "ትዕዛዝ ፈጽም",
    paymentSummary: "የክፍያ መዝገብ",
    secureWallet: "ደህንነቱ የተጠበቀ ካዝና",
    fundsEscrow: "ገንዘብ በታማኝነት ተይዟል",
    escrowNote: "ሾፌሩ ክፍያ የሚያገኘው የመላኪያ ኮዱን ሲሰጡት ብቻ ነው።",
    deliveryCode: "ኮድ አረጋግጥ",
    pendingBalance: "የሚጠባበቅ",
    payWith: "በዚህ ይክፈሉ",
    settings: "ቅንብሮች",
    language: "ቋንቋ",
    downloadExport: "ምንጭ ኮድ ላክ",
    exportGithub: "ወደ GitHub ላክ",
    downloadZip: "ZIP አውርድ",
    exportInstructions: "የመተግበሪያዎን ምንጭ ኮድ ለመላክ የ AI Studio ቅንብሮችን ምናሌ ይጠቀሙ።",
    theme: "ገጽታ",
    lightMode: "ብርሃን",
    darkMode: "ጨለማ",
    back: "ተመለስ",
    notifications: "ማሳወቂያዎች",
    noNotifications: "አዲስ ማሳወቂያ የለም",
    markAllRead: "ሁሉንም አጽዳ",
    newOrder: "ትዕዛዝ ተፈጽሟል",
    driverFound: "ሾፌር ተመድቧል!",
    driverArrived: "ሾፌሩ ደርሷል",
    paymentSuccess: "ክፍያ ተሳክቷል",
    welcomeBack: "እንኳን ተመለሱ!",
    savedLocations: "የተቀመጡ ቦታዎች",
    home: "ቤት",
    work: "ስራ",
    saveLocation: "ቦታ አስቀምጥ",
    locationName: "የቦታ ስም",
    locationSaved: "ቦታ ተቀምጧል",
    locationDeleted: "ቦታ ተሰርዟል",
    loginTitle: "የስርዓት መግቢያ",
    loginSubtitle: "ስርዓቱን ለመጀመር መለያዎን ያረጋግጡ",
    emailPlaceholder: "USER@GMAIL.COM",
    passwordLabel: "የይለፍ ቃል",
    passwordPlaceholder: "የይለፍ ቃል ያስገቡ",
    getStarted: "ጀምር",
    errorGmail: "እባክዎ ትክክለኛ የጂሜይል አድራሻ ያስገቡ",
    errorPassword: "የይለፍ ቃል ቢያንስ 6 ቁምፊዎች መሆን አለበት",
    telebirr: "ቴሌብር",
    cbe: "ሲቢኢ ብር",
    card: "ክሬዲት ካርድ",
    oromia: "ቴሌብር ኦሮሚያ ባንክ",
    awash: "አዋሽ ባንክ",
    baseFee: "መሰረታዊ ክፍያ",
    priceBreakdown: "የዋጋ ዝርዝር",
    distance: "ርቀት",
    perKmFee: "በኪሎሜትር ክፍያ",
    surgeAdjustment: "የፍላጎት ማስተካከያ",
    totalPrice: "ጠቅላላ ዋጋ",
    highDemand: "በአካባቢው ከፍተኛ ፍላጎት አለ",
    rushHour: "የችኮላ ሰዓት ማስተካከያ",
    weatherSurge: "የአየር ሁኔታ ማስተካከያ",
    surgeNotification: "በ{reason} ምክንያት የዋጋ ጭማሪ ተደርጓል",
    trafficInfo: "የትራፊክ መረጃ",
    recentSearches: "የቅርብ ጊዜ ፍለጋዎች",
    clearMap: "አጽዳ"
  },
  om: {
    callDelivery: "Ergaa Waami",
    pinging: "Konkolaachistoota barbaadaa jira...",
    searchingNear: "Dhiyootti barbaadaa jira",
    pickupLocation: "Bakka Ka'umsaa",
    landmark: "Mallattoo (Filannoo)",
    liveCommunity: "Hawaasa Kallattii",
    online: "Marsariitii irra",
    mins: "Daqiiqaa",
    confirmOrder: "AJAJA RAAWWADHU",
    paymentSummary: "GABAASA KAFALTII",
    secureWallet: "KAASNAA NAGEENYAA",
    fundsEscrow: "MAALLAQNI QABAMEERA",
    escrowNote: "KONKOLAACHISAAN KAN KAFALAMU YOO ATI KOODII ERGAA KENNITE QOFA.",
    deliveryCode: "KOODII MIRKANEESSI",
    pendingBalance: "MAALLAQA EEGGAMAA",
    payWith: "KANAAN KAFALI",
    settings: "SAJOO",
    language: "AFAAN",
    downloadExport: "KOODII ERGI",
    exportGithub: "GARA GITHUB ERGI",
    downloadZip: "ZIP BUUFADHU",
    exportInstructions: "KOODII ERGUUF MINYUU QINDAA'INA AI STUDIO FAYYADAMAA.",
    theme: "BIFA",
    lightMode: "IFA",
    darkMode: "DUKKANA",
    back: "DEEBI'I",
    notifications: "BEEKSISA",
    noNotifications: "BEEKSISA HAARAAN HIN JIRU",
    markAllRead: "HUNDA HAQI",
    newOrder: "AJAJA RAAWWATAME",
    driverFound: "KONKOLAACHISAAN ARGAMEERA!",
    driverArrived: "KONKOLAACHISAAN GA'EERA",
    paymentSuccess: "KAFALTIIN MILKAA'EERA",
    welcomeBack: "BAGA NAGAAAN DEEBITAN!",
    savedLocations: "BAKKEEWWAN OLKA'AMAN",
    home: "MANA",
    work: "HOJII",
    saveLocation: "BAKKA OLKA'I",
    locationName: "MAQAA BAKKAA",
    locationSaved: "BAKKI OLKA'AMEERA",
    locationDeleted: "BAKKI HAQAMEERA",
    loginTitle: "SEENSA SIRNAA",
    loginSubtitle: "SIRNA JALQABUUF GMAIL FI JECHA ICCITII KEESSAN GALCHAA",
    emailPlaceholder: "USER@GMAIL.COM",
    passwordLabel: "JECHA ICCITII",
    passwordPlaceholder: "JECHA ICCITII GALCHAA",
    getStarted: "JALQABI",
    errorGmail: "Maaloo teessoo Gmail sirrii galchaa",
    errorPassword: "Jechi iccitii yoo xiqqaate mallattoo 6 ta'uu qaba",
    telebirr: "Telebirr",
    cbe: "CBE Birr",
    card: "Kaardii Kireeditii",
    oromia: "Telebirr Baankii Oromiyaa",
    awash: "Baankii Awaash",
    baseFee: "Kaffaltii Bu'uuraa",
    priceBreakdown: "Gabaasa Gatii",
    distance: "Fageenya",
    perKmFee: "Kaffaltii KM tokkoof",
    surgeAdjustment: "Sirreeffama Olka'iinsa Gatii",
    totalPrice: "Gatii Waliigalaa",
    highDemand: "Naannoo kanatti barbaadamni guddaadha",
    rushHour: "Sirreeffama sa'aatii muddamaa",
    trafficInfo: "Oduu Tiraafikaa",
    recentSearches: "Barbaacha Dhiyoo",
    clearMap: "HAQI"
  }
};

const ADDIS_COORDINATES = {
  Merkato: { lat: 9.035, lng: 38.740 },
  Bole: { lat: 8.985, lng: 38.785 },
  "22": { lat: 9.019, lng: 38.783 },
  Bulbula: { lat: 8.915, lng: 38.805 }
};

// Mock driver data
const MOCK_DRIVER = {
  name: "Dawit Tadesse",
  rating: 4.9,
  deliveriesThisWeek: 142,
  bikeType: "Bajaj Pulsar 150",
  bikeModel: "Pulsar 150 Neon",
  bikeYear: "2023",
  image: "https://picsum.photos/seed/driver/200/200",
  idPhoto: "https://picsum.photos/seed/id/600/400",
  idType: "National ID / Passport",
  idNumber: "ET-9923-X",
  verificationStatus: "Verified",
  isVerified: true,
  status: "Nearby",
  distanceKm: 1.2
};

interface OnlineUser {
  id: string;
  name: string;
  color: string;
  avatar: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

interface SavedLocation {
  id: string;
  name: string;
  address: string;
  landmark?: string;
  icon: 'home' | 'briefcase' | 'map-pin';
}

export default function App() {
  const [isCalling, setIsCalling] = useState(false);
  const [showDriver, setShowDriver] = useState(false);
  const [landmark, setLandmark] = useState('');
  const [location, setLocation] = useState('Bole, Addis Ababa');
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [lastEstimatedTime, setLastEstimatedTime] = useState(0);
  const [trafficEvent, setTrafficEvent] = useState<string | null>(null);
  const [orderLocation, setOrderLocation] = useState({ x: 20, y: 20 }); // Percentage based
  const [currentDistance, setCurrentDistance] = useState(MOCK_DRIVER.distanceKm);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [showBikeModal, setShowBikeModal] = useState(false);
  const [view, setView] = useState<'login' | 'map' | 'payment' | 'settings'>('login');
  const [language, setLanguage] = useState<'en' | 'am' | 'om'>('en');
  const [deliveryCode, setDeliveryCode] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<'telebirr' | 'cbe' | 'card' | 'oromia' | 'awash'>('telebirr');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Welcome!',
      message: 'Welcome to the premium AddisVibe experience.',
      time: 'Just now',
      read: false,
      type: 'info'
    }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([
    { id: '1', name: 'Home', address: 'Bole, Addis Ababa', landmark: 'Near Friendship Mall', icon: 'home' },
    { id: '2', name: 'Work', address: 'Kazanchis, Addis Ababa', landmark: 'UN Avenue', icon: 'briefcase' }
  ]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDriverProfileModal, setShowDriverProfileModal] = useState(false);
  const [newLocationName, setNewLocationName] = useState('');
  const [currentLandmark, setCurrentLandmark] = useState<string | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeInput, setActiveInput] = useState<'location' | 'landmark' | null>(null);
  const [trafficLevel, setTrafficLevel] = useState<'Low' | 'Moderate' | 'Heavy'>('Heavy');
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [surgeMultiplier, setSurgeMultiplier] = useState(1.0);
  const [surgeReason, setSurgeReason] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<{ condition: string; precipChance: number } | null>(null);
  const [recentLocations, setRecentLocations] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentLocations');
    if (saved) {
      try {
        setRecentLocations(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse recent locations", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recentLocations', JSON.stringify(recentLocations));
  }, [recentLocations]);

  const saveRecentLocation = (loc: string) => {
    if (!loc || loc.trim() === '') return;
    setRecentLocations(prev => {
      const filtered = prev.filter(l => l !== loc);
      return [loc, ...filtered].slice(0, 5);
    });
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using wttr.in for real-time weather data in Addis Ababa
        const res = await fetch('https://wttr.in/Addis+Ababa?format=j1');
        if (!res.ok) throw new Error('Weather fetch failed');
        const data = await res.json();
        setWeatherData({
          condition: data.current_condition[0].weatherDesc[0].value,
          precipChance: parseInt(data.weather[0].hourly[0].chanceofrain)
        });
      } catch (e) {
        console.error("Weather fetch failed", e);
        // Fallback to clear weather if API fails
        setWeatherData({ condition: 'Clear', precipChance: 0 });
      }
    };
    fetchWeather();
  }, []);

  const applySurgePricing = (basePrice: number) => {
    let multiplier = 1.0;
    let reasons: string[] = [];

    // Weather Logic: rain or >50% precip chance = 1.25x
    const isRainy = weatherData?.condition.toLowerCase().includes('rain') || (weatherData?.precipChance || 0) > 50;
    if (isRainy) {
      multiplier = Math.max(multiplier, 1.25);
      reasons.push("Weather");
    }

    // Rush Hour Logic: 17:30 - 19:30 = 1.3x
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const rushStart = 17 * 60 + 30; // 17:30
    const rushEnd = 19 * 60 + 30;   // 19:30
    
    if (currentMinutes >= rushStart && currentMinutes <= rushEnd) {
      multiplier = Math.max(multiplier, 1.3);
      reasons.push("Rush Hour");
    }

    // Traffic Level Logic (Existing)
    if (trafficLevel === 'Heavy') {
      multiplier = Math.max(multiplier, 1.3);
      if (!reasons.includes("Traffic")) reasons.push("Traffic");
    }

    const finalPrice = Math.round(basePrice * multiplier);
    
    return {
      finalPrice,
      multiplier,
      reason: reasons.join(" & ")
    };
  };

  const [tripDistance, setTripDistance] = useState(0);

  const calculateHaversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const handleClearMap = () => {
    setLocation('');
    setLandmark('');
    setShowDriver(false);
    setIsCalling(false);
    setShowPriceBreakdown(false);
    setCurrentLandmark(null);
    setTrafficEvent(null);
    setEstimatedTime(0);
    setLastEstimatedTime(0);
    setCalculatedPrice(0);
    setSurgeMultiplier(1.0);
    setSurgeReason(null);
    addNotification(t.clearMap, 'System state has been reset.', 'info');
  };

  const calculatePrice = (pickup: string, delivery: string) => {
    // Normalize names for coordinates lookup
    const pKey = pickup.includes('Mercato') ? 'Merkato' : pickup.includes('Bole') ? 'Bole' : pickup.includes('22') ? '22' : pickup.includes('Bulbula') ? 'Bulbula' : 'Merkato';
    const dKey = delivery.includes('Mercato') ? 'Merkato' : delivery.includes('Bole') ? 'Bole' : delivery.includes('22') ? '22' : delivery.includes('Bulbula') ? 'Bulbula' : 'Bole';

    const pCoord = ADDIS_COORDINATES[pKey as keyof typeof ADDIS_COORDINATES];
    const dCoord = ADDIS_COORDINATES[dKey as keyof typeof ADDIS_COORDINATES];

    const distance = calculateHaversineDistance(pCoord.lat, pCoord.lng, dCoord.lat, dCoord.lng);
    
    const baseFee = 150;
    const baseDistance = 3;
    const perKmFee = 50;
    
    let price = baseFee;
    if (distance > baseDistance) {
      price += (distance - baseDistance) * perKmFee;
    }
    
    const surge = applySurgePricing(price);
    
    // Notify user if surge is active
    if (surge.multiplier > 1 && surge.multiplier !== surgeMultiplier) {
      const reasonText = surge.reason || "High Demand";
      addNotification("Surge Pricing Active", `Prices are slightly higher due to ${reasonText}.`, 'warning');
    }

    setSurgeMultiplier(surge.multiplier);
    setSurgeReason(surge.reason);
    const finalPrice = Math.round(surge.finalPrice / 5) * 5;
    setCalculatedPrice(finalPrice);
    setTripDistance(parseFloat(distance.toFixed(1)));
    return finalPrice;
  };

  const ADDIS_SUGGESTIONS = [
    "Bole International Airport",
    "Edna Mall, Bole",
    "Friendship City Center",
    "Meskel Square",
    "Kazanchis (UN Avenue)",
    "Piazza (City Center)",
    "Mercato (Grand Market)",
    "African Union Headquarters",
    "National Museum of Ethiopia",
    "Sheraton Addis",
    "Hilton Addis Ababa",
    "Sarbet",
    "Old Airport",
    "Gerji",
    "CMC",
    "Summit",
    "Jemo",
    "Lebu",
    "Megenagna",
    "Haya Hulet",
    "Ayat",
    "Gurd Shola",
    "4 Kilo (Unity Park)",
    "5 Kilo",
    "6 Kilo (AAU)",
    "Shiro Meda",
    "Entoto Park",
    "Gullele",
    "Kolfe",
    "Keraniyo",
    "Lebu Mebrat Hail",
    "Lafto Mall",
    "Mekanisa",
    "Gotera",
    "Kality",
    "Akaki",
    "Tuludimtu",
    "Hana Mariam",
    "Bisrate Gabriel",
    "Tor Hailoch",
    "Wingate",
    "Addisu Gebeya",
    "Shola Market",
    "Signal",
    "Lem Hotel",
    "Imperial Hotel",
    "Jackros",
    "Salite Mihret",
    "Century Mall",
    "Zefmesh Grand Mall",
    "Dembel City Center",
    "Getu Commercial Center",
    "Skylight Hotel",
    "Hyatt Regency Addis Ababa",
    "Radisson Blu",
    "Marriott Executive Apartments",
    "Holy Trinity Cathedral",
    "Anwar Mosque",
    "St. George's Cathedral",
    "Red Terror Martyrs' Memorial",
    "ECA (Economic Commission for Africa)",
    "Bole Medhanialem",
    "Bole Atlas",
    "Bole Japan",
    "Bole Rwanda",
    "Bole Arabsa",
    "Bulbula",
    "Kotebe",
    "Yeka Abado",
    "Ferensay Legasion",
    "Arat Kilo",
    "Saris",
    "Nefas Silk",
    "Gotera Interchange",
    "Mexico Square",
    "Lideta",
    "Geja Sefer",
    "Kera",
    "Gofa Camp",
    "Ayer Tena",
    "Zenebework",
    "Total Merato",
    "Abinet",
    "Sebategna",
    "Autobus Tera",
    "Somali Tera"
  ];

  const t = TRANSLATIONS[language];

  const addNotification = (title: string, message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const newNotif: Notification = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      message,
      time: 'Just now',
      read: false,
      type
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const saveCurrentLocation = () => {
    if (!newLocationName.trim() || !location.trim()) return;
    
    const newSavedLoc: SavedLocation = {
      id: Math.random().toString(36).substr(2, 9),
      name: newLocationName,
      address: location,
      landmark: landmark,
      icon: 'map-pin'
    };
    
    setSavedLocations(prev => [...prev, newSavedLoc]);
    setNewLocationName('');
    setShowSaveModal(false);
    addNotification(t.locationSaved, `${newLocationName} has been added to your saved locations.`, 'success');
  };

  const deleteLocation = (id: string) => {
    setSavedLocations(prev => prev.filter(loc => loc.id !== id));
    addNotification(t.locationDeleted, `Location has been removed.`, 'info');
  };

  const selectSavedLocation = (loc: SavedLocation) => {
    setLocation(loc.address);
    if (loc.landmark) setLandmark(loc.landmark);
    calculatePrice(loc.address, landmark || 'Bole');
    setShowPriceBreakdown(true);
    addNotification('Location Selected', `Switched to ${loc.name}`, 'info');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    
    const emailTrimmed = userEmail.trim().toLowerCase();
    const passwordTrimmed = password.trim();

    // Simulate network delay
    setTimeout(() => {
      setIsLoggingIn(false);
      if (emailTrimmed.endsWith('@gmail.com') && passwordTrimmed.length >= 6) {
        setView('map');
        addNotification(t.welcomeBack, 'You are now logged in to your premium account.', 'success');
      } else if (!emailTrimmed.endsWith('@gmail.com')) {
        setLoginError(t.errorGmail);
      } else {
        setLoginError(t.errorPassword);
      }
    }, 1500);
  };

  // WebSocket for presence
  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${protocol}//${window.location.host}`);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'presence') {
        setOnlineUsers(data.users);
      }
    };

    return () => socket.close();
  }, []);

  // Simulate finding a driver and then their movement
  useEffect(() => {
    if (isCalling) {
      const timer = setTimeout(() => {
        setIsCalling(false);
        let trafficFactor = 1.0;
        if (trafficLevel === 'Low') trafficFactor = 0.7;
        if (trafficLevel === 'Moderate') trafficFactor = 1.2;
        if (trafficLevel === 'Heavy') trafficFactor = 2.2;

        const time = Math.round((MOCK_DRIVER.distanceKm * 2.5 * trafficFactor) + 1);
        setEstimatedTime(time);
        setShowDriver(true);
        addNotification(t.driverFound, `${MOCK_DRIVER.name} is on the way with their ${MOCK_DRIVER.bikeType}.`, 'success');
        // Start driver at a random nearby position
        setOrderLocation({ x: 70, y: 30 });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCalling]);

  // Simulate driver moving towards user (50, 50)
  useEffect(() => {
    // Traffic fluctuation disabled as per request to keep it 'Heavy'
  }, []);

  useEffect(() => {
    if (showDriver) {
      const LANDMARKS = [
        { name: 'Merkato', x: 33, y: 25 },
        { name: 'Edna Mall', x: 75, y: 50 },
        { name: 'Meskel Sq.', x: 50, y: 66 },
        { name: 'Bole Medhanialem', x: 70, y: 45 },
        { name: 'Kazanchis', x: 55, y: 55 },
        { name: 'Piazza', x: 40, y: 35 }
      ];

      const interval = setInterval(() => {
        setOrderLocation(prev => {
          const dx = 50 - prev.x;
          const dy = 50 - prev.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 1) {
            clearInterval(interval);
            addNotification(t.driverArrived, `${MOCK_DRIVER.name} has arrived at your location.`, 'warning');
            setCurrentLandmark(null);
            return { x: 50, y: 50 };
          }

          // Check for nearby landmarks
          const nearbyLandmark = LANDMARKS.find(l => {
            const ldx = l.x - prev.x;
            const ldy = l.y - prev.y;
            return Math.sqrt(ldx * ldx + ldy * ldy) < 5;
          });

          if (nearbyLandmark) {
            setCurrentLandmark(nearbyLandmark.name);
          } else {
            setCurrentLandmark(null);
          }

          // Move speed based on traffic
          let speedMultiplier = 0.5;
          if (trafficLevel === 'Heavy') speedMultiplier = 0.2;
          if (trafficLevel === 'Low') speedMultiplier = 0.8;

          // Random traffic events
          if (Math.random() > 0.95 && !trafficEvent) {
            const events = [
              "Congestion at Intersection",
              "Road Construction Ahead",
              "Traffic Light Delay",
              "Clear Path Detected",
              "Slowing for Pedestrians"
            ];
            const event = events[Math.floor(Math.random() * events.length)];
            setTrafficEvent(event);
            setTimeout(() => setTrafficEvent(null), 4000);
          }

          if (trafficEvent?.includes("Clear")) speedMultiplier *= 1.5;
          if (trafficEvent?.includes("Congestion") || trafficEvent?.includes("Construction")) speedMultiplier *= 0.5;

          const moveX = (dx / dist) * speedMultiplier;
          const moveY = (dy / dist) * speedMultiplier;
          
          const newX = prev.x + moveX;
          const newY = prev.y + moveY;

          // Update distance and time based on progress
          const newDist = Math.max(0, MOCK_DRIVER.distanceKm * (dist / 30));
          setCurrentDistance(parseFloat(newDist.toFixed(1)));
          
          // Dynamic ETA logic
          let trafficFactor = 1.0;
          if (trafficLevel === 'Low') trafficFactor = 0.7;
          if (trafficLevel === 'Moderate') trafficFactor = 1.2;
          if (trafficLevel === 'Heavy') trafficFactor = 2.2;

          let eventDelay = 0;
          if (trafficEvent?.includes("Congestion")) eventDelay = 3;
          if (trafficEvent?.includes("Construction")) eventDelay = 5;
          if (trafficEvent?.includes("Clear")) eventDelay = -2;

          let landmarkDelay = 0;
          if (nearbyLandmark) {
            landmarkDelay = 2; // Delays near landmarks due to congestion
          }

          const baseTime = newDist * 2.5; // Base minutes per km
          const finalEta = Math.round((baseTime * trafficFactor) + landmarkDelay + eventDelay);

          const newEta = Math.max(1, finalEta);
          if (newEta !== estimatedTime) {
            setLastEstimatedTime(estimatedTime);
            setEstimatedTime(newEta);
          }

          return { x: newX, y: newY };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showDriver, landmark, t.driverArrived, trafficLevel, trafficEvent, estimatedTime]);

  const PriceBreakdown = () => {
    const [displayPrice, setDisplayPrice] = useState(0);

    useEffect(() => {
      if (showPriceBreakdown) {
        let start = 0;
        const end = calculatedPrice;
        const duration = 1000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setDisplayPrice(end);
            clearInterval(timer);
          } else {
            setDisplayPrice(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [showPriceBreakdown, calculatedPrice]);

    return (
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="absolute bottom-0 left-0 right-0 z-[120] bg-addis-card brutal-border border-b-0 p-8 pb-12 shadow-high-contrast"
      >
        <div className="w-16 h-2 bg-addis-surface brutal-border mx-auto mb-8" />
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display tracking-tighter text-addis-text uppercase">{t.priceBreakdown}</h2>
          <button onClick={() => setShowPriceBreakdown(false)} className="w-10 h-10 brutal-border bg-addis-surface flex items-center justify-center text-addis-text hover:bg-rose-500 hover:text-white transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 brutal-border bg-addis-surface flex items-center justify-center text-addis-text">
                <Navigation size={20} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-addis-muted">{t.distance}</span>
            </div>
            <span className="text-xl font-display text-addis-text tracking-widest">{tripDistance} KM</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 brutal-border bg-addis-surface flex items-center justify-center text-addis-text">
                <Wallet size={20} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-addis-muted">{t.baseFee}</span>
            </div>
            <span className="text-xl font-display text-addis-text tracking-widest">ETB 150.00</span>
          </div>

          {tripDistance > 3 && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 brutal-border bg-addis-surface flex items-center justify-center text-addis-text">
                  <ArrowRight size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-addis-muted">{t.perKmFee}</span>
              </div>
              <span className="text-xl font-display text-addis-text tracking-widest">ETB {((tripDistance - 3) * 50).toFixed(2)}</span>
            </div>
          )}

          {surgeMultiplier > 1 && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 brutal-border bg-rose-500/20 flex items-center justify-center text-rose-500">
                  <Clock size={20} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-500">{surgeReason || t.highDemand}</span>
              </div>
              <span className="text-xl font-display text-rose-500 tracking-widest">x{surgeMultiplier}</span>
            </div>
          )}
        </div>

        <div className="bg-addis-surface brutal-border p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-addis-muted">{t.totalPrice}</span>
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500/20 px-4 py-2 brutal-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">{t.trafficInfo}</span>
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-addis-muted text-xl font-display">ETB</span>
            <span className="text-5xl font-display text-electric-yellow tracking-tighter">{displayPrice}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 bg-addis-surface brutal-border p-4 flex items-center justify-center gap-3 hover:bg-addis-card transition-all cursor-pointer group">
            <img src="https://picsum.photos/seed/telebirr/40/40" className="w-8 h-8 brutal-border" />
            <span className="text-[10px] font-black uppercase tracking-widest text-addis-text group-hover:text-electric-yellow">Telebirr</span>
          </div>
          <div className="flex-1 bg-addis-surface brutal-border p-4 flex items-center justify-center gap-3 hover:bg-addis-card transition-all cursor-pointer group">
            <img src="https://picsum.photos/seed/cbe/40/40" className="w-8 h-8 brutal-border" />
            <span className="text-[10px] font-black uppercase tracking-widest text-addis-text group-hover:text-electric-yellow">CBE Birr</span>
          </div>
        </div>

        <button 
          onClick={() => {
            setShowPriceBreakdown(false);
            saveRecentLocation(location);
            if (landmark) saveRecentLocation(landmark);
            setIsCalling(true);
          }}
          className="w-full bg-electric-yellow text-addis-dark font-display h-20 brutal-border text-2xl uppercase tracking-[0.2em] hover:translate-x-1 hover:-translate-y-1 transition-all shadow-high-contrast flex items-center justify-center gap-3"
        >
          {t.confirmOrder}
          <ArrowRight size={28} />
        </button>
      </motion.div>
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-addis-dark font-sans">
      {/* Background Map (Stylized) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Dark Base */}
        <div className="absolute inset-0 bg-addis-dark" />
        
        {/* Grid System */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(#F0FF00_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-electric-yellow/20 to-transparent z-10 shadow-[0_0_15px_rgba(240,255,0,0.3)]"
        />

        {/* Traffic Overlay */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Major Road 1: Bole Road */}
          <motion.path
            d="M 75 50 L 50 66 L 33 25"
            fill="none"
            stroke={trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Major Road 2: Ring Road Section */}
          <motion.path
            d="M 10 40 Q 50 10 90 40 T 50 90"
            fill="none"
            stroke={trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'}
            strokeWidth="3"
            strokeDasharray="10 5"
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ 
              strokeDashoffset: [0, -15],
              stroke: trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'
            }}
            transition={{ 
              strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
              stroke: { duration: 0.5 }
            }}
          />

          {/* Major Road 3: Churchill Ave */}
          <motion.path
            d="M 40 10 L 40 90"
            fill="none"
            stroke={trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'}
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ 
              stroke: trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'
            }}
          />

          {/* Major Road 4: Haile Gebrselassie St */}
          <motion.path
            d="M 10 60 L 90 60"
            fill="none"
            stroke={trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'}
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            animate={{ 
              stroke: trafficLevel === 'Low' ? '#10b981' : trafficLevel === 'Moderate' ? '#f59e0b' : '#ef4444'
            }}
          />
        </svg>

        {/* Atmospheric Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric-yellow/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electric-yellow/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        
        {/* Network Lines (Simulated) */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <line x1="33%" y1="25%" x2="75%" y2="50%" stroke="#F0FF00" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="75%" y1="50%" x2="50%" y2="66%" stroke="#F0FF00" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="66%" x2="33%" y2="25%" stroke="#F0FF00" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-addis-dark/30 to-addis-dark" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" /> {/* Vignette */}
        
        {/* Simulated Map Markers */}
        <div className="absolute top-1/4 left-1/3 text-electric-yellow/60 group">
          <div className="relative">
            <MapPin size={24} className="group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(240,255,0,0.4)]" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-electric-yellow rounded-full animate-ping" />
          </div>
          <span className="text-[10px] uppercase tracking-widest mt-2 block font-black bg-addis-card/60 px-3 py-1 rounded-full backdrop-blur-md border border-addis-border">Merkato</span>
        </div>
        <div className="absolute top-1/2 right-1/4 text-electric-yellow/60 group">
          <div className="relative">
            <MapPin size={24} className="group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(240,255,0,0.4)]" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-electric-yellow rounded-full animate-ping" />
          </div>
          <span className="text-[10px] uppercase tracking-widest mt-2 block font-black bg-addis-card/60 px-3 py-1 rounded-full backdrop-blur-md border border-addis-border">Edna Mall</span>
        </div>
        <div className="absolute bottom-1/3 left-1/2 text-electric-yellow/60 group">
          <div className="relative">
            <MapPin size={24} className="group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(240,255,0,0.4)]" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-electric-yellow rounded-full animate-ping" />
          </div>
          <span className="text-[10px] uppercase tracking-widest mt-2 block font-black bg-addis-card/60 px-3 py-1 rounded-full backdrop-blur-md border border-addis-border">Meskel Sq.</span>
        </div>

        {/* Pulse Animation when calling or showing driver */}
        {(isCalling || showDriver) && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="pulse-ring w-20 h-20" />
            <div className="pulse-ring w-20 h-20 [animation-delay:0.5s]" />
            <div className="pulse-ring w-20 h-20 [animation-delay:1s]" />
            <div className="relative z-10 w-4 h-4 bg-electric-yellow rounded-full shadow-[0_0_20px_rgba(240,255,0,0.8)]" />
          </div>
        )}

        {/* Dynamic Driver Marker */}
        {showDriver && (
          <motion.div 
            animate={{ left: `${orderLocation.x}%`, top: `${orderLocation.y}%` }}
            transition={{ duration: 1, ease: "linear" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative group">
              {/* Subtle Pulsing Aura */}
              <div className="absolute inset-0 bg-electric-yellow/20 rounded-full blur-xl animate-[pulse_3s_infinite]" />
              
              {/* Floating Label */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-addis-card/90 backdrop-blur-md border border-electric-yellow/30 px-2 py-1 rounded-full shadow-2xl flex items-center gap-1.5 whitespace-nowrap"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <div className="flex items-center gap-1">
                    <Clock size={8} className="text-electric-yellow" />
                    <span className="text-addis-text font-black text-[8px] tracking-tight">{estimatedTime}m</span>
                  </div>
                  {currentLandmark && (
                    <div className="flex items-center gap-0.5">
                      <Navigation size={6} className="text-electric-yellow animate-pulse" />
                      <span className="text-[7px] font-black text-electric-yellow uppercase tracking-tighter">Near {currentLandmark}</span>
                    </div>
                  )}
                </div>
                <div className="w-px h-2 bg-addis-border" />
                <span className="text-addis-muted font-bold text-[7px] uppercase tracking-wider">{currentDistance}km</span>
              </motion.div>

              {/* Bike Icon Container */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 15px rgba(240,255,0,0.2)',
                    '0 0 30px rgba(240,255,0,0.5)',
                    '0 0 15px rgba(240,255,0,0.2)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-addis-card border-2 border-electric-yellow p-1.5 rounded-xl hover:border-white transition-colors cursor-help"
              >
                {/* Pulsing Rings */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 rounded-xl border border-electric-yellow/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="absolute inset-0 rounded-xl border border-electric-yellow/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
                </div>

                <Bike size={18} className="text-electric-yellow" />
                
                {/* Hover Rating Overlay */}
                <div className="absolute -right-1 top-0 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[calc(100%+6px)] transition-all duration-300 pointer-events-none">
                  <div className="bg-electric-yellow text-addis-dark px-1.5 py-0.5 rounded-md shadow-2xl flex items-center gap-1 whitespace-nowrap">
                    <Star size={8} fill="currentColor" />
                    <span className="text-[8px] font-black leading-none">{MOCK_DRIVER.rating}</span>
                  </div>
                  {/* Small arrow for the rating tooltip */}
                  <div className="absolute top-1/2 -left-0.5 -translate-y-1/2 w-1.5 h-1.5 bg-electric-yellow rotate-45 rounded-sm" />
                </div>
              </motion.div>
              
              {/* Pointer Arrow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-electric-yellow rotate-45 rounded-sm" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Header */}
      <header className="relative z-20 p-6 flex justify-between items-center bg-addis-dark brutal-border border-x-0 border-t-0">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => setView('map')}>
            <h1 className="text-2xl font-display tracking-tighter text-addis-text flex items-center gap-2">
              ADDIS<span className="text-electric-yellow">VIBE</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.5em] text-addis-muted font-black">Premium Delivery</p>
          </div>
          
          {/* Traffic Info Indicator */}
          <div className="flex items-center gap-2 bg-addis-surface brutal-border px-3 py-2 ml-2">
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              trafficLevel === 'Low' ? 'bg-emerald-500 shadow-[0_0_12px_#10b981]' : 
              trafficLevel === 'Moderate' ? 'bg-amber-500 shadow-[0_0_12px_#f59e0b]' : 
              'bg-rose-500 shadow-[0_0_12px_#ef4444]'
            }`} />
            <span className="text-[10px] font-black uppercase tracking-widest text-addis-text">
              <span className="hidden xs:inline">Traffic: </span>{trafficLevel}
            </span>
          </div>

          {/* Online Users Indicator */}
          <div className="hidden sm:flex items-center gap-3 bg-addis-surface brutal-border px-3 py-2 ml-2">
            <div className="relative">
              <Users size={18} className="text-addis-text" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-addis-dark" />
            </div>
            <div className="flex -space-x-3">
              {onlineUsers.slice(0, 3).map((user) => (
                <div 
                  key={user.id}
                  className="w-8 h-8 rounded-full border-2 border-addis-dark flex items-center justify-center text-[12px] font-black uppercase shadow-sm"
                  style={{ backgroundColor: user.color, color: '#000' }}
                  title={user.name}
                >
                  {user.name[0]}
                </div>
              ))}
              {onlineUsers.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-addis-surface border-2 border-addis-dark flex items-center justify-center text-[10px] font-black">
                  +{onlineUsers.length - 3}
                </div>
              )}
            </div>
            <span className="text-[10px] font-black text-addis-text uppercase tracking-widest ml-1">
              {onlineUsers.length} ONLINE
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-addis-card border border-addis-border flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setView('settings')}>
            <img src="https://picsum.photos/seed/user/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          {/* Notification Bell */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                showNotifications ? 'bg-electric-yellow text-addis-dark' : 'bg-addis-card border border-addis-border text-addis-text'
              }`}
            >
              <Bell size={20} />
            </button>
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full border-2 border-addis-dark flex items-center justify-center">
                {unreadCount}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Notification Center Overlay */}
      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="absolute inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="absolute top-24 left-6 right-6 z-50 bg-addis-card border border-addis-border rounded-[32px] p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-electric-yellow" />
                  <h2 className="text-lg font-black tracking-tight text-addis-text">{t.notifications}</h2>
                </div>
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-[10px] font-black uppercase tracking-widest text-electric-yellow hover:opacity-80 transition-opacity"
                  >
                    {t.markAllRead}
                  </button>
                )}
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {notifications.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-addis-surface rounded-full flex items-center justify-center mx-auto mb-4 text-addis-muted opacity-20">
                      <Bell size={32} />
                    </div>
                    <p className="text-addis-muted text-sm font-medium">{t.noNotifications}</p>
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        notif.read ? 'bg-addis-surface/50 border-addis-border/50' : 'bg-addis-surface border-electric-yellow/20 shadow-lg'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-bold text-sm ${notif.read ? 'text-addis-text/60' : 'text-addis-text'}`}>
                          {notif.title}
                        </h3>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-addis-muted opacity-50">
                          {notif.time}
                        </span>
                      </div>
                      <p className={`text-xs leading-relaxed ${notif.read ? 'text-addis-muted/60' : 'text-addis-muted'}`}>
                        {notif.message}
                      </p>
                      {!notif.read && (
                        <div className="mt-3 flex justify-end">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-yellow shadow-[0_0_8px_rgba(240,255,0,0.8)]" />
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Save Location Modal */}
      <AnimatePresence>
        {showSaveModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSaveModal(false)}
              className="absolute inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[85%] max-w-sm bg-addis-card border border-addis-border rounded-[32px] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-electric-yellow/10 flex items-center justify-center text-electric-yellow">
                  <MapPin size={24} />
                </div>
                <button 
                  onClick={() => setShowSaveModal(false)}
                  className="w-8 h-8 rounded-full bg-addis-surface flex items-center justify-center text-addis-muted"
                >
                  <X size={16} />
                </button>
              </div>
              
              <h3 className="text-xl font-black tracking-tight mb-1 text-addis-text">{t.saveLocation}</h3>
              <p className="text-addis-muted text-xs uppercase tracking-widest mb-6 truncate">{location}</p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-addis-muted ml-2">{t.locationName}</label>
                  <input 
                    type="text" 
                    value={newLocationName}
                    onChange={(e) => setNewLocationName(e.target.value)}
                    placeholder="e.g. Gym, Aunt's House"
                    className="w-full bg-addis-surface border border-addis-border rounded-2xl p-4 text-addis-text placeholder:text-addis-muted focus:ring-electric-yellow focus:border-electric-yellow transition-all"
                  />
                </div>
              </div>

              <button 
                onClick={saveCurrentLocation}
                disabled={!newLocationName.trim()}
                className="w-full mt-8 bg-electric-yellow text-addis-dark font-black h-12 rounded-xl text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 shadow-lg"
              >
                {t.saveLocation}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'login' && (
          <motion.div
            key="login-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-addis-dark flex flex-col items-center justify-center px-8"
          >
            <div className="mb-12 text-center">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-24 h-24 bg-electric-yellow rounded-[32px] flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(240,255,0,0.3)]"
              >
                <Bike size={48} className="text-addis-dark" />
              </motion.div>
              <h1 className="text-3xl font-display tracking-tighter text-addis-text mb-1 flex items-center justify-center gap-2">
                ADDIS<span className="text-electric-yellow">VIBE</span>
              </h1>
              <p className="text-addis-muted text-[10px] uppercase tracking-[0.3em] font-bold mb-6">{t.loginSubtitle}</p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-6">
              <div className="space-y-4">
                {loginError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-rose-500/20 brutal-border p-4 text-rose-500 text-[10px] font-black text-center uppercase tracking-widest"
                  >
                    {loginError}
                  </motion.div>
                )}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted ml-2">Gmail</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-addis-surface brutal-border p-5 text-addis-text placeholder:text-addis-muted/30 focus:shadow-high-contrast transition-all font-display text-lg tracking-widest uppercase"
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-addis-muted">
                      <Users size={24} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted ml-2">{t.passwordLabel}</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-addis-surface brutal-border p-5 text-addis-text placeholder:text-addis-muted/30 focus:shadow-high-contrast transition-all font-display text-lg tracking-widest"
                    />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-addis-muted">
                      <Lock size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-electric-yellow text-addis-dark py-4 brutal-border shadow-high-contrast text-lg font-display tracking-[0.2em] uppercase hover:translate-x-1 hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoggingIn ? (
                  <div className="w-6 h-6 border-4 border-addis-dark/20 border-t-addis-dark rounded-full animate-spin" />
                ) : (
                  <>
                    {t.getStarted}
                    <ArrowRight size={24} />
                  </>
                )}
              </button>

              {userEmail.toLowerCase() === 'dinacuwe@gmail.com' && (
                <button 
                  type="button"
                  onClick={() => {
                    setUserEmail('demo@gmail.com');
                    setPassword('123456');
                  }}
                  className="w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] text-electric-yellow border-2 border-electric-yellow/20 hover:bg-electric-yellow/10 transition-all brutal-border"
                >
                  Use Demo Account
                </button>
              )}
            </form>

            <div className="mt-12 flex gap-4">
              {['en', 'am', 'om'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${
                    language === lang 
                    ? 'bg-addis-surface border-addis-border text-addis-text' 
                    : 'border-transparent text-addis-muted opacity-50 hover:opacity-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'map' && (
          <motion.div
            key="map-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            {/* Main UI */}
            <main className="relative z-20 px-6 pt-4 flex flex-col h-[calc(100vh-100px)]">
              {/* Location Input Group */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 mb-8 relative"
              >
                {location && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={handleClearMap}
                    className="absolute -top-3 -right-2 z-30 bg-rose-500 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 brutal-border shadow-sm hover:bg-rose-600 transition-colors"
                  >
                    {t.clearMap}
                  </motion.button>
                )}
                <div className="bg-addis-card brutal-border p-4 flex items-center gap-4 relative focus-within:shadow-high-contrast transition-all">
                  <div className="w-10 h-10 rounded-xl bg-electric-yellow/10 flex items-center justify-center text-electric-yellow border border-electric-yellow/20">
                    <Navigation size={20} />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted block mb-0.5">{t.pickupLocation}</label>
                    <input 
                      type="text" 
                      value={location}
                      onFocus={() => {
                        setActiveInput('location');
                        setShowSuggestions(true);
                      }}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-transparent border-none p-0 text-addis-text font-display text-xl focus:ring-0 w-full placeholder:text-addis-muted uppercase tracking-widest"
                      placeholder="Where are you?"
                    />
                  </div>
                  <button className="text-electric-yellow p-2 hover:bg-addis-surface rounded-lg transition-colors">
                    <MapPin size={22} />
                  </button>
                </div>

                <div className="bg-addis-card brutal-border p-4 flex items-center gap-4 relative focus-within:shadow-high-contrast transition-all">
                  <div className="w-10 h-10 rounded-xl bg-addis-surface flex items-center justify-center text-addis-muted border border-addis-border">
                    <Search size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted block">{t.landmark}</label>
                      <span className="text-[8px] text-electric-yellow font-black uppercase tracking-widest">Accuracy Boost</span>
                    </div>
                    <input 
                      type="text" 
                      value={landmark}
                      onFocus={() => {
                        setActiveInput('landmark');
                        setShowSuggestions(true);
                      }}
                      onChange={(e) => setLandmark(e.target.value)}
                      className="bg-transparent border-none p-0 text-addis-text font-display text-xl focus:ring-0 w-full placeholder:text-addis-muted uppercase tracking-widest"
                      placeholder="e.g. Behind Edna Mall"
                    />
                  </div>
                  {location && (
                    <button 
                      onClick={() => setShowSaveModal(true)}
                      className="text-electric-yellow p-2 hover:bg-addis-surface rounded-lg transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  )}
                </div>

                {/* Search Suggestions Dropdown */}
                <AnimatePresence>
                  {showSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 right-0 top-full mt-2 z-[100] bg-addis-card border border-addis-border rounded-2xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto no-scrollbar"
                    >
                      <div className="p-3 border-b border-addis-border flex justify-between items-center bg-addis-surface/50">
                        <span className="text-[10px] uppercase tracking-widest text-addis-muted font-black">Popular in Addis Ababa</span>
                        <button onClick={() => setShowSuggestions(false)} className="text-addis-muted hover:text-addis-text">
                          <X size={14} />
                        </button>
                      </div>
                      <div className="p-1">
                        {/* Recent Searches Section */}
                        {recentLocations.length > 0 && (activeInput === 'location' ? location : landmark).length === 0 && (
                          <>
                            <div className="px-3 py-2 flex items-center gap-2 text-addis-muted">
                              <Clock size={12} />
                              <span className="text-[9px] font-bold uppercase tracking-widest">{t.recentSearches}</span>
                            </div>
                            {recentLocations.map((recent, idx) => (
                              <button
                                key={`recent-${idx}`}
                                onClick={() => {
                                  if (activeInput === 'location') {
                                    setLocation(recent);
                                    calculatePrice(recent, landmark || 'Bole');
                                  } else {
                                    setLandmark(recent);
                                    calculatePrice(location, recent);
                                  }
                                  setShowSuggestions(false);
                                  setShowPriceBreakdown(true);
                                }}
                                className="w-full text-left p-3 hover:bg-addis-surface rounded-xl flex items-center gap-3 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-addis-surface flex items-center justify-center text-addis-muted group-hover:text-electric-yellow transition-colors">
                                  <Clock size={16} />
                                </div>
                                <span className="text-sm font-medium text-addis-text">{recent}</span>
                              </button>
                            ))}
                            <div className="h-px bg-addis-border mx-2 my-1" />
                          </>
                        )}

                        {ADDIS_SUGGESTIONS.filter(s => {
                          const val = activeInput === 'location' ? location : landmark;
                          return s.toLowerCase().includes(val.toLowerCase());
                        }).map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (activeInput === 'location') {
                                setLocation(suggestion);
                                calculatePrice(suggestion, landmark || 'Bole');
                              } else {
                                setLandmark(suggestion);
                                calculatePrice(location, suggestion);
                              }
                              setShowSuggestions(false);
                              setShowPriceBreakdown(true);
                            }}
                            className="w-full text-left p-3 hover:bg-addis-surface rounded-xl flex items-center gap-3 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-addis-surface flex items-center justify-center text-addis-muted group-hover:text-electric-yellow transition-colors">
                              <MapPin size={16} />
                            </div>
                            <span className="text-sm font-medium text-addis-text">{suggestion}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Saved Locations Quick Select */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                  {savedLocations.map((loc) => (
                    <motion.button
                      key={loc.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => selectSavedLocation(loc)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        deleteLocation(loc.id);
                      }}
                      className="flex items-center gap-2 bg-addis-card brutal-border px-4 py-2.5 flex-shrink-0 hover:bg-electric-yellow hover:text-addis-dark transition-all group"
                    >
                      <div className="text-electric-yellow group-hover:text-addis-dark">
                        {loc.icon === 'home' ? <Home size={16} /> : loc.icon === 'briefcase' ? <Briefcase size={16} /> : <MapPin size={16} />}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{loc.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Online Users Scrolling List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-addis-text">{t.liveCommunity}</h3>
                  </div>
                  <span className="text-[10px] font-black text-addis-dark bg-electric-yellow px-3 py-1 brutal-border">
                    {onlineUsers.length} {t.online}
                  </span>
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {onlineUsers.map((user) => (
                    <motion.div 
                      key={user.id}
                      whileHover={{ y: -4 }}
                      className="flex-shrink-0 flex flex-col items-center gap-2"
                    >
                      <div className="relative p-0.5 rounded-2xl border border-addis-border bg-addis-card shadow-lg">
                        <div className="w-14 h-14 rounded-[14px] overflow-hidden border-2" style={{ borderColor: user.color }}>
                          <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-addis-dark flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-addis-muted truncate w-14 text-center">{user.name}</span>
                    </motion.div>
                  ))}
                  
                  {/* Empty state if only one user */}
                  {onlineUsers.length < 3 && (
                    <div className="flex-shrink-0 w-14 h-14 rounded-[14px] border border-dashed border-addis-border flex items-center justify-center text-addis-muted opacity-25">
                      <Users size={20} />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Action Area */}
              <div className="mt-auto pb-12 flex flex-col items-center">
                <AnimatePresence mode="wait">
                  {!isCalling ? (
                    <motion.button
                      key="call-btn"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.1, opacity: 0 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsCalling(true)}
                      className="group relative w-36 h-36 rounded-full brutal-border bg-electric-yellow flex flex-col items-center justify-center shadow-high-contrast overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                      <Bike size={40} className="text-addis-dark mb-1 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-addis-dark font-display text-sm tracking-widest uppercase text-center px-4 leading-tight">{t.callDelivery}</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="calling-state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <div className="text-electric-yellow font-display text-3xl tracking-tighter uppercase mb-2 animate-pulse">
                        {t.pinging}
                      </div>
                      <p className="text-addis-muted text-xs uppercase tracking-[0.4em] font-black">{t.searchingNear} {landmark || 'Current Location'}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </motion.div>
        )}

        {view === 'payment' && (
          <motion.div
            key="payment-view"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex-1 px-6 pt-4 overflow-y-auto no-scrollbar pb-24"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setView('map')}
                  className="w-12 h-12 brutal-border bg-addis-surface flex items-center justify-center text-addis-muted hover:text-addis-text transition-all"
                >
                  <X size={24} />
                </button>
                <h2 className="text-2xl font-display tracking-widest uppercase text-addis-text">{t.paymentSummary}</h2>
              </div>
              <div className="bg-emerald-500/20 brutal-border px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Secured</span>
              </div>
            </div>

            {/* Secure Escrow Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                damping: 12, 
                stiffness: 200,
                delay: 0.3 
              }}
              className="bg-emerald-500/10 brutal-border p-8 mb-10 flex flex-col items-center text-center relative overflow-hidden group shadow-high-contrast"
            >
              <div className="w-20 h-20 brutal-border bg-emerald-500 flex items-center justify-center text-addis-dark shadow-[0_0_40px_rgba(16,185,129,0.5)] mb-6 relative z-10 transition-transform group-hover:scale-110">
                <ShieldCheck size={40} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-emerald-500 font-display text-2xl uppercase tracking-tighter mb-3">{t.fundsEscrow}</h3>
                <p className="text-addis-text opacity-70 text-sm leading-relaxed max-w-[280px] mx-auto font-medium">{t.escrowNote}</p>
              </div>
              
              <div className="mt-6 flex items-center gap-3 bg-emerald-500/20 px-6 py-2 brutal-border">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">Verified by AddisVibe</span>
              </div>
            </motion.div>

            {/* Wallet Interface */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted">{t.secureWallet}</h3>
                <div className="flex items-center gap-1.5 text-emerald-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Encrypted</span>
                </div>
              </div>

              {[
                { id: 'telebirr', name: t.telebirr, img: 'https://picsum.photos/seed/telebirr/100/100' },
                { id: 'cbe', name: t.cbe, img: 'https://picsum.photos/seed/cbe/100/100' },
                { id: 'oromia', name: t.oromia, img: 'https://picsum.photos/seed/oromia/100/100' },
                { id: 'awash', name: t.awash, img: 'https://picsum.photos/seed/awash/100/100' },
                { id: 'card', name: t.card, icon: <CreditCard size={28} /> }
              ].map((method) => (
                <motion.button 
                  key={method.id}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    scale: selectedPayment === method.id ? 1.02 : 1,
                  }}
                  onClick={() => setSelectedPayment(method.id as any)}
                  className={`w-full p-6 brutal-border transition-all flex items-center justify-between group ${
                    selectedPayment === method.id 
                    ? 'bg-electric-yellow text-addis-dark shadow-high-contrast -translate-y-1' 
                    : 'bg-addis-surface text-addis-text hover:bg-addis-card'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 brutal-border flex items-center justify-center overflow-hidden ${
                      selectedPayment === method.id ? 'bg-addis-dark/10' : 'bg-addis-surface'
                    }`}>
                      {method.img ? (
                        <img src={method.img} alt={method.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className={selectedPayment === method.id ? 'text-addis-dark' : 'text-addis-muted'}>
                          {method.icon}
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <span className={`text-[10px] uppercase font-black tracking-[0.3em] block mb-1 ${selectedPayment === method.id ? 'text-addis-dark/70' : 'text-addis-muted'}`}>{t.payWith}</span>
                      <span className={`text-2xl font-display tracking-tighter uppercase ${selectedPayment === method.id ? 'text-addis-dark' : 'text-addis-text'}`}>{method.name}</span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 brutal-border flex items-center justify-center ${
                    selectedPayment === method.id ? 'bg-addis-dark border-addis-dark text-electric-yellow' : 'bg-addis-surface'
                  }`}>
                    {selectedPayment === method.id && <Check size={18} strokeWidth={4} />}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Delivery Code Input */}
            <div className="bg-addis-card brutal-border p-8 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={64} className="text-electric-yellow" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Lock size={16} className="text-electric-yellow" />
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-addis-text">{t.deliveryCode}</label>
                </div>
                
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    maxLength={6}
                    value={deliveryCode}
                    onChange={(e) => setDeliveryCode(e.target.value)}
                    className="flex-1 bg-addis-surface brutal-border p-5 text-center text-4xl font-display tracking-[0.5em] text-electric-yellow focus:ring-electric-yellow focus:border-electric-yellow uppercase placeholder:opacity-10"
                    placeholder="000000"
                  />
                </div>
                
                <div className="mt-4 flex items-start gap-3 bg-electric-yellow/5 border border-electric-yellow/10 rounded-xl p-3">
                  <ShieldCheck size={16} className="text-electric-yellow shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-relaxed text-addis-muted font-medium">
                    <span className="text-electric-yellow font-bold uppercase tracking-tighter">Security Note:</span> This code is your proof of delivery. <span className="text-addis-text font-bold underline decoration-electric-yellow/30 underline-offset-2">Only share it with the driver</span> once you have received your items in good condition.
                  </p>
                </div>
              </div>
            </div>

            {/* Driver View Concept: Pending Balance */}
            <div className="bg-addis-surface brutal-border p-6 flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 brutal-border bg-addis-surface flex items-center justify-center text-addis-text">
                  <Wallet size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-addis-muted block mb-1">{t.pendingBalance}</span>
                  <span className="text-addis-text font-display text-2xl tracking-widest">ETB 145.50</span>
                </div>
              </div>
              <div className="bg-emerald-500/20 brutal-border px-4 py-2">
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={14} />
                  Secured
                </span>
              </div>
            </div>

            <button 
              onClick={() => {
                addNotification(t.paymentSuccess, `Payment of ETB 145.50 via ${selectedPayment.toUpperCase()} was successful.`, 'success');
                setView('map');
                setShowDriver(false);
                setIsCalling(false);
              }}
              className="w-full mt-10 py-5 brutal-border bg-addis-text text-addis-dark font-display uppercase tracking-[0.2em] text-xl flex items-center justify-center gap-3 hover:bg-electric-yellow transition-all shadow-high-contrast"
            >
              <span>Complete Payment</span>
              <ArrowRight size={24} />
            </button>
          </motion.div>
        )}

        {view === 'settings' && (
          <motion.div
            key="settings-view"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-[80] bg-addis-dark px-6 pt-10 overflow-y-auto no-scrollbar pb-24"
          >
            <div className="flex items-center gap-4 mb-10">
              <button 
                onClick={() => setView('map')}
                className="w-12 h-12 brutal-border bg-addis-surface flex items-center justify-center text-addis-text hover:bg-electric-yellow hover:text-addis-dark transition-all"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-display tracking-tighter text-addis-text uppercase">{t.settings}</h2>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between px-1 mb-4">
                  <div className="flex items-center gap-2">
                    {theme === 'dark' ? <Moon size={16} className="text-electric-yellow" /> : <Sun size={16} className="text-electric-yellow" />}
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-text opacity-40">{t.theme}</h3>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-electric-yellow">
                    {theme === 'dark' ? t.darkMode : t.lightMode}
                  </span>
                </div>
                
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full bg-addis-surface brutal-border p-2 flex items-center relative h-16"
                >
                  <motion.div
                    animate={{ x: theme === 'dark' ? 'calc(100% - 52px)' : '0%' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-13 h-12 bg-electric-yellow brutal-border flex items-center justify-center text-addis-dark shadow-lg z-10"
                  >
                    {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                  </motion.div>
                  
                  <div className="absolute inset-0 flex items-center justify-around px-4 pointer-events-none">
                    <Sun size={18} className={theme === 'light' ? 'opacity-0' : 'text-addis-muted opacity-20'} />
                    <Moon size={18} className={theme === 'dark' ? 'opacity-0' : 'text-addis-muted opacity-20'} />
                  </div>
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 px-1">
                  <Globe size={16} className="text-electric-yellow" />
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-text opacity-40">{t.language}</h3>
                </div>
                <div className="bg-addis-surface brutal-border p-1 flex items-center relative h-14 overflow-hidden">
                  <motion.div
                    animate={{ 
                      x: language === 'en' ? '0%' : language === 'am' ? '100%' : '200%',
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    className="absolute inset-y-1 left-1 w-[calc(33.33%-2px)] bg-electric-yellow brutal-border z-0 shadow-lg"
                  />
                  {[
                    { id: 'en', label: 'EN' },
                    { id: 'am', label: 'አማ' },
                    { id: 'om', label: 'OM' }
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setLanguage(lang.id as any)}
                      className={`flex-1 h-full relative z-10 font-black text-[12px] uppercase tracking-widest transition-colors duration-300 ${
                        language === lang.id ? 'text-addis-dark' : 'text-addis-muted hover:text-addis-text'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <button 
                onClick={() => {
                  setUserEmail('');
                  setPassword('');
                  setView('login');
                }}
                className="w-full py-4 brutal-border bg-rose-500 text-white font-display text-lg tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-high-contrast"
              >
                <LogOut size={20} />
                <span>Log Out</span>
              </button>

              <div className="flex justify-center">
                <button 
                  onClick={() => setView('map')}
                  className="w-14 h-14 rounded-full brutal-border bg-addis-card text-addis-text flex items-center justify-center hover:bg-addis-surface transition-all shadow-lg"
                  title={t.back}
                >
                  <ArrowRight size={24} className="rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPriceBreakdown && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPriceBreakdown(false)}
              className="absolute inset-0 z-[115] bg-black/60 backdrop-blur-sm"
            />
            <PriceBreakdown />
          </>
        )}
      </AnimatePresence>

      {/* Driver Profile Card (Slide Up) */}
      <AnimatePresence>
        {showDriver && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDriver(false)}
              className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 z-50 bg-addis-card brutal-border border-b-0 p-8 pb-12 shadow-high-contrast"
            >
              <div className="w-16 h-2 bg-addis-surface brutal-border mx-auto mb-8" />
              
              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-6">
                  <div className="relative cursor-pointer group/avatar" onClick={() => setShowDriverProfileModal(true)}>
                    <img 
                      src={MOCK_DRIVER.image} 
                      alt={MOCK_DRIVER.name} 
                      className="w-28 h-28 brutal-border object-cover group-hover/avatar:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-electric-yellow text-addis-dark p-2.5 brutal-border shadow-high-contrast">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div onClick={() => setShowDriverProfileModal(true)}>
                      <h2 className="text-2xl font-display tracking-tighter uppercase mb-2 text-addis-text hover:text-electric-yellow transition-colors">{MOCK_DRIVER.name}</h2>
                    </div>
                    
                    {/* Interactive Star Rating */}
                    <div className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.button
                            key={star}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => {
                              setUserRating(star);
                              addNotification('Rating Submitted', `You rated ${MOCK_DRIVER.name} ${star} stars!`, 'success');
                            }}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="focus:outline-none"
                          >
                            <Star 
                              size={28} 
                              className={`transition-colors ${
                                star <= (hoverRating || userRating) 
                                  ? 'text-electric-yellow fill-electric-yellow' 
                                  : 'text-addis-muted opacity-20'
                              }`}
                            />
                          </motion.button>
                        ))}
                        {userRating > 0 && (
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs font-black text-electric-yellow uppercase tracking-[0.2em] ml-3"
                          >
                            {userRating}/5
                          </motion.span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-electric-yellow/60">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold">{MOCK_DRIVER.rating} Avg</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-addis-muted opacity-20" />
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          trafficLevel === 'Heavy' ? 'bg-rose-500' : 
                          trafficLevel === 'Moderate' ? 'bg-amber-500' : 'bg-emerald-500'
                        }`} />
                        <span className="text-addis-muted text-xs font-medium uppercase tracking-wider">
                          {trafficLevel} Traffic • {currentDistance}km
                        </span>
                      </div>
                    </div>
                    {currentLandmark && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center gap-2"
                      >
                        <div className="px-2 py-0.5 rounded-md bg-electric-yellow/10 border border-electric-yellow/20">
                          <span className="text-[9px] font-black text-electric-yellow uppercase tracking-widest">Near {currentLandmark}</span>
                        </div>
                      </motion.div>
                    )}
                    <button 
                      onClick={() => setShowBikeModal(true)}
                      className="mt-2 flex items-center gap-2 text-addis-muted hover:text-electric-yellow transition-colors group/bike"
                    >
                      <Bike size={14} className="text-electric-yellow/70 group-hover/bike:scale-110 transition-transform" />
                      <span className="text-xs font-medium border-b border-addis-border group-hover/bike:border-electric-yellow/30">{MOCK_DRIVER.bikeType}</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button 
                    onClick={() => setShowDriver(false)}
                    className="w-8 h-8 rounded-full bg-addis-surface flex items-center justify-center text-addis-muted hover:text-addis-text transition-colors"
                  >
                    <X size={16} />
                  </button>
                    <div className="bg-electric-yellow/10 border border-electric-yellow/20 rounded-2xl px-4 py-2 flex flex-col items-center justify-center min-w-[80px] relative overflow-hidden group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={estimatedTime}
                          initial={{ y: estimatedTime > lastEstimatedTime ? 10 : -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="flex flex-col items-center"
                        >
                          <span className={`font-black text-2xl leading-none transition-colors ${
                            estimatedTime > lastEstimatedTime && lastEstimatedTime !== 0 ? 'text-rose-500' : 
                            estimatedTime < lastEstimatedTime ? 'text-emerald-500' : 'text-electric-yellow'
                          }`}>
                            {estimatedTime}
                          </span>
                          <span className="text-electric-yellow/60 text-[8px] font-bold uppercase tracking-widest mt-1">Mins</span>
                        </motion.div>
                      </AnimatePresence>
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-electric-yellow/20 overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-1/2 h-full bg-electric-yellow shadow-[0_0_10px_#f0ff00]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[7px] font-black text-addis-muted uppercase tracking-[0.2em] mt-1">Dynamic ETA</span>
                      <AnimatePresence>
                        {trafficEvent && (
                          <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-[6px] font-black text-rose-500 uppercase tracking-widest mt-0.5"
                          >
                            {trafficEvent}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <div className="flex items-center gap-2 text-addis-muted mb-2">
                    <Bike size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Vehicle</span>
                  </div>
                  <p className="font-bold text-[11px] text-addis-text truncate">{MOCK_DRIVER.bikeType}</p>
                </div>
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <div className="flex items-center gap-2 text-addis-muted mb-2">
                    <Clock size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Deliveries</span>
                  </div>
                  <p className="font-bold text-[11px] text-addis-text">{MOCK_DRIVER.deliveriesThisWeek}</p>
                </div>
                <button 
                  onClick={() => setShowDriverProfileModal(true)}
                  className="bg-electric-yellow/10 rounded-2xl p-4 border border-electric-yellow/20 flex flex-col items-start hover:bg-electric-yellow/20 transition-all group"
                >
                  <div className="flex items-center gap-2 text-electric-yellow mb-2">
                    <ShieldCheck size={14} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Verified</span>
                  </div>
                  <p className="font-bold text-[11px] text-electric-yellow uppercase tracking-tighter">View Profile</p>
                </button>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setView('payment');
                    addNotification(t.newOrder, `Order for ${location} has been confirmed.`, 'info');
                  }}
                  className="flex-1 py-5 brutal-border bg-electric-yellow text-addis-dark font-display text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-all shadow-high-contrast"
                >
                  {t.confirmOrder}
                  <ArrowRight size={24} />
                </button>
                <button className="w-16 h-16 brutal-border bg-addis-surface flex items-center justify-center text-addis-text hover:bg-emerald-500 hover:text-white transition-all">
                  <Phone size={24} />
                </button>
                <button className="w-16 h-16 brutal-border bg-addis-surface flex items-center justify-center text-addis-text hover:bg-blue-500 hover:text-white transition-all">
                  <MessageSquare size={24} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer Navigation (Mobile Style) */}
      <nav className="absolute bottom-0 left-0 right-0 z-30 bg-addis-dark brutal-border border-x-0 border-b-0 h-24 flex items-center justify-around px-8 shadow-high-contrast">
        <button 
          onClick={() => setView('map')}
          className={`pointer-events-auto flex flex-col items-center gap-1 transition-all ${view === 'map' ? 'text-electric-yellow' : 'text-addis-muted opacity-50 hover:opacity-100'}`}
        >
          <Navigation size={28} strokeWidth={view === 'map' ? 3 : 2} />
          <span className="text-[9px] font-black uppercase tracking-widest">Home</span>
        </button>
        <div className="pointer-events-auto flex flex-col items-center gap-1 text-addis-muted opacity-50">
          <Clock size={28} />
          <span className="text-[9px] font-black uppercase tracking-widest">Orders</span>
        </div>
        <button 
          onClick={() => setView('settings')}
          className={`pointer-events-auto flex flex-col items-center gap-1 transition-all ${view === 'settings' ? 'text-electric-yellow' : 'text-addis-muted opacity-50 hover:opacity-100'}`}
        >
          <Settings size={28} strokeWidth={view === 'settings' ? 3 : 2} />
          <span className="text-[9px] font-black uppercase tracking-widest">Settings</span>
        </button>
      </nav>

      {/* Driver Profile Modal */}
      <AnimatePresence>
        {showDriverProfileModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDriverProfileModal(false)}
              className="absolute inset-0 z-[60] bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '-50%', opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[95%] max-w-md bg-addis-card brutal-border p-8 shadow-high-contrast overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 brutal-border bg-electric-yellow/10 flex items-center justify-center text-electric-yellow">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display tracking-widest uppercase text-addis-text">Driver Profile</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-addis-muted">Verified Professional</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDriverProfileModal(false)}
                  className="w-12 h-12 brutal-border bg-addis-surface flex items-center justify-center text-addis-muted hover:text-addis-text transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src={MOCK_DRIVER.image} 
                  alt={MOCK_DRIVER.name} 
                  className="w-28 h-28 brutal-border object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h2 className="text-3xl font-display tracking-widest uppercase text-addis-text mb-1">{MOCK_DRIVER.name}</h2>
                  <div className="flex items-center gap-2 text-electric-yellow mb-2">
                    <Star size={20} fill="currentColor" />
                    <span className="font-black text-lg">4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-addis-muted text-[10px] font-black uppercase tracking-widest">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Background Checked</span>
                  </div>
                </div>
              </div>

              {/* ID Verification Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={16} className="text-electric-yellow" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-addis-text">Identity Verification</h4>
                </div>
                
                <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border-2 border-addis-border group cursor-zoom-in">
                  <img 
                    src={MOCK_DRIVER.idPhoto} 
                    alt="Driver ID" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Verified Seal */}
                  <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/50 p-2 rounded-full shadow-lg">
                    <ShieldCheck size={20} className="text-emerald-500" />
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/70 block mb-1 font-bold">Document Type</span>
                      <span className="text-white font-black text-sm uppercase tracking-tight">{MOCK_DRIVER.idType}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-white/70 block mb-1 font-bold">ID Number</span>
                      <span className="text-white font-black text-sm tracking-tighter">{MOCK_DRIVER.idNumber}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[9px] text-addis-muted uppercase tracking-widest text-center">
                  This document has been verified by AddisVibe Security
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <span className="text-[10px] uppercase tracking-widest text-addis-muted block mb-1">Verification</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-emerald-500 font-bold text-sm uppercase tracking-tighter">{MOCK_DRIVER.verificationStatus}</span>
                  </div>
                </div>
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <span className="text-[10px] uppercase tracking-widest text-addis-muted block mb-1">Vehicle</span>
                  <span className="text-addis-text font-bold text-sm">{MOCK_DRIVER.bikeType}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <span className="text-[10px] uppercase tracking-widest text-addis-muted block mb-1">Deliveries</span>
                  <span className="text-addis-text font-bold text-sm">{MOCK_DRIVER.deliveriesThisWeek} Total</span>
                </div>
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <span className="text-[10px] uppercase tracking-widest text-addis-muted block mb-1">Experience</span>
                  <span className="text-addis-text font-bold text-sm">2+ Years</span>
                </div>
              </div>

              <button 
                onClick={() => setShowDriverProfileModal(false)}
                className="w-full h-14 bg-electric-yellow text-addis-dark font-black rounded-2xl text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
              >
                Close Profile
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bike Detail Modal */}
      <AnimatePresence>
        {showBikeModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBikeModal(false)}
              className="absolute inset-0 z-[60] bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[85%] max-w-sm bg-addis-card border border-addis-border rounded-[32px] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-electric-yellow/10 flex items-center justify-center text-electric-yellow">
                  <Bike size={24} />
                </div>
                <button 
                  onClick={() => setShowBikeModal(false)}
                  className="w-8 h-8 rounded-full bg-addis-surface flex items-center justify-center text-addis-muted"
                >
                  <X size={16} />
                </button>
              </div>
              
              <h3 className="text-xl font-black tracking-tight mb-1 text-addis-text">Vehicle Details</h3>
              <p className="text-addis-muted text-xs uppercase tracking-widest mb-6">Verified Delivery Asset</p>
              
              <div className="space-y-4">
                <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                  <span className="text-[10px] uppercase tracking-wider text-addis-muted opacity-70 block mb-1">Make & Model</span>
                  <span className="text-addis-text font-bold">{MOCK_DRIVER.bikeType}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                    <span className="text-[10px] uppercase tracking-wider text-addis-muted opacity-70 block mb-1">Series</span>
                    <span className="text-addis-text font-bold">{MOCK_DRIVER.bikeModel}</span>
                  </div>
                  <div className="bg-addis-surface rounded-2xl p-4 border border-addis-border">
                    <span className="text-[10px] uppercase tracking-wider text-addis-muted opacity-70 block mb-1">Year</span>
                    <span className="text-addis-text font-bold">{MOCK_DRIVER.bikeYear}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowBikeModal(false)}
                className="w-full mt-8 bg-addis-text text-addis-dark font-black py-4 rounded-2xl text-sm uppercase tracking-widest hover:bg-electric-yellow transition-colors"
              >
                Close Details
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
