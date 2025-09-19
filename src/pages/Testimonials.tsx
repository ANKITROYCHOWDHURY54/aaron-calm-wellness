import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Heart, Users, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Testimonials = () => {
  const allTestimonials = [
    { name: "Sarah L.", role: "", location: "", image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face", rating: 5, service: "", text: "Aaron’s coaching helped me recover from chronic back pain and finally feel at ease in my body again.", highlight: "", date: "" },
    { name: "James K.", role: "", location: "", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", rating: 5, service: "", text: "The retreat was life-changing — I left feeling recharged and clear about my priorities.", highlight: "", date: "" },
    { name: "Priya M.", role: "", location: "", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", rating: 5, service: "", text: "As a busy parent, Aaron’s practical approach to wellness made it possible for me to actually stick to a routine.", highlight: "", date: "" },
    { name: "David R.", role: "", location: "", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", rating: 5, service: "", text: "Our corporate retreat with Aaron transformed the way our team collaborates and communicates.", highlight: "", date: "" },
    { name: "Emily T.", role: "", location: "", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", rating: 5, service: "", text: "I’ve never felt so supported in my health journey. Aaron is the real deal.", highlight: "", date: "" }
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Transformed lives through holistic wellness"
    },
    {
      number: "4.9",
      label: "Average Rating",
      description: "Based on 200+ verified reviews"
    },
    {
      number: "95%",
      label: "Would Recommend",
      description: "Clients who refer friends and family"
    },
    {
      number: "50+",
      label: "Retreats Led",
      description: "Life-changing experiences in nature"
    }
  ];

  const serviceTestimonials = {
    "Lifestyle Coaching": allTestimonials.filter(t => t.service === "Lifestyle Coaching"),
    "Retreats": allTestimonials.filter(t => t.service.includes("Retreat")),
    "Yoga & Breathwork": allTestimonials.filter(t => t.service === "Yoga & Breathwork"),
    "Corporate Wellness": allTestimonials.filter(t => t.service === "Corporate Wellness")
  };

  const { ref: pageRef, inView } = useInView<HTMLDivElement>({ threshold: 0.15, margin: "0px 0px -10% 0px", once: false });

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl opacity-60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className={`mb-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Client Stories</Badge>
            <h1 className={`text-5xl md:text-6xl font-bold mb-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Real Stories, Real{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transformations
              </span>
            </h1>
            <div className={`mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mt-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Discover how people from all walks of life have transformed their health, 
              reduced stress, and found sustainable wellness practices that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? `${100 + index * 100}ms` : undefined }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Detailed Testimonials by Service */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Stories by Service</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how each service has helped clients achieve their specific wellness goals.
            </p>
          </div>

          <div className="space-y-20">
            {Object.entries(serviceTestimonials).map(([service, testimonials]) => (
              <div key={service}>
                <h3 className="text-3xl font-bold text-center mb-12">{service}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card key={`${service}-${testimonial.name}`} className={`shadow-card transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`} style={{ transitionDelay: inView ? `${80 + index * 80}ms` : undefined }}>
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-white/60"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current drop-shadow" />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
                        </div>

                        {/* Highlight */}
                        <div className="mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs ring-1 ring-primary/20">
                            {testimonial.highlight}
                          </Badge>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-muted-foreground italic">
                          "{testimonial.text}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Video Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from clients about their wellness journeys and transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah's Transformation",
                thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=300&fit=crop&crop=face",
                duration: "3:24"
              },
              {
                name: "Michael's Retreat Experience", 
                thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
                duration: "4:12"
              },
              {
                name: "Corporate Team Success",
                thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
                duration: "2:45"
              }
            ].map((video, index) => (
              <Card key={video.name} className={`overflow-hidden cursor-pointer transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`} style={{ transitionDelay: inView ? `${80 + index * 80}ms` : undefined }}>
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-primary/20/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground ring-1 ring-border/50">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold">{video.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Client Success Metrics</h2>
              <p className="text-xl text-muted-foreground">
                Real results from real people who have committed to their wellness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  metric: "85%",
                  description: "Report significant stress reduction within 30 days"
                },
                {
                  icon: Users,
                  metric: "92%",
                  description: "Continue practices 6 months after program completion"
                },
                {
                  icon: Award,
                  metric: "78%",
                  description: "Achieve their primary wellness goals within 90 days"
                }
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={metric.metric} className={`text-center shadow-card transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`} style={{ transitionDelay: inView ? `${100 + index * 80}ms` : undefined }}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{metric.metric}</div>
                      <p className="text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Own Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of others who have transformed their wellness journey. 
              Your story of transformation starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero group relative overflow-hidden">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="btn-outline relative overflow-hidden hover:border-primary/40">
                  Explore Services
                  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;