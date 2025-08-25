"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react"; // Elegant premium icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Cart", href: "/cart" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif font-bold tracking-wide text-gray-900"
        >
          Sewas Styles
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative text-gray-800 hover:text-pink-600 transition-colors after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button with Premium Icon */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 flex flex-col space-y-4 px-6 py-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 text-lg hover:text-pink-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
