import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      {/* Next sections */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">Shop the Latest Trends</h2>
      </section>
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-semibold text-pink-500">Discover Our Collections</h2>
      </section>
    </main>
  );
}
