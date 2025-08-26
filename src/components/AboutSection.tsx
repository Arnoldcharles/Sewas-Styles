// components/AboutSection.tsx
"use client";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/fashion-style.jpg"
            alt="Fashion style"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold">Sewa’s Styles</span>, fashion is
            more than clothing – it’s an identity. Our collections blend
            timeless elegance with modern trends, empowering you to express
            yourself with confidence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Crafted with love and attention to detail, each piece is designed
            for comfort and luxury. From everyday essentials to bold statement
            outfits, we’re redefining fashion for today’s world.
          </p>
          <button className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-800 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
