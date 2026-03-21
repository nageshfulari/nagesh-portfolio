"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={loading ? "block" : "pointer-events-none"}
      >
        {loading && <Loader />}
      </motion.div>

      {/* Main Content */}
      {!loading && children}
    </>
  );
}