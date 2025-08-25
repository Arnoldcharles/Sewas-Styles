import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedCollections />

      {/* Next section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-semibold text-pink-500">Discover Our Full Range</h2>
      </section>
    </main>
  );
}
