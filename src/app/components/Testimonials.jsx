"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia L.",
    role: "Fashion Blogger",
    quote: "Sewas Styles consistently delivers exceptional designs that make me feel confident and elegant every day.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James K.",
    role: "Stylist",
    quote: "Their collections are versatile, luxurious, and perfect for both casual and high-fashion looks.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emma R.",
    role: "Designer",
    quote: "The attention to detail in each piece shows a true dedication to premium fashion.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto scrollbar-hide">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full md:w-96 bg-white rounded-2xl p-8 shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{test.name}</h3>
                  <p className="text-gray-500 text-sm">{test.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{test.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
