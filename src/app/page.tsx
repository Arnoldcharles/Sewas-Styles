import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Collections />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
