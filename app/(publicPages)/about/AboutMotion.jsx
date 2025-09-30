"use client";

import { motion } from "framer-motion";
import AboutUs from "@/sections/AboutUs";

export default function AboutMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AboutUs />
    </motion.div>
  );
}
