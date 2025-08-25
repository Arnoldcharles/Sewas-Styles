"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500">
        {/* Logo */}
        <div
          className={`font-bold tracking-widest cursor-pointer transition-all duration-500 ${
            scrolled ? "text-xl text-pink-600" : "text-2xl text-pink-600"
          }`}
        >
          Sewas<span className="text-gray-800">Styles</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <a
                href={link.href}
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 
                           hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 
                           transition-all duration-500"
              >
                {link.name}
              </a>
              {/* Optional underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className={`text-3xl cursor-pointer transition-colors ${
                scrolled ? "text-gray-800" : "text-gray-900"
              }`}
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className={`text-3xl cursor-pointer transition-colors ${
                scrolled ? "text-gray-800" : "text-gray-900"
              }`}
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
                           hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
