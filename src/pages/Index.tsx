import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CategoryGrid />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
