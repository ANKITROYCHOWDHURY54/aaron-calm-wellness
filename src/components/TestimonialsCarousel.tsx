import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Aaron's holistic approach completely transformed my relationship with wellness. As a busy professional, I thought I didn't have time for self-care. He showed me how to integrate mindful practices into my daily routine.",
      highlight: "Completely transformed my relationship with wellness"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "The retreat experience was life-changing. Aaron creates such a safe, supportive environment where you can truly disconnect and focus on yourself. I left feeling renewed and with practical tools I still use daily.",
      highlight: "Life-changing retreat experience"
    },
    {
      name: "Lisa Martinez",
      role: "Working Mother",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Aaron understands the challenges of balancing family life with personal wellness. His 'real-world' approach helped me find sustainable practices that work with my schedule, not against it.",
      highlight: "Sustainable practices that actually work"
    },
    {
      name: "David Thompson",
      role: "Corporate Manager",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "The corporate wellness program Aaron designed for our team significantly improved morale and productivity. His ability to make wellness accessible and practical for everyone is remarkable.",
      highlight: "Significantly improved team morale and productivity"
    },
    {
      name: "Emma Williams",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/women/95.jpg",
      rating: 5,
      text: "I came to Aaron dealing with chronic stress and burnout. Through breathwork and mindful movement, I learned to manage stress proactively rather than reactively. It's been transformative.",
      highlight: "Learned to manage stress proactively"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            What People Are{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-1">
            Real stories from people who have transformed their wellness journey.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-floating border-0 bg-gradient-to-br from-white to-muted/30 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-primary/10">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-center font-medium leading-relaxed mb-8 text-foreground">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Highlight */}
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  {currentTestimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentTestimonial.name)}&background=random&color=fff&size=64`;
                  }}
                />
                <div className="text-center">
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">{currentTestimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover-scale"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover-scale"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary/10 scale-105" 
                  : "bg-muted/50 hover:bg-muted/80"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=48`;
                }}
              />
              <div className="text-xs font-medium text-center">
                {testimonial.name.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;