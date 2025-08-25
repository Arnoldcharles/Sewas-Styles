"use client";
import { motion } from "framer-motion";

// Example product data
const collections = [
  {
    name: "Spring Collection",
    image:
      "https://images.unsplash.com/photo-1520975910683-03fbbf8f0e06?auto=format&fit=crop&w=400&q=80",
    link: "/collections/spring",
  },
  {
    name: "Summer Vibes",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    link: "/collections/summer",
  },
  {
    name: "Autumn Elegance",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    link: "/collections/autumn",
  },
  {
    name: "Winter Luxe",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
    link: "/collections/winter",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Featured Collections
        </h2>

        {/* Scrollable collections */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {collections.map((col, index) => (
            <motion.a
              key={index}
              href={col.link}
              className="relative flex-shrink-0 w-64 md:w-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                <h3 className="text-white text-xl font-semibold">{col.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
