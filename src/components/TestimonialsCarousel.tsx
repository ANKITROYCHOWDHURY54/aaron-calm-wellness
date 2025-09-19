import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

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
      className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
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
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl opacity-60" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-5xl md:text-5xl leading-tight sm:leading-[1.1] font-bold mb-6 mx-auto max-w-[22ch] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '100ms' : undefined }}>
            What People Are{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '180ms' : undefined }}>
            Real stories from people who have transformed their wellness journey.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card
            className={`group overflow-hidden shadow-floating border-0 bg-gradient-to-br from-white to-muted/30 ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:ring-primary/20 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: inView ? '260ms' : undefined }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CardContent className="relative p-8 md:p-12">
              {/* Subtle top shine */}
              <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/25 to-transparent opacity-70" />

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
                    <div key={idx} className="w-full shrink-0 grow-0 basis-full px-1">
                      {/* Quote badge */}
                      <div className="flex justify-center mb-8">
                        <div className="p-4 rounded-full bg-primary/10 ring-1 ring-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                          <Quote className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex justify-center mb-6 gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]" />
                        ))}
                      </div>
                      {/* Text */}
                      <blockquote className="text-xl md:text-2xl text-center font-medium leading-relaxed mb-8 text-foreground">
                        "{t.text}"
                      </blockquote>
                      {/* Highlight pill */}
                      <div className="text-center mb-8">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm ring-1 ring-primary/20">
                          {t.highlight}
                        </span>
                      </div>
                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="relative">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=fff&size=64`;
                            }}
                          />
                          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-primary/30 animate-pulse" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">{t.name}</div>
                          <div className="text-muted-foreground">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Autoplay progress bar */}
              <div className="mt-6 h-1 w-full bg-muted rounded-full overflow-hidden">
                <div
                  key={currentIndex + (isPaused ? '-paused' : '-running')}
                  className={`h-full bg-primary/60 ${isPaused || !inView ? '' : 'transition-[width]'} duration-[5000ms]`}
                  style={{ width: isPaused || !inView ? '0%' : '100%' }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className={`flex justify-center items-center mt-8 space-x-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '380ms' : undefined }}>
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:shadow-md hover:border-primary/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ring-1 ring-transparent ${
                    index === activeDot
                      ? "bg-primary scale-125 ring-primary/40" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:shadow-md hover:border-primary/40"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Thumbnails */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-2xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '480ms' : undefined }}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`p-3 rounded-xl transition-all duration-300 ring-1 ring-transparent hover:ring-primary/20 ${
                index === activeDot
                  ? "bg-primary/10 scale-105"
                  : "bg-muted/50 hover:bg-muted/80"
              }`}
              aria-label={`Select ${testimonial.name}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover ring-2 ring-white/60"
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