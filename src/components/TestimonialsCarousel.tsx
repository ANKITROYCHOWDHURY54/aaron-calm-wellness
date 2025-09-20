import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Quote, Heart, Users, Award, ArrowRight, Play, Pause } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide (after leading clone)
  const [isPaused, setIsPaused] = useState(false);
  const animationDurationMs = 600;
  const autoplayMs = 5000;

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      company: "TechCorp Inc.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Aaron's holistic approach completely transformed my relationship with wellness. As a busy professional, I thought I didn't have time for self-care. He showed me how to integrate mindful practices into my daily routine.",
      highlight: "Completely transformed my relationship with wellness",
      category: "Lifestyle Coaching",
      duration: "6 months",
      results: "Reduced stress by 70%"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "The retreat experience was life-changing. Aaron creates such a safe, supportive environment where you can truly disconnect and focus on yourself. I left feeling renewed and with practical tools I still use daily.",
      highlight: "Life-changing retreat experience",
      category: "Wellness Retreat",
      duration: "3-day retreat",
      results: "Found inner peace"
    },
    {
      name: "Lisa Martinez",
      role: "Working Mother",
      company: "Healthcare Plus",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Aaron understands the challenges of balancing family life with personal wellness. His 'real-world' approach helped me find sustainable practices that work with my schedule, not against it.",
      highlight: "Sustainable practices that actually work",
      category: "Stress Management",
      duration: "4 months",
      results: "Better work-life balance"
    },
    {
      name: "David Thompson",
      role: "Corporate Manager",
      company: "Global Finance",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "The corporate wellness program Aaron designed for our team significantly improved morale and productivity. His ability to make wellness accessible and practical for everyone is remarkable.",
      highlight: "Significantly improved team morale and productivity",
      category: "Corporate Wellness",
      duration: "Ongoing program",
      results: "40% productivity increase"
    },
    {
      name: "Emma Williams",
      role: "Teacher",
      company: "Elementary School",
      image: "https://randomuser.me/api/portraits/women/95.jpg",
      rating: 5,
      text: "I came to Aaron dealing with chronic stress and burnout. Through breathwork and mindful movement, I learned to manage stress proactively rather than reactively. It's been transformative.",
      highlight: "Learned to manage stress proactively",
      category: "Breathwork & Movement",
      duration: "5 months",
      results: "Eliminated burnout"
    },
    {
      name: "James Rodriguez",
      role: "Entrepreneur",
      company: "GreenTech Solutions",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "Aaron's morning routine guidance helped me start each day with intention and energy. The simple practices he taught me have made a huge difference in my focus and overall well-being.",
      highlight: "Transformed my morning routine",
      category: "Morning Routine",
      duration: "3 months",
      results: "Increased daily energy"
    }
  ];

  const total = testimonials.length;
  const slides = [testimonials[total - 1], ...testimonials, testimonials[0]]; // clone last at start, first at end

  const next = () => setCurrentIndex((i) => i + 1);
  const prev = () => setCurrentIndex((i) => i - 1);
  const goToIndex = (index: number) => setCurrentIndex(index + 1); // shift by 1 due to leading clone

  // Visibility
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, margin: "0px 0px -10% 0px", once: false });

  // Handle seamless snap when hitting clones
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const handleEnd = () => {
      let snapped = false;
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(total);
        snapped = true;
      } else if (currentIndex === total + 1) {
        setTransitionEnabled(false);
        setCurrentIndex(1);
        snapped = true;
      }
      if (snapped) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setTransitionEnabled(true));
        });
      }
    };
    node.addEventListener("transitionend", handleEnd);
    return () => node.removeEventListener("transitionend", handleEnd);
  }, [currentIndex, total]);

  // Auto-advance every 5s (pause on hover and when not in view)
  useEffect(() => {
    if (isPaused || !inView) return;
    const timer = setInterval(next, autoplayMs);
    return () => clearInterval(timer);
  }, [isPaused, inView]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeDot = ((currentIndex - 1 + total) % total);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-muted/20 via-background to-accent/5 overflow-hidden"
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
        touchDeltaX.current = 0;
      }}
      onTouchMove={(e) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
      }}
      onTouchEnd={() => {
        const threshold = 40;
        if (Math.abs(touchDeltaX.current) > threshold) {
          if (touchDeltaX.current < 0) next(); else prev();
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-primary/10 text-primary border-primary/20">
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            Client Success Stories
          </Badge>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all duration-1000 px-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '100ms' : undefined }}>
            What People Are Saying
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 px-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '180ms' : undefined }}>
            Real stories from people who have transformed their wellness journey. 
            Discover how our holistic approach has helped thousands achieve lasting change.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto px-4 sm:px-0 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '200ms' : undefined }}>
          {[
            { icon: Users, label: "Happy Clients", value: "2,500+", color: "from-blue-500 to-blue-600" },
            { icon: Star, label: "Average Rating", value: "4.9/5", color: "from-yellow-500 to-yellow-600" },
            { icon: Award, label: "Success Rate", value: "98%", color: "from-green-500 to-green-600" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center ring-1 ring-white/20 shadow-lg`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-0">
          <Card
            className={`group overflow-hidden shadow-2xl border border-white/30 bg-gradient-to-br from-white via-white/95 to-muted/20 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:ring-2 hover:ring-primary/20 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: inView ? '260ms' : undefined }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CardContent className="relative p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
              {/* Enhanced top shine */}
              <div className="pointer-events-none absolute inset-x-0 -top-2 h-24 bg-gradient-to-b from-white/30 to-transparent opacity-80" />

              <div className="relative overflow-hidden">
                {/* Track (infinite loop with clones) */}
                <div
                  ref={trackRef}
                  className="flex w-full"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: transitionEnabled ? `transform ${animationDurationMs}ms cubic-bezier(0.22,1,0.36,1)` : "none"
                  }}
                >
                  {slides.map((t, idx) => (
                    <div key={idx} className="w-full shrink-0 grow-0 basis-full px-1 sm:px-2">
                      {/* Quote badge */}
                      <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 ring-1 ring-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-105">
                          <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex justify-center mb-4 sm:mb-6 gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]" />
                        ))}
                      </div>
                      
                      {/* Text */}
                      <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-medium leading-relaxed mb-6 sm:mb-8 text-foreground px-2">
                        "{t.text}"
                      </blockquote>
                      
                      {/* Enhanced Highlight Section */}
                      <div className="text-center mb-6 sm:mb-8">
                        <div className="relative inline-block">
                          {/* Background glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl sm:rounded-2xl blur-sm scale-110 opacity-60" />
                          
                          {/* Main highlight card */}
                          <div className="relative bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-primary/30 shadow-lg backdrop-blur-sm">
                            {/* Decorative elements */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary/40 rounded-full animate-pulse" />
                            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                            
                            {/* Quote icon */}
                            <div className="absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                                <Quote className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                              </div>
                            </div>
                            
                            {/* Highlight text */}
                            <div className="text-primary font-semibold text-xs sm:text-sm leading-relaxed italic px-2">
                              "{t.highlight}"
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Author */}
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                        <div className="relative">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 sm:ring-4 ring-white shadow-lg"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=fff&size=80`;
                            }}
                          />
                          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 sm:ring-4 ring-primary/30 animate-pulse" />
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="font-bold text-base sm:text-lg lg:text-xl">{t.name}</div>
                          <div className="text-muted-foreground text-sm sm:text-base lg:text-lg">{t.role}</div>
                          <div className="text-xs sm:text-sm text-primary font-medium">{t.company}</div>
                        </div>
                      </div>
                      
                      {/* Results Card */}
                      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                          <div>
                            <div className="text-xs sm:text-sm text-muted-foreground mb-1">Category</div>
                            <div className="font-semibold text-xs sm:text-sm text-primary">{t.category}</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                            <div className="font-semibold text-xs sm:text-sm">{t.duration}</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-muted-foreground mb-1">Results</div>
                            <div className="font-semibold text-xs sm:text-sm text-green-600">{t.results}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Autoplay progress bar */}
              <div className="mt-8 h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                <div
                  key={currentIndex + (isPaused ? '-paused' : '-running')}
                  className={`h-full bg-gradient-to-r from-primary to-accent ${isPaused || !inView ? '' : 'transition-[width]'} duration-[5000ms] rounded-full`}
                  style={{ width: isPaused || !inView ? '0%' : '100%' }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className={`flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '380ms' : undefined }}>
            {/* Mobile: Show dots first */}
            <div className="flex space-x-2 sm:space-x-3 order-1 sm:order-none">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ring-2 ring-transparent ${
                    index === activeDot
                      ? "bg-primary scale-125 ring-primary/40 shadow-lg" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center space-x-4 sm:space-x-6 order-2 sm:order-none">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              {/* Play/Pause Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPaused(!isPaused)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                {isPaused ? <Play className="h-4 w-4 sm:h-5 sm:w-5" /> : <Pause className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Thumbnails */}
        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4 mt-12 sm:mt-16 max-w-5xl mx-auto px-4 sm:px-0 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '480ms' : undefined }}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ring-2 ring-transparent hover:ring-primary/20 hover:shadow-lg ${
                index === activeDot
                  ? "bg-gradient-to-br from-primary/10 to-accent/5 scale-105 ring-primary/30 shadow-lg"
                  : "bg-muted/50 hover:bg-muted/80 hover:scale-105"
              }`}
              aria-label={`Select ${testimonial.name}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mx-auto mb-2 sm:mb-3 object-cover ring-1 sm:ring-2 ring-white/60 shadow-md"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=64`;
                }}
              />
              <div className="text-xs sm:text-sm font-medium text-center mb-1 hidden sm:block">
                {testimonial.name.split(' ')[0]}
              </div>
              <div className="text-xs text-muted-foreground text-center mb-1 sm:mb-2 hidden sm:block">
                {testimonial.role}
              </div>
              
              {/* Enhanced highlight preview - hidden on mobile */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg px-1 sm:px-2 py-1 mb-1 sm:mb-2 border border-primary/20 hidden sm:block">
                <div className="text-xs text-primary font-medium text-center leading-tight italic">
                  "{testimonial.highlight.split(' ').slice(0, 3).join(' ')}..."
                </div>
              </div>
              
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '600ms' : undefined }}>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Join thousands of people who have transformed their lives through our holistic wellness approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="btn-hero group px-6 sm:px-8 py-3 text-sm sm:text-base">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline px-6 sm:px-8 py-3 text-sm sm:text-base">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;