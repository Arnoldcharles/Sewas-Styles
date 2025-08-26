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
    </main>
  );
}
