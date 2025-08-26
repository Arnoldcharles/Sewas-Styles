"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Elegant Dress", price: 120, image: "/dress1.jpg", category: "Dresses" },
  { id: 2, name: "Casual Shirt", price: 80, image: "/shirt1.jpg", category: "Shirts" },
  { id: 3, name: "Classic Suit", price: 250, image: "/suit1.jpg", category: "Suits" },
  { id: 4, name: "Summer Skirt", price: 90, image: "/skirt1.jpg", category: "Skirts" },
];

const categories = ["All", "Dresses", "Shirts", "Suits", "Skirts"];

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hello, I would like to order: *${product.name}* priced at $${product.price}.`;
    const url = `https://wa.me/09023311459?text=${encodeURIComponent(message)}%0A${encodeURIComponent(
      window.location.origin + product.image
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-17">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-black hover:text-white"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-4">${selectedProduct.price}</p>
            <button
              onClick={() => handleWhatsAppOrder(selectedProduct)}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
