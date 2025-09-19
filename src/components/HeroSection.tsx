import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import natureVideo from "@/assets/nature.mp4";
import { useInView } from "@/hooks/useInView";

const HeroSection = () => {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.15, margin: "0px 0px -10% 0px", once: true });

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-visible md:overflow-hidden pt-8 sm:pt-12">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-[100vw] max-w-none h-full object-cover"
        src={natureVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Overlay - lighter near top so navbar glass shows */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/40 via-primary/30 to-accent/40 md:from-primary/55 md:via-primary/45 md:to-accent/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className={`text-3xl sm:text-5xl md:text-7xl leading-snug sm:leading-[1.1] break-words font-bold text-white mb-4 sm:mb-6 mx-auto max-w-[20ch] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '80ms' : undefined }}>
            Calm, Empowering, Holistic Wellness for Real Life.
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '180ms' : undefined }}>
            Helping busy professionals, parents, and teams build sustainable wellness habits
            through yoga, mobility, breathwork, and lifestyle coaching.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '260ms' : undefined }}>
            <Link to="/retreats">
              <Button size="lg" className="btn-hero w-full sm:w-auto text-lg px-8 py-4 group">
                Book a Retreat
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm w-full sm:w-auto text-lg px-8 py-4 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Work with Me
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className={`mt-12 sm:mt-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '340ms' : undefined }}>
            <p className="text-white/60 text-xs sm:text-sm mb-4">Trusted by 500+ clients worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/40">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">10+</div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                <div className="text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm">Retreats Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      
    </section>
  );
};

export default HeroSection;