import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award } from "lucide-react";
import aaronPortrait from "@/assets/aaron-portrait.jpg";
import { useInView } from "@/hooks/useInView";

const AboutPreview = () => {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, margin: "0px 0px -10% 0px", once: true });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/50 [perspective:1200px] relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className={`relative group transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '120ms' : undefined }}>
            {/* Gradient frame */}
            <div className="p-[1px] rounded-2xl bg-[linear-gradient(120deg,theme(colors.primary/30),transparent,theme(colors.primary/30))]">
              <div className="relative overflow-hidden rounded-[15px] shadow-floating ring-1 ring-white/10 transition-all duration-500 ease-out will-change-transform group-hover:shadow-2xl group-hover:ring-primary/30 [transform-style:preserve-3d] group-hover:-rotate-[1deg]">
              <img
                src={aaronPortrait}
                alt="Aaron S. Murray - Holistic Health Coach"
                className="w-full h-[360px] sm:h-[480px] lg:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:translate-y-[-2px]"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 bg-[radial-gradient(60%_60%_at_50%_10%,theme(colors.primary/40),transparent)]" />
                {/* Subtle top shine */}
                <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/95 backdrop-blur rounded-xl p-3 sm:p-4 shadow-card text-center border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                <Heart className="h-6 w-6 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-xl sm:text-2xl font-bold text-primary tracking-tight">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-white/95 backdrop-blur rounded-xl p-3 sm:p-4 shadow-card text-center border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                <Award className="h-6 w-6 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-xl sm:text-2xl font-bold text-primary tracking-tight">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 dark:bg-black/30 px-3 py-1 text-xs text-muted-foreground transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '40ms' : undefined }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Meet Aaron
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '120ms' : undefined }}>
                With over a decade of
                <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">experience</span>
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '200ms' : undefined }}>
                I help people restore balance in body, mind, and lifestyle. As a coach and
                a dad, I share practical tools for real-life wellness.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} space-y-6`} style={{ transitionDelay: inView ? '260ms' : undefined }}>
              <p className="text-lg leading-relaxed text-foreground">
                As a father, wellness coach, and lifelong learner, I understand the challenges
                of maintaining health and balance in our fast-paced world. My approach isn't
                about perfection—it's about finding sustainable practices that actually work
                for real life.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className={`flex items-start space-x-3 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-3 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '320ms' : undefined }}>
                <div className="p-2 rounded-full bg-primary/10 mt-1 transition-transform duration-300 group-hover:rotate-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 relative inline-block">
                    Real-World Approach
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Practical wellness strategies that fit into busy, modern lifestyles.
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-3 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-3 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '380ms' : undefined }}>
                <div className="p-2 rounded-full bg-primary/10 mt-1 transition-transform duration-300 group-hover:-rotate-3">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 relative inline-block">
                    Holistic Philosophy
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Addressing mind, body, and spirit for complete well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '440ms' : undefined }}>
              <Link to="/about">
                <Button
                  size="lg"
                  className="btn-outline group relative overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  {/* Shine sweep */}
                  <span className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent" />
                  <span className="pointer-events-none absolute -inset-8 -skew-x-12 bg-white/20 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;