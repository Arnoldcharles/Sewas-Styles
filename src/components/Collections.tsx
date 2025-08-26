// components/FeaturedCollection.tsx
"use client";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Elegant Dress",
    price: "$120",
    img: "https://source.unsplash.com/400x500/?fashion,dress",
  },
  {
    id: 2,
    name: "Luxury Handbag",
    price: "$250",
    img: "https://source.unsplash.com/400x500/?handbag,fashion",
  },
  {
    id: 3,
    name: "Classic Heels",
    price: "$180",
    img: "https://source.unsplash.com/400x500/?heels,fashion",
  },
  {
    id: 4,
    name: "Designer Jacket",
    price: "$300",
    img: "https://source.unsplash.com/400x500/?jacket,fashion",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Featured Collection
        </h2>

        {/* Grid 2x2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
