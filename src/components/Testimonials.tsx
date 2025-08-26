"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Fashion Blogger",
    text: "Sewas Styles transformed my wardrobe! Every piece feels tailor-made and luxurious.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Daniel Smith",
    role: "Model",
    text: "The outfits are premium quality and timeless. I always get compliments wearing them.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Isabella Johnson",
    role: "Designer",
    text: "Their collection is breathtaking! The craftsmanship is unmatched in the fashion industry.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ethan Brown",
    role: "Photographer",
    text: "Every shoot with Sewas Styles feels high-end. The clothes tell their own story.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Client Love ❤️
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Hear from our cherished clients who experience true elegance with Sewas
          Styles.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
