"use client";
import { motion } from "framer-motion";

const products = [
  {
    name: "Velvet Gown",
    price: "$320",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Silk Blazer",
    price: "$280",
    img: "https://images.unsplash.com/photo-1520975698519-59c01b1e2d3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Classic Heels",
    price: "$150",
    img: "https://images.unsplash.com/photo-1600181955680-75b47bdf5e16?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Designer Handbag",
    price: "$450",
    img: "https://images.unsplash.com/photo-1612832021131-6e8131a962b2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
        >
          Featured <span className="text-pink-500">Products</span>
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-pink-500 font-medium mt-1">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
