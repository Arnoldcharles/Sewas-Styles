// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Sewa’s Styles</h2>
          <p className="text-gray-400 leading-relaxed">
            Bringing timeless fashion to modern elegance.  
            Crafted with passion and designed for bold statements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-4">Subscribe for the latest trends and exclusive offers.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FaPinterestP className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sewa’s Styles. All rights reserved.
      </div>
    </footer>
  );
}
