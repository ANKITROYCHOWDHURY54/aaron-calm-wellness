import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Activity, Brain, Building } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Yoga & Breathwork",
      description: "Mindful movement and breathing practices to center your body and calm your mind.",
      features: ["Vinyasa Flow", "Restorative Yoga", "Pranayama Techniques", "Meditation"],
      color: "from-primary to-primary-light"
    },
    {
      icon: Activity,
      title: "Mobility & Movement",
      description: "Functional movement training to prevent injury and improve daily life performance.",
      features: ["Injury Prevention", "Flexibility Training", "Functional Movement", "Pain Relief"],
      color: "from-secondary to-secondary-light"
    },
    {
      icon: Brain,
      title: "Lifestyle Coaching",
      description: "Holistic guidance for sustainable health habits that fit your unique lifestyle.",
      features: ["Nutrition Guidance", "Sleep Optimization", "Stress Management", "Habit Formation"],
      color: "from-accent to-accent-light"
    },
    {
      icon: Building,
      title: "Corporate Wellness",
      description: "Bring wellness to your workplace with customized programs for teams.",
      features: ["Team Workshops", "Stress Reduction", "Productivity Boost", "Employee Wellbeing"],
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            Discover personalized approaches to health and wellness that work for your lifestyle, 
            goals, and unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group hover-lift cursor-pointer animate-fade-in stagger-${index + 1} h-full`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in stagger-4">
          <Link to="/services">
            <Button size="lg" className="btn-hero group">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;