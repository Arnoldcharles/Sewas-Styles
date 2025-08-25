"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Stay Updated
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 mb-8"
        >
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion insights.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-pink-500 hover:shadow-xl"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
