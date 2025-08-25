"use client";
import { useCart } from "../../context/CartContext";

const products = [
  { id: 1, name: "Elegant Gown", price: 120, image: "/images/gown.jpg" },
  { id: 2, name: "Classic Suit", price: 150, image: "/images/suit.jpg" },
  { id: 3, name: "Casual Dress", price: 80, image: "/images/dress.jpg" },
  { id: 4, name: "Leather Jacket", price: 200, image: "/images/jacket.jpg" },
];

export default function CollectionPage() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>

      <div className="mb-6 flex justify-between items-center border-b border-gray-800 pb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <select className="bg-gray-900 border border-gray-700 px-3 py-2 rounded">
          <option>All</option>
          <option>Gowns</option>
          <option>Suits</option>
          <option>Dresses</option>
          <option>Jackets</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-400">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-white transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
