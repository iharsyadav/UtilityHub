import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const UtilityCard = ({ utility }) => {
  const Icon = utility.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border border-border
      bg-white/50
      backdrop-blur-xl
      p-6
      shadow-glow
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-primary/20
        to-accent/20
        "
      />

      {/* Icon */}

      <div
        className="
        relative
        flex items-center justify-center
        h-16 w-16
        rounded-2xl
        bg-primary/20
        text-primary
        "
      >
        <Icon size={30} />
      </div>

      {/* Content */}

      <div className="relative mt-6">
        <h3 className="text-2xl font-black">
          {utility.title}
        </h3>

        <p className="mt-3 text-muted leading-relaxed">
          {utility.description}
        </p>
      </div>

      {/* Button */}

      <Link to={utility.path}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="
          relative
          mt-8
          flex items-center gap-2
          rounded-2xl
          bg-primary
          px-5 py-3
          text-white
          font-medium
          shadow-lg
          "
        >
          Open Tool

          <ArrowUpRight size={18} />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default UtilityCard;