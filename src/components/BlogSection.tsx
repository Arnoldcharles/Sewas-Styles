// components/BlogSection.tsx
"use client";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "10 Timeless Fashion Tips",
    desc: "Discover the secrets of effortless style that never go out of trend.",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Streetwear Inspirations",
    desc: "Explore modern streetwear looks redefining urban fashion.",
    img: "https://images.unsplash.com/photo-1520975922094-5fdb65c7ae1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Minimalist Wardrobe Guide",
    desc: "Learn how to build a versatile wardrobe with just essentials.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Fashion Inspiration</h2>
        <p className="text-gray-400 text-lg">
          Stay updated with the latest trends, tips, and style guides.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
