import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Mountain, 
  TreePine, 
  Waves,
  ArrowRight,
  Star,
  Leaf
} from "lucide-react";
import retreatBg from "@/assets/retreat-bg.jpg";
import heroBg from "@/assets/retreat-bg.jpg";
import { useInView } from "@/hooks/useInView";

const Retreats = () => {
  const featuredRetreat = {
    id: "pathfinder-spring",
    title: "Pathfinder Wellness Retreat",
    subtitle: "Spring Forest Immersion",
    location: "Olympic Peninsula, Washington",
    dates: "March 15-17, 2024",
    duration: "3 Days / 2 Nights",
    price: "$495",
    spots: "8 spots remaining",
    maxParticipants: 12,
    image: retreatBg,
    description: "Disconnect from the digital world and reconnect with yourself through mindful movement, breathwork, and nature immersion in the pristine Pacific Northwest wilderness.",
    highlights: [
      "Daily yoga & meditation sessions",
      "Guided forest bathing experiences", 
      "Breathwork workshops",
      "Healthy, locally-sourced meals",
      "Digital detox environment",
      "Small group setting (max 12 people)",
      "Nature photography walks",
      "Evening reflection circles"
    ]
  };

  const upcomingRetreats = [
    {
      id: "summer-coastal",
      title: "Coastal Renewal Retreat",
      location: "San Juan Islands, WA",
      dates: "June 21-23, 2024",
      price: "$545",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "A rejuvenating weekend by the ocean with yoga, meditation, and coastal walks.",
      spots: "5 spots remaining"
    },
    {
      id: "mountain-mindfulness",
      title: "Mountain Mindfulness Retreat",
      location: "Cascade Mountains, WA",
      dates: "August 10-12, 2024",
      price: "$525",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "High-altitude healing with breathwork and mountain meditation practices.",
      spots: "Early bird pricing"
    },
    {
      id: "autumn-balance",
      title: "Autumn Balance Retreat",
      location: "Hood River, Oregon",
      dates: "October 4-6, 2024",
      price: "$495",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      description: "Embrace seasonal transitions with grounding practices and harvest wellness.",
      spots: "Coming soon"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      text: "The retreat experience was life-changing. Aaron creates such a safe, supportive environment where you can truly disconnect and focus on yourself.",
      rating: 5
    },
    {
      name: "Lisa Martinez", 
      text: "I left feeling renewed and with practical tools I still use daily. The combination of nature and mindful practices was perfect.",
      rating: 5
    },
    {
      name: "David Thompson",
      text: "Aaron's guidance helped me find a deeper connection to both nature and myself. Highly recommend for anyone seeking real transformation.",
      rating: 5
    }
  ];

  const { ref: pageRef, inView } = useInView<HTMLDivElement>({ threshold: 0, margin: "0px", once: true });

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-16 md:pt-[76px]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden min-h-[60vh] md:min-h-[60vh] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-background" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl opacity-60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            <Badge variant="secondary" className={`mb-4 sm:mb-6 bg-white/20 text-white border-white/30 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Wellness Retreats</Badge>
            <h1 className={`text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-2 sm:mb-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Transformative{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Retreat Experiences
              </span>
            </h1>
            <div className={`mx-auto h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            <p className={`text-base sm:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Step away from the everyday and into carefully crafted experiences designed 
              to restore, rejuvenate, and reconnect you with your truest self in nature's embrace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Retreat */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="p-[1px] rounded-2xl bg-[linear-gradient(120deg,theme(colors.primary/25),transparent,theme(colors.accent/25))] animate-fade-in">
              <Card className="overflow-hidden rounded-[15px] shadow-floating border-0 bg-gradient-to-br from-white to-muted/20 transition-all duration-500 hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-56 sm:h-64 lg:h-full lg:min-h-[500px]">
                  <img
                    src={featuredRetreat.image}
                    alt={featuredRetreat.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Floating Icons */}
                    <div className="absolute top-6 right-6 flex space-x-2">
                      <div className="p-3 rounded-full glass text-white transition-transform duration-500 hover:-translate-y-0.5">
                        <Mountain className="h-5 w-5" />
                      </div>
                      <div className="p-3 rounded-full glass text-white transition-transform duration-500 hover:-translate-y-1">
                        <TreePine className="h-5 w-5" />
                      </div>
                      <div className="p-3 rounded-full glass text-white transition-transform duration-500 hover:-translate-y-1.5">
                        <Waves className="h-5 w-5" />
                      </div>
                    </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-6 left-6">
                      <div className="px-4 py-2 rounded-full glass text-white font-semibold text-lg ring-1 ring-white/30">
                      From {featuredRetreat.price}
                    </div>
                  </div>

                  {/* Spots Remaining */}
                  <div className="absolute top-6 left-6">
                      <Badge variant="secondary" className="bg-white/90 text-foreground ring-1 ring-border/50">
                      {featuredRetreat.spots}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                  <CardContent className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/25 to-transparent opacity-70" />
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        {featuredRetreat.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-primary font-medium mb-4">
                        {featuredRetreat.subtitle}
                      </p>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {featuredRetreat.description}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs sm:text-sm font-medium">{featuredRetreat.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs sm:text-sm font-medium">{featuredRetreat.dates}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs sm:text-sm font-medium">{featuredRetreat.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs sm:text-sm font-medium">Max {featuredRetreat.maxParticipants} people</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-semibold mb-3">What's Included:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {featuredRetreat.highlights.map((highlight, index) => (
                          <div key={highlight} className="flex items-center space-x-2">
                            <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                      <Link to="/contact" className="flex-1">
                        <Button size="lg" className="btn-hero w-full group relative overflow-hidden">
                          Reserve Your Spot
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                        </Button>
                      </Link>
                      <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto relative overflow-hidden hover:border-primary/40">
                        Download Itinerary
                        <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Retreats */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Upcoming Retreats</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Each retreat offers a unique seasonal experience, thoughtfully designed 
              to align with nature's rhythms and your personal growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {upcomingRetreats.map((retreat, index) => (
              <Card key={retreat.id} className={`group overflow-hidden transition-all duration-700 ease-out ${true ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-2xl ring-1 ring-border/50`}>
                <div className="relative h-48">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground ring-1 ring-border/50">
                      {retreat.spots}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="text-white font-semibold">{retreat.price}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{retreat.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{retreat.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{retreat.dates}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{retreat.description}</p>
                  <Button className="w-full btn-outline relative overflow-hidden hover:border-primary/40">
                    Learn More
                    <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">What to Expect</h2>
              <p className="text-base sm:text-xl text-muted-foreground">
                Every retreat is carefully crafted to provide the perfect balance of 
                structure and freedom, allowing you to dive deep into practices that serve your highest good.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Daily Structure",
                  items: [
                    "Morning meditation & breathwork",
                    "Yoga practice sessions",
                    "Healthy, nourishing meals",
                    "Nature immersion activities",
                    "Evening reflection circles",
                    "Rest and integration time"
                  ]
                },
                {
                  title: "What's Included",
                  items: [
                    "All accommodation & meals",
                    "Guided sessions & workshops",
                    "Materials & props provided",
                    "Small group intimate setting",
                    "Take-home practice guide",
                    "Ongoing support community"
                  ]
                }
              ].map((section) => (
                <Card key={section.title} className="shadow-card ring-1 ring-border/50 transition-all duration-500 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center space-x-3">
                          <Leaf className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Retreat Experiences</h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              Hear from participants who have transformed their lives through our retreat experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`shadow-card ring-1 ring-border/50 transition-all duration-700 ease-out ${true ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current drop-shadow" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready for Your Retreat Experience?</h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Spaces are limited to ensure an intimate, personalized experience. 
              Reserve your spot today and take the first step toward transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero w-full sm:w-auto group">
                  Reserve Your Spot
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto">
                Download Retreat Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retreats;