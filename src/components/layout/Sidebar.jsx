
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Wrench,
  Heart,
  Settings,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Utilities",
    path: "/utilities",
    icon: Wrench,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
      hidden md:flex
      flex-col
      w-[280px]
      min-h-screen
      sticky top-0
      border-r border-border
      bg-surface-light
      backdrop-blur-xl
      p-6
      "
    >
      {/* Logo */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-black text-text">
          Utility<span className="text-primary">Hub</span>
        </h1>

        <p className="text-muted mt-2 text-sm">
          Modern Utility Dashboard
        </p>
      </motion.div>

      {/* Nav Links */}

      <nav className="flex flex-col gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-4
                    rounded-2xl
                    px-4 py-3
                    transition-all duration-300
                    border

                    ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-glow"
                        : "bg-white/40 text-text border-transparent hover:bg-white/70"
                    }
                  `}
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Glow */}

      <div className="mt-auto">
        <div
          className="
          h-40 rounded-3xl
          bg-gradient-to-br
          from-primary/50
          to-accent/40
          blur-2xl
          opacity-60
          "
        />
      </div>
    </aside>
  );
};

export default Sidebar;