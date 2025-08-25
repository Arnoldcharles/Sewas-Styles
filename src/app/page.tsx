import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import TrendingProducts from "./components/TrendingProducts";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedCollections />
      <TrendingProducts />
      <BrandStory />
      <Testimonials />
      <Newsletter />

      {/* Footer placeholder */}
      <section className="h-48 flex items-center justify-center bg-gray-900">
        <h2 className="text-white text-2xl font-semibold">Footer Section</h2>
      </section>
    </main>
  );
}
