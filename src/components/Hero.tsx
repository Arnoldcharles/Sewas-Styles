"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-pink-900 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-700/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-wider uppercase"
        >
          Sewas Styles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed"
        >
          Where elegance meets creativity. Discover the artistry of timeless
          fashion tailored for your unique style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Book a Fitting
          </button>
        </motion.div>
      </div>
    </section>
  );
}
