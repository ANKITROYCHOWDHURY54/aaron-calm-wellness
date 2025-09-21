import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Award, BookOpen, GraduationCap, Target, Zap, Globe, Coffee, Dumbbell, Brain, Leaf } from "lucide-react";
import aaronPortrait from "@/assets/aaron-portrait.jpg";
import ownerImage from "@/assets/Owner.jpeg";
import { useInView } from "@/hooks/useInView";

const AboutPreview = () => {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, margin: "0px 0px -10% 0px", once: true });

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/50 [perspective:1200px] relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute -top-12 sm:-top-24 -left-12 sm:-left-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-primary/20 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-12 sm:-bottom-24 -right-12 sm:-right-24 h-56 sm:h-80 w-56 sm:w-80 rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className={`relative group transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '120ms' : undefined }}>
            {/* Gradient frame */}
            <div className="p-[1px] rounded-2xl bg-[linear-gradient(120deg,theme(colors.primary/30),transparent,theme(colors.primary/30))]">
              <div className="relative overflow-hidden rounded-[15px] shadow-floating ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,0,0,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2">
              <img
                src={ownerImage}
                alt="Aaron S. Murray - Holistic Health Coach"
                className="w-full h-[280px] sm:h-[360px] md:h-[480px] lg:h-[600px] object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-90" />
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              <div className="bg-white/95 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-card text-center border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary mx-auto mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary tracking-tight">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-white/95 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-card text-center border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary mx-auto mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary tracking-tight">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 dark:bg-black/30 px-3 py-1 text-xs text-muted-foreground transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '40ms' : undefined }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Meet Aaron
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight transition-all duration-1000 font-sans ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '120ms' : undefined }}>
                With over a decade of
                <span className="ml-1 sm:ml-2 relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">experience</span>
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse-glow" />
                </span>
              </h2>
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '200ms' : undefined }}>
                I help people restore balance in body, mind, and lifestyle. As a coach and
                a dad, I share practical tools for real-life wellness.
              </p>
            </div>

            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} space-y-4 sm:space-y-6`} style={{ transitionDelay: inView ? '260ms' : undefined }}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                As a father, wellness coach, and lifelong learner, I understand the challenges
                of maintaining health and balance in our fast-paced world. My approach isn't
                about perfection—it's about finding sustainable practices that actually work
                for real life.
              </p>
              
              {/* Journey Timeline */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">My Wellness Journey</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 flex-shrink-0">
                      <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-xs sm:text-sm">Certified Health Coach</h4>
                      <p className="text-xs text-muted-foreground">Institute for Integrative Nutrition</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 flex-shrink-0">
                      <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-xs sm:text-sm">Yoga & Breathwork Specialist</h4>
                      <p className="text-xs text-muted-foreground">200+ hours of training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 flex-shrink-0">
                      <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-xs sm:text-sm">Corporate Wellness Expert</h4>
                      <p className="text-xs text-muted-foreground">Helping teams thrive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className={`flex items-start space-x-2 sm:space-x-3 rounded-lg sm:rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-2 sm:p-3 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '320ms' : undefined }}>
                <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 mt-1 transition-transform duration-300 group-hover:rotate-3 flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold mb-1 relative inline-block text-sm sm:text-base">
                    Real-World Approach
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Practical wellness strategies that fit into busy, modern lifestyles.
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-2 sm:space-x-3 rounded-lg sm:rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-2 sm:p-3 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '380ms' : undefined }}>
                <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 mt-1 transition-transform duration-300 group-hover:-rotate-3 flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold mb-1 relative inline-block text-sm sm:text-base">
                    Holistic Philosophy
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
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

        {/* Wellness Philosophy Section */}
        <div className={`mt-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '500ms' : undefined }}>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Leaf className="h-3 w-3 mr-1" />
              My Philosophy
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Holistic Wellness for Real Life
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              True wellness isn't about perfect diets or extreme routines—it's about creating sustainable habits that enhance your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Mindful Living</h4>
                <p className="text-sm text-muted-foreground">
                  Cultivating awareness and presence in everyday moments
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Movement Medicine</h4>
                <p className="text-sm text-muted-foreground">
                  Finding joy in movement that nourishes your body
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Nourishing Foods</h4>
                <p className="text-sm text-muted-foreground">
                  Eating with intention and pleasure, not restriction
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Community Connection</h4>
                <p className="text-sm text-muted-foreground">
                  Building meaningful relationships and support systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;