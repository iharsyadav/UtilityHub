import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center py-10">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="
          w-14
          h-14
          border-4
          border-cyan-400
          border-t-transparent
          rounded-full
        "
      />
    </div>
  );
};

export default Loader;