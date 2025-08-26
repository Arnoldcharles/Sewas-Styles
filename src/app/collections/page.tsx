"use client";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Elegant Dress",
    category: "Dresses",
    price: 120,
    image: "/fashion/dress1.jpg",
  },
  {
    id: 2,
    name: "Classic Suit",
    category: "Suits",
    price: 250,
    image: "/fashion/suit1.jpg",
  },
  {
    id: 3,
    name: "Stylish Handbag",
    category: "Accessories",
    price: 80,
    image: "/fashion/bag1.jpg",
  },
  {
    id: 4,
    name: "Trendy Shoes",
    category: "Shoes",
    price: 100,
    image: "/fashion/shoes1.jpg",
  },
];

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchPrice = !priceFilter || p.price <= priceFilter;
    return matchCategory && matchPrice;
  });

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hello, I want to order this product:%0A🛍 *${product.name}*%0A💲 Price: $${product.price}%0A📷 Product Image: ${window.location.origin}${product.image}`;
    const whatsappUrl = `https://wa.me/09023311459?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
        Explore Our Collection
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          className="px-4 py-2 border rounded-lg shadow-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All</option>
          <option>Dresses</option>
          <option>Suits</option>
          <option>Accessories</option>
          <option>Shoes</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg shadow-sm"
          value={priceFilter || ""}
          onChange={(e) =>
            setPriceFilter(e.target.value ? Number(e.target.value) : null)
          }
        >
          <option value="">All Prices</option>
          <option value="100">Under ₦100</option>
          <option value="200">Under ₦200</option>
          <option value="300">Under ₦300</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 transform transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:opacity-90 transition"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-pink-600 font-semibold">₦{product.price}</p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={400}
              height={400}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-2">{selectedProduct.category}</p>
            <p className="text-pink-600 font-semibold mb-4">
              ₦{selectedProduct.price}
            </p>
            <button
              onClick={() => handleWhatsAppOrder(selectedProduct)}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
