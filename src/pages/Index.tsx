import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import RetreatHighlight from "@/components/RetreatHighlight";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <RetreatHighlight />
        <TestimonialsCarousel />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
