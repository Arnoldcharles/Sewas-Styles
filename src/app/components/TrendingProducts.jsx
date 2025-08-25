"use client";
import { motion } from "framer-motion";

// Example products
const products = [
  {
    name: "Elegant Dress",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b4?auto=format&fit=crop&w=400&q=80",
    price: "$250",
    link: "/shop/elegant-dress",
  },
  {
    name: "Luxury Handbag",
    image:
      "https://images.unsplash.com/photo-1593032457869-b4c0f930fdc8?auto=format&fit=crop&w=400&q=80",
    price: "$450",
    link: "/shop/luxury-handbag",
  },
  {
    name: "Classic Coat",
    image:
      "https://images.unsplash.com/photo-1602810319986-7c8fca11d03e?auto=format&fit=crop&w=400&q=80",
    price: "$320",
    link: "/shop/classic-coat",
  },
  {
    name: "Stylish Sneakers",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b4?auto=format&fit=crop&w=400&q=80",
    price: "$180",
    link: "/shop/stylish-sneakers",
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.link}
              className="relative block bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay with price */}
              <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {product.price}
              </div>

              {/* Product info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
              </div>

              {/* Decorative corner for premium look */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-100 rounded-full opacity-20"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
