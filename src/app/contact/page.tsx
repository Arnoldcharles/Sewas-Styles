"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">We’d love to hear from you. Let’s talk fashion ✨</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black resize-none"
                rows={4}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-black text-white font-medium py-3 rounded-xl shadow-lg"
            >
              Send Message
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">⚠️ Please fill out all fields correctly.</p>
            )}
          </form>
        </motion.div>

        {/* Map & Info */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            className="w-full h-full min-h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.500246076685!2d3.3665785862252124!3d6.553198382543132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d08f1122929%3A0x39c1552ca0be8856!2sObanikoro%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756184216906!5m2!1sen!2sng"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
