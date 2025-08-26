"use client";
import { useState } from "react";
import Popup from "./Popup";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setShowPopup(true);
    setEmail(""); // clear input
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our <span className="text-pink-600">Style Club</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for the latest fashion updates,
          exclusive deals, and more!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:bg-pink-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <Popup
          message="🎉 Subscription successful! Welcome to our Style Club."
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
}
