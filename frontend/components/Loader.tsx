"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <div className="flex flex-col items-center gap-6">

        {/* Circle Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 h-20 rounded-full border-2 border-indigo-500 border-t-transparent flex items-center justify-center"
        >
          <span className="text-xl font-bold text-indigo-400">
            NF
          </span>
        </motion.div>

        {/* Loading text */}
        <p className="text-gray-400 text-sm tracking-wide">
          Loading...
        </p>

      </div>

    </div>
  );
}