"use client";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Sewas Styles, we believe fashion is an art. Every piece is
            designed to inspire confidence, elegance, and individuality. From
            concept to creation, we craft timeless collections that reflect your
            unique style and personality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Join us on our journey to redefine fashion. Discover curated
            collections that blend contemporary design with classic
            sophistication, tailored for the modern fashion lover.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1520975910683-03fbbf8f0e06?auto=format&fit=crop&w=800&q=80"
            alt="Brand Story"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
