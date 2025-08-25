"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-950 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-900 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-400">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
