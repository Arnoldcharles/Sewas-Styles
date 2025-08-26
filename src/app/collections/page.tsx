"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Elegant Dress", price: "₦120", category: "Dresses", image: "/fashion1.jpg" },
  { id: 2, name: "Classic Suit", price: "₦250", category: "Suits", image: "/fashion2.jpg" },
  { id: 3, name: "Casual Jacket", price: "₦180", category: "Jackets", image: "/fashion3.jpg" },
  { id: 4, name: "Summer Top", price: "₦75", category: "Tops", image: "/fashion4.jpg" },
];

const categories = ["All", "Dresses", "Suits", "Jackets", "Tops"];

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hello! I would like to order: *${product.name}* priced at ${product.price}.  
Image: ${typeof window !== "undefined" ? window.location.origin + product.image : ""}`;
    const url = `https://wa.me/09023311459?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Collection
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm md:text-base transition 
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-3 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative w-full h-44 sm:h-56 lg:h-64 mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{product.name}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="relative w-full h-60 sm:h-72 lg:h-80 mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4">{selectedProduct.price}</p>

            {/* WhatsApp Order Button */}
            <button
              onClick={() => handleWhatsAppOrder(selectedProduct)}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
