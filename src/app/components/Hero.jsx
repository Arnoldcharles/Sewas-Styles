"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975910683-03fbbf8f0e06?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide mb-6"
        >
          Sewas Styles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          Elevate your wardrobe with our exclusive fashion collections. Premium design, unparalleled style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <a
            href="/shop"
            className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Now
          </a>
          <a
            href="/collections"
            className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>

      {/* Decorative bottom curve (optional premium touch) */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0,0 C150,50 350,0 500,50 L500,0 L0,0 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
