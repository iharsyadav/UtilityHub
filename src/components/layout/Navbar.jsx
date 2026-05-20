import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header
      className="
      sticky top-0 z-50
      flex items-center justify-between
      border-b border-border
      bg-white/50
      backdrop-blur-xl
      px-6 py-4
      "
    >
      {/* Search */}

      <div
        className="
        flex items-center gap-3
        rounded-2xl
        border border-border
        bg-white/70
        px-4 py-3
        w-full max-w-md
        "
      >
    

        <input
          type="text"
          placeholder="Search utilities..."
          className="
          bg-transparent
          outline-none
          w-full
          text-sm
          "
        />
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4 ml-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="
          relative
          rounded-2xl
          border border-border
          bg-white/70
          p-3
          "
        >
         

          <span
            className="
            absolute top-2 right-2
            h-2 w-2
            rounded-full
            bg-primary
            "
          />
        </motion.button>

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="
          h-12 w-12
          rounded-2xl
          object-cover
          border border-border
          "
        />
      </div>
    </header>
  );
};

export default Navbar;