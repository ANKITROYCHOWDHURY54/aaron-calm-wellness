import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award } from "lucide-react";
import aaronPortrait from "@/assets/aaron-portrait.jpg";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-floating group ring-1 ring-white/10">
              <img
                src={aaronPortrait}
                alt="Aaron S. Murray - Holistic Health Coach"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-card text-center border border-border">
                <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-card text-center border border-border">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                With over a decade of experience
              </h2>
              <p className="text-xl text-muted-foreground mb-6 animate-fade-in stagger-1">
                I help people restore balance in body, mind, and lifestyle. As a coach and
                a dad, I share practical tools for real-life wellness.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in stagger-2">
              <p className="text-lg leading-relaxed text-foreground">
                As a father, wellness coach, and lifelong learner, I understand the challenges
                of maintaining health and balance in our fast-paced world. My approach isn't
                about perfection—it's about finding sustainable practices that actually work
                for real life.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in stagger-3">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-World Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    Practical wellness strategies that fit into busy, modern lifestyles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-primary/10 mt-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Holistic Philosophy</h4>
                  <p className="text-sm text-muted-foreground">
                    Addressing mind, body, and spirit for complete well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in stagger-4">
              <Link to="/about">
                <Button size="lg" className="btn-outline group shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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