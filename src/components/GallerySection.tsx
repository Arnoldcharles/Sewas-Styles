// components/GallerySection.tsx
"use client";

export default function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1520975922058-6c57e22ae616?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520974735194-33dbd9d9c5fc?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The Lookbook
        </h2>
        <p className="text-gray-600 mt-3">
          Explore our curated collection of styles, captured in moments of true elegance.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-60 md:h-80 overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-white font-semibold">View Style</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
