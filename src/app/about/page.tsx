"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[url('/about-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          About <span className="text-pink-400">Sewa’s Styles</span>
        </motion.h1>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/fashion-bg.jpg"
          alt="Our Story"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-pink-500">Sewa’s Styles</span>, 
            fashion is more than clothing—it’s an expression of identity. 
            Since our founding, we’ve been committed to delivering premium fashion 
            pieces that combine elegance, creativity, and comfort.
          </p>
          <p className="text-lg leading-relaxed">
            We work with skilled designers and artisans to create collections 
            that empower confidence and timeless beauty.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-pink-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            To inspire confidence and individuality through fashion. 
            Every piece we design tells a story of creativity, elegance, and style.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our Creative Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Sewa Johnson", role: "Founder & Designer", img: "/team1.jpg" },
            { name: "Tola Ade", role: "Creative Director", img: "/team2.jpg" },
            { name: "Maya Smith", role: "Marketing Lead", img: "/team3.jpg" },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
