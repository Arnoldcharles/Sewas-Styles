// components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Turner",
    feedback:
      "Sewa's Styles completely transformed my wardrobe. The designs are modern, elegant, and timeless. I feel more confident than ever!",
  },
  {
    name: "James Walker",
    feedback:
      "The attention to detail is incredible. I love how every piece feels unique and premium. Absolutely worth it!",
  },
  {
    name: "Amara Okafor",
    feedback:
      "Fashion with a soul – that’s what I call Sewa’s Styles. The collections inspire me every season. Love, love, love it!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          What Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-300 italic mb-4">
                “{testimonial.feedback}”
              </p>
              <h4 className="text-lg font-semibold text-white">
                — {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
