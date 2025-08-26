"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("❌ Please enter a valid email.");
      return;
    }
    setMessage("✅ Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sewa’s Styles</h2>
          <p className="text-sm leading-relaxed">
            Elevating your wardrobe with timeless fashion. Premium quality,
            modern design, and endless inspiration.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Lookbook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Join Our Style Club
          </h3>
          <p className="text-sm mb-3">
            Be the first to know about new arrivals, exclusive offers, and
            fashion tips.
          </p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-lg text-white font-semibold transition"
            >
              Subscribe
            </button>
          </div>
          {message && (
            <p className="mt-2 text-sm font-medium">
              {message.startsWith("✅") ? (
                <span className="text-green-400">{message}</span>
              ) : (
                <span className="text-red-400">{message}</span>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Sewa’s Styles. All Rights Reserved.
      </div>
    </footer>
  );
}
