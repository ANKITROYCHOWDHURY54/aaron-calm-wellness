import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Activity, Brain, Building, Star, Users, Clock, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Simulate loading completion
          setTimeout(() => setIsLoading(false), 800);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: "Yoga & Breathwork",
      description: "Daily practices to unlock energy and calm.",
      features: ["Vinyasa Flow", "Restorative Yoga", "Pranayama Techniques", "Meditation"],
      color: "from-primary to-primary-light",
      stats: { rating: 4.9, students: 1200, duration: "45 min" },
      badge: "Most Popular",
      badgeColor: "bg-primary/10 text-primary"
    },
    {
      icon: Activity,
      title: "Mobility & Injury Prevention",
      description: "Restore movement and reduce pain.",
      features: ["Injury Prevention", "Flexibility Training", "Functional Movement", "Pain Relief"],
      color: "from-secondary to-secondary-light",
      stats: { rating: 4.8, students: 890, duration: "30 min" },
      badge: "New",
      badgeColor: "bg-secondary/10 text-secondary"
    },
    {
      icon: Brain,
      title: "Lifestyle Coaching",
      description: "Sustainable habits for a balanced life.",
      features: ["Nutrition Guidance", "Sleep Optimization", "Stress Management", "Habit Formation"],
      color: "from-accent to-accent-light",
      stats: { rating: 4.9, students: 650, duration: "60 min" },
      badge: "1-on-1",
      badgeColor: "bg-accent/10 text-accent"
    },
    {
      icon: Building,
      title: "Corporate Wellness",
      description: "Team-focused retreats and workshops.",
      features: ["Team Workshops", "Stress Reduction", "Productivity Boost", "Employee Wellbeing"],
      color: "from-primary to-accent",
      stats: { rating: 4.7, students: 2400, duration: "2 hours" },
      badge: "Teams",
      badgeColor: "bg-gradient-to-r from-primary to-accent text-white"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
          </div>
          
          <Badge 
            variant="secondary" 
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Holistic Wellness Services
          </Badge>
          
          <h2 className={`text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-6 mx-auto max-w-[22ch] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transform Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient relative">
              Wellness Journey
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full" />
            </span>
          </h2>
          
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover personalized approaches to health and wellness that work for your lifestyle, 
            goals, and unique needs. Join thousands who have transformed their lives.
          </p>
          
          {/* Stats */}
          <div className={`flex justify-center items-center space-x-8 mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            const delay = index * 150;
            
            return (
              <Card 
                key={service.title}
                className={`group cursor-pointer h-full border border-white/10 transition-all duration-700 ease-out will-change-transform relative ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Loading Skeleton */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-pulse rounded-lg" />
                )}
                
                <CardContent className="p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className={`${service.badgeColor} text-xs font-medium`}>
                      {service.badge}
                    </Badge>
                  </div>
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Magnetic Effect */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-transform duration-300"
                    style={{
                      transform: isHovered 
                        ? `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
                        : 'translate(0, 0)'
                    }}
                  />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 ${
                          isHovered ? 'animate-float' : ''
                        }`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: `${2000 + i * 200}ms`
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ring-1 ring-white/20 relative z-10 group-hover:shadow-lg`}>
                    <Icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-semibold mb-3 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed transition-all duration-300 group-hover:translate-x-1">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 mb-6 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{service.stats.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{service.stats.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{service.stats.duration}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={feature} 
                          className="flex items-center text-sm transition-all duration-300 group-hover:translate-x-1"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mr-3 transition-all duration-300 group-hover:scale-125" />
                          <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 mb-4 relative z-10">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Popularity</span>
                      <span>{Math.round((service.stats.students / 2500) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${service.color} transition-all duration-1000 ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${(service.stats.students / 2500) * 100}%` : '0%',
                          transitionDelay: `${delay + 500}ms`
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 relative z-10">
                    <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Wellness Journey?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of people who have transformed their lives through our holistic approach to wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="btn-hero group shadow-[0_8px_24px_rgba(0,0,0,0.2)] relative overflow-hidden px-8"
                >
                  <span className="relative z-10">Explore All Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  
                  {/* Button Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full" />
                  </div>
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline group px-8"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Certified Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;