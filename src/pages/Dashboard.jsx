import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="relative">
      {/* Blobs */}

      <div className="blob blob-primary w-72 h-72 top-0 left-0" />

      <div className="blob blob-accent w-72 h-72 top-40 right-10" />

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        rounded-[32px]
        border border-border
        bg-white/50
        backdrop-blur-xl
        p-10
        overflow-hidden
        relative
        "
      >
        <h1 className="text-5xl font-black leading-tight">
          Modern Utility
          <br />
          Dashboard
        </h1>

        <p className="mt-4 text-muted max-w-xl">
          Beautiful collection of modern utility tools
          built with React, Tailwind CSS, and Framer Motion.
        </p>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-3xl font-black">8+</h3>

            <p className="text-muted mt-2">
              Utilities
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-3xl font-black">99%</h3>

            <p className="text-muted mt-2">
              Responsive
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-3xl font-black">
              Framer
            </h3>

            <p className="text-muted mt-2">
              Motion Powered
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;