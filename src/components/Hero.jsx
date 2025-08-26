"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/fashion-bg.jpg')] bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative text-center text-white z-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Sewas Styles</h1>
        <p className="text-lg md:text-2xl mb-6">
          Redefining fashion with elegance and style.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200"
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
}
