import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Collections />
      <AboutSection />
    </main>
  );
}
