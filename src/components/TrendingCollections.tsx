"use client";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Evening Elegance",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Street Luxe",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Modern Classics",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Summer Chic",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TrendingCollections() {
  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
        >
          Trending <span className="text-pink-500">Collections</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={col.img}
                alt={col.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold">
                {col.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
