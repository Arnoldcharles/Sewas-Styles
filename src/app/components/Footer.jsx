"use client";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Sewas Styles</h3>
          <p className="text-gray-400 mb-4">
            Elevating fashion to a premium experience. Discover exclusive
            collections curated for style and sophistication.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/shop"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/faq"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/shipping"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="/returns"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-400 mb-4">
            Subscribe for the latest trends and exclusive offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-800 text-gray-200 placeholder-gray-400"
            />
            <button className="px-6 py-2 rounded-r-full bg-pink-600 text-white font-semibold hover:bg-pink-500 transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sewas Styles. All rights reserved.
      </div>
    </footer>
  );
}
