import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, ArrowRight, Mountain, Waves, TreePine } from "lucide-react";
import retreatBg from "@/assets/retreat-bg.jpg";

const RetreatHighlight = () => {
  const featuredRetreat = {
    title: "Pathfinder Wellness Retreats",
    subtitle: "Immersive 3–5 day experiences",
    location: "Nature-forward venues",
    date: "Multiple 2025 dates",
    spots: "Limited availability",
    price: "$1,200+",
    description: "Immersive 3–5 day experiences designed for individuals and teams to recharge, reconnect, and reset in nature.",
    highlights: [
      "Daily yoga, breathwork, and meditation",
      "Guided hikes and time in nature",
      "Mindfulness and resilience workshops",
      "Healthy, locally-sourced meals",
      "Digital-light environment",
      "Small group setting"
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Featured Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Immersive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wellness Retreats
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            Step away from the noise and immerse yourself in nature. Our 3–5 day retreats are designed to restore balance, deepen connection, and create lasting change.
          </p>
        </div>

        {/* Featured Retreat */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-floating border-0 bg-gradient-to-br from-white to-muted/20 animate-fade-in stagger-2 ring-1 ring-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <img
                  src={retreatBg}
                  alt="Pathfinder Wellness Retreat"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
                
                {/* Floating Icons */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  <div className="p-3 rounded-full glass text-white">
                    <Mountain className="h-5 w-5" />
                  </div>
                  <div className="p-3 rounded-full glass text-white">
                    <TreePine className="h-5 w-5" />
                  </div>
                  <div className="p-3 rounded-full glass text-white">
                    <Waves className="h-5 w-5" />
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="px-4 py-2 rounded-full glass text-white font-semibold text-lg shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                    From {featuredRetreat.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {featuredRetreat.title}
                    </h3>
                    <p className="text-xl text-primary font-medium mb-4">
                      {featuredRetreat.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredRetreat.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{featuredRetreat.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{featuredRetreat.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{featuredRetreat.spots}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featuredRetreat.highlights.map((highlight, index) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/retreats" className="flex-1">
                      <Button size="lg" className="btn-hero w-full group shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                        Explore Retreats
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/retreats">
                      <Button size="lg" variant="outline" className="btn-outline">
                        View All Retreats
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Supporting Text */}
        <div className="text-center mt-12 animate-fade-in stagger-3">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each retreat is carefully crafted to provide a perfect balance of structure and 
            freedom, allowing you to dive deep into practices that serve your highest good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RetreatHighlight;