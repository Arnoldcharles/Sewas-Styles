import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import TrendingProducts from "./components/TrendingProducts";
import BrandStory from "./components/BrandStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedCollections />
      <TrendingProducts />
      <BrandStory />

      {/* Next section */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">Explore Our Collections</h2>
      </section>
    </main>
  );
}
