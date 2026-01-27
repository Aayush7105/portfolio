"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="contents"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants} className="">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Container;
