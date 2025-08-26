"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-center px-6 text-white">
      {/* Big 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[8rem] md:text-[12rem] font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-pink-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-400 max-w-lg mb-10"
      >
        The page you’re looking for doesn’t exist or is under construction.
      </motion.p>

      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
      >
        Back to Home
      </Link>
    </main>
  );
}
