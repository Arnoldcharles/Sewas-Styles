"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Classic Summer Dress",
    price: "₦85",
    image: "/images/dress1.jpg",
  },
  {
    id: 2,
    name: "Elegant Handbag",
    price: "₦120",
    image: "/images/bag1.jpg",
  },
  {
    id: 3,
    name: "Luxury Heels",
    price: "₦150",
    image: "/images/shoes1.jpg",
  },
  {
    id: 4,
    name: "Men’s Jacket",
    price: "₦200",
    image: "/images/jacket1.jpg",
  },
];

export default function ShopPage() {
  const handleOrder = (product: { name: string; price: string; image: string }) => {
    const message = `Hello, I would like to order:\n\n*${product.name}*\nPrice: ${product.price}\n\nImage: ${window.location.origin}${product.image}`;
    const phoneNumber = "09023311459";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
        Shop Our Collection
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-56 md:h-64 lg:h-72">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center flex-grow">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleOrder(product)}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-900 transition-all duration-300"
              >
                Order with WhatsApp
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
