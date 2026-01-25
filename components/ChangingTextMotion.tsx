"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["ENGINEER", "DEVELOPER", "STUDENT", "EXPLORER"];

export default function ChangingTextMotion() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-sm font-mono tracking-widest uppercase text-neutral-500"
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
