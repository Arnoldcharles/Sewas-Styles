"use client";
import { motion } from "framer-motion";
import TrendingCollections from "@/components/TrendingCollections";
import FeaturedProducts from "@/components/FeaturedProducts";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        {/* Background Accent (subtle gradient for luxury feel) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center max-w-3xl px-6"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold leading-tight"
          >
            Redefining <span className="text-pink-500">Luxury Fashion</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            Step into elegance with Sewas Styles — where timeless design meets
            modern trends.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 flex justify-center space-x-6"
          >
            <a
              href="/collections"
              className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-lg font-medium transition-colors"
            >
              Explore Collections
            </a>
            <a
              href="/about"
              className="px-6 py-3 rounded-full border border-gray-500 hover:border-pink-500 hover:text-pink-500 transition-colors text-lg font-medium"
            >
              About Us
            </a>
          </motion.div>
        </motion.div>
      </section>
      {/* Trending Collections */}
      <TrendingCollections />
      {/* Featured Products */}
      <FeaturedProducts />
      {/* Blog Section */}
      <BlogSection />
      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
