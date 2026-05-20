import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { utilities } from "../data/utilities";

import UtilityCard from "../components/cards/UtilityCard";
import SearchBar from "../components/ui/SearchBar";

const Utilities = () => {
  const [search, setSearch] = useState("");

  const filteredUtilities = useMemo(() => {
    return utilities.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <section className="relative overflow-hidden">
      {/* Background Blobs */}

      <div
        className="
        blob blob-primary
        top-0 left-0
        h-72 w-72
        animate-float
        "
      />

      <div
        className="
        blob blob-accent
        bottom-0 right-0
        h-72 w-72
        animate-float
        "
      />

      {/* Main Container */}

      <div className="max-w-[1600px] mx-auto">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
          flex flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-6
          "
        >
          {/* Left */}

          <div>
            <h1
              className="
              text-4xl
              sm:text-5xl
              xl:text-6xl
              font-black
              tracking-tight
              leading-tight
              "
            >
              Utilities
            </h1>

            <p
              className="
              mt-4
              max-w-2xl
              text-muted
              text-base
              leading-relaxed
              "
            >
              Explore beautifully designed utility tools built with React,
              Tailwind CSS, and Framer Motion.
            </p>
          </div>

          {/* Stats Card */}

          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="
            glass-card
            rounded-[32px]
            px-8 py-6
            min-w-[240px]
            shadow-glow
            "
          >
            <h3 className="text-5xl font-black">{filteredUtilities.length}</h3>

            <p className="mt-2 text-muted">Utilities Available</p>
          </motion.div>
        </motion.div>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl"
        >
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        {/* Grid */}

        <AnimatePresence mode="wait">
          {filteredUtilities.length > 0 ? (
            <motion.div
              layout
              className="
              mt-8
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-6
              "
            >
              {filteredUtilities.map((utility) => (
                <UtilityCard key={utility.id} utility={utility} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
              mt-16
              glass-card
              rounded-[32px]
              p-12
              text-center
              "
            >
              {/* Icon */}

              <div
                className="
                mx-auto
                flex items-center justify-center
                h-24 w-24
                rounded-full
                bg-primary/20
                text-4xl
                "
              >
                🔍
              </div>

              {/* Title */}

              <h3
                className="
                mt-6
                text-3xl
                font-black
                "
              >
                No Utilities Found
              </h3>

              {/* Description */}

              <p className="mt-3 text-muted">
                Try searching with another keyword.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Utilities;
