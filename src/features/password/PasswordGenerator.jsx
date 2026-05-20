import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Copy, Check } from "lucide-react";

const PasswordGenerator = () => {
  /* ========================================
      STATES
  ======================================== */
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Handlers for tracking refresh clicks and animations
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  /* ========================================
      GENERATE PASSWORD (Unified Logic)
  ======================================== */
  const generatePassword = useCallback(() => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}";

    if (!chars) {
      setPassword("Select at least one option");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(generated);
  }, [length, uppercase, lowercase, numbers, symbols]);

  /* ========================================
      AUTOMATICATED UPDATES
  ======================================== */
  // Generates a new password whenever ANY option changes OR refresh is clicked
  useEffect(() => {
    generatePassword();
  }, [generatePassword, refreshTrigger]);

  /* ========================================
      HANDLERS
  ======================================== */
  const handleRefreshClick = () => {
    setRefreshTrigger((prev) => prev + 1); // Triggers the useEffect to make a fresh password
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 400); // Resets spin animation tracking
  };

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const getStrength = () => {
    if (length < 8) return "Weak";
    if (length < 14) return "Medium";
    return "Strong";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      relative
      overflow-hidden
      rounded-[32px]
      border border-border
      bg-white/60
      backdrop-blur-xl
      p-8
      shadow-glow
      max-w-xl
      mx-auto
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 relative z-10">
        <div>
          <h1 className="text-4xl font-black">Password Generator</h1>
          <p className="mt-2 text-muted">Generate secure random passwords instantly.</p>
        </div>

        {/* Refresh Button - Fixed Rotation & Execution */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isRotating ? 360 : 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
          onClick={handleRefreshClick}
          className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary text-white shadow-lg cursor-pointer"
        >
          <RefreshCw size={22} />
        </motion.button>
      </div>

      {/* Password Display Box */}
      <div className="mt-8 flex items-center justify-between gap-4 rounded-3xl border border-border bg-white/80 p-5 relative z-10">
        <p className="flex-1 truncate text-lg font-semibold select-all">{password}</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={copyPassword}
          className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary text-white cursor-pointer"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </motion.button>
      </div>

      {/* Length Slider */}
      <div className="mt-8 relative z-10">
        <div className="flex items-center justify-between">
          <p className="font-medium">Password Length</p>
          <span className="text-2xl font-black">{length}</span>
        </div>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="mt-4 w-full accent-primary cursor-pointer"
        />
      </div>

      {/* Option Grid */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4 relative z-10">
        <OptionCard label="Uppercase" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        <OptionCard label="Lowercase" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        <OptionCard label="Numbers" checked={numbers} onChange={() => setNumbers(!numbers)} />
        <OptionCard label="Symbols" checked={symbols} onChange={() => setSymbols(!symbols)} />
      </div>

      {/* Strength Indicator */}
      <div className="mt-10 relative z-10">
        <div className="flex items-center justify-between">
          <p className="font-medium">Password Strength</p>
          <p className="font-black">{getStrength()}</p>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-200">
          <motion.div
            animate={{
              width: getStrength() === "Weak" ? "33%" : getStrength() === "Medium" ? "66%" : "100%",
            }}
            className="h-full rounded-full bg-primary"
          />
        </div>
      </div>
    </motion.section>
  );
};

/* ========================================
   OPTION CARD COMPONENT
======================================== */
const OptionCard = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between rounded-2xl border border-border bg-white/70 px-5 py-4 cursor-pointer select-none">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} className="h-5 w-5 accent-primary cursor-pointer" />
    </label>
  );
};

export default PasswordGenerator;