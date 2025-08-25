"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  // Parallax effect
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 100]); // background moves slower

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: yBackground,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975910683-03fbbf8f0e06?auto=format&fit=crop&w=1600&q=80')",
        }}
        className="absolute inset-0 bg-cover bg-center"
      ></motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
        {/* Animated Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x"
        >
          Sewas Styles
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          Elevate your wardrobe with our exclusive fashion collections. Premium design, unparalleled style.
        </motion.p>

        {/* Buttons */}
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

      {/* Animated Image Slices */}
      <motion.div
        className="absolute inset-0 flex justify-around items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80"
          className="w-36 md:w-48 lg:w-60 rounded-lg shadow-xl"
          initial={{ y: -50, rotate: -5, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          className="w-36 md:w-48 lg:w-60 rounded-lg shadow-xl"
          initial={{ y: 50, rotate: 5, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0,0 C150,50 350,0 500,50 L500,0 L0,0 Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Tailwind CSS gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% }
          50% { background-position: 100% }
          100% { background-position: 0% }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
