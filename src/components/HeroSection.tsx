import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 parallax-layer hero-gradient"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Calm, Empowering,{" "}
            <span className="bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
              Holistic Wellness
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in stagger-1">
            for Real Life
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
            Transform your relationship with wellness through mindful movement, 
            breathwork, and sustainable lifestyle practices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in stagger-3">
            <Link to="/retreats">
              <Button size="lg" className="btn-hero text-lg px-8 py-4 group">
                Book a Retreat
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-4 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Work with Me
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in stagger-4">
            <p className="text-white/60 text-sm mb-4">Trusted by 500+ clients worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-white/40">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Retreats Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;