import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, ArrowRight, Mountain, Waves, TreePine, Star, Clock, Heart, Award, Sparkles, Globe, Crown, CheckCircle, Play, Download } from "lucide-react";
import retreatBg from "@/assets/retreat-bg.jpg";
import { useInView } from "@/hooks/useInView";
import { useState, useMemo } from "react";

const RetreatHighlight = () => {
  // Retreat filtering state
  const [activeCategory, setActiveCategory] = useState("All Retreats");
  const [priceRange, setPriceRange] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

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

  // All retreats data
  const allRetreats = [
    {
      id: "forest-immersion",
      title: "Forest Immersion Retreat",
      subtitle: "3-Day Nature Connection",
      category: "Nature",
      location: "Olympic Peninsula, WA",
      date: "March 15-17, 2025",
      duration: "3 days",
      price: "$1,200",
      originalPrice: "$1,500",
      spots: "8 spots remaining",
      maxParticipants: 12,
      rating: 4.9,
      reviews: 24,
      image: retreatBg,
      description: "Disconnect from the digital world and reconnect with yourself through mindful movement, breathwork, and nature immersion in the pristine Pacific Northwest wilderness.",
      highlights: [
        "Daily yoga & meditation sessions",
        "Guided forest bathing experiences", 
        "Breathwork workshops",
        "Healthy, locally-sourced meals",
        "Digital detox environment",
        "Small group setting (max 12 people)"
      ],
      popular: true,
      badge: "Most Popular",
      badgeColor: "from-primary to-accent"
    },
    {
      id: "coastal-wellness",
      title: "Coastal Wellness Retreat",
      subtitle: "5-Day Ocean Healing",
      category: "Coastal",
      location: "Big Sur, CA",
      date: "April 20-24, 2025",
      duration: "5 days",
      price: "$1,800",
      originalPrice: "$2,200",
      spots: "6 spots remaining",
      maxParticipants: 10,
      rating: 4.8,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Experience the healing power of the ocean with daily beach yoga, sound healing sessions, and mindfulness practices against the backdrop of California's stunning coastline.",
      highlights: [
        "Beach yoga at sunrise",
        "Sound healing with ocean waves",
        "Mindfulness meditation sessions",
        "Farm-to-table organic meals",
        "Ocean therapy workshops",
        "Private beach access"
      ],
      popular: false,
      badge: "New",
      badgeColor: "from-green-500 to-emerald-500"
    },
    {
      id: "mountain-silence",
      title: "Mountain Silence Retreat",
      subtitle: "4-Day High Altitude Healing",
      category: "Mountain",
      location: "Aspen, CO",
      date: "May 10-13, 2025",
      duration: "4 days",
      price: "$1,500",
      originalPrice: "$1,800",
      spots: "4 spots remaining",
      maxParticipants: 8,
      rating: 4.9,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Find peace and clarity in the high mountains with silent meditation, breathwork, and contemplative practices in the serene Colorado wilderness.",
      highlights: [
        "Silent meditation sessions",
        "High altitude breathwork",
        "Mountain hiking & reflection",
        "Plant-based gourmet meals",
        "Digital-free environment",
        "Intimate group (max 8 people)"
      ],
      popular: false,
      badge: "Exclusive",
      badgeColor: "from-purple-500 to-pink-500"
    },
    {
      id: "desert-renewal",
      title: "Desert Renewal Retreat",
      subtitle: "3-Day Desert Transformation",
      category: "Desert",
      location: "Sedona, AZ",
      date: "June 5-7, 2025",
      duration: "3 days",
      price: "$1,100",
      originalPrice: "$1,400",
      spots: "10 spots remaining",
      maxParticipants: 15,
      rating: 4.7,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
      description: "Transform in the mystical energy of Sedona with vortex experiences, energy healing, and spiritual practices in the heart of the red rock desert.",
      highlights: [
        "Vortex energy experiences",
        "Energy healing sessions",
        "Desert meditation practices",
        "Organic vegetarian meals",
        "Crystal healing workshops",
        "Red rock hiking tours"
      ],
      popular: false,
      badge: "Spiritual",
      badgeColor: "from-orange-500 to-red-500"
    },
    {
      id: "lake-serenity",
      title: "Lake Serenity Retreat",
      subtitle: "4-Day Water Wellness",
      category: "Lake",
      location: "Lake Tahoe, CA",
      date: "July 12-15, 2025",
      duration: "4 days",
      price: "$1,400",
      originalPrice: "$1,700",
      spots: "7 spots remaining",
      maxParticipants: 12,
      rating: 4.8,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      description: "Find balance and tranquility by the crystal-clear waters of Lake Tahoe with water-based wellness practices and mountain lake meditation.",
      highlights: [
        "Lakeside yoga sessions",
        "Water meditation practices",
        "Kayaking & paddleboarding",
        "Fresh mountain air activities",
        "Lakeside dining experiences",
        "Sunset reflection sessions"
      ],
      popular: false,
      badge: "Water Therapy",
      badgeColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "forest-deep",
      title: "Deep Forest Retreat",
      subtitle: "5-Day Wilderness Immersion",
      category: "Nature",
      location: "Cascade Mountains, OR",
      date: "August 8-12, 2025",
      duration: "5 days",
      price: "$1,600",
      originalPrice: "$2,000",
      spots: "5 spots remaining",
      maxParticipants: 10,
      rating: 4.9,
      reviews: 16,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Dive deep into the ancient wisdom of the forest with extended wilderness immersion, plant medicine ceremonies, and earth connection practices.",
      highlights: [
        "Extended forest immersion",
        "Plant medicine ceremonies",
        "Wilderness survival skills",
        "Foraged meals preparation",
        "Earth connection practices",
        "Ancient wisdom teachings"
      ],
      popular: false,
      badge: "Wilderness",
      badgeColor: "from-green-600 to-emerald-600"
    }
  ];

  // Filter retreats based on active filters
  const filteredRetreats = useMemo(() => {
    return allRetreats.filter(retreat => {
      // Category filter
      if (activeCategory !== "All Retreats" && retreat.category !== activeCategory) {
        return false;
      }

      // Price range filter
      const retreatPrice = parseInt(retreat.price.replace('$', '').replace(',', ''));
      if (priceRange !== "all") {
        switch (priceRange) {
          case "under-1200":
            if (retreatPrice >= 1200) return false;
            break;
          case "1200-1500":
            if (retreatPrice < 1200 || retreatPrice > 1500) return false;
            break;
          case "1500-1800":
            if (retreatPrice < 1500 || retreatPrice > 1800) return false;
            break;
          case "over-1800":
            if (retreatPrice <= 1800) return false;
            break;
        }
      }

      // Duration filter
      if (durationFilter !== "all") {
        const retreatDuration = retreat.duration.toLowerCase();
        switch (durationFilter) {
          case "short":
            if (!retreatDuration.includes("3 day")) return false;
            break;
          case "medium":
            if (!retreatDuration.includes("4 day")) return false;
            break;
          case "long":
            if (!retreatDuration.includes("5 day")) return false;
            break;
        }
      }

      return true;
    });
  }, [activeCategory, priceRange, durationFilter]);

  // Get retreat counts for categories
  const getCategoryCount = (category: string) => {
    if (category === "All Retreats") return allRetreats.length;
    return allRetreats.filter(retreat => retreat.category === category).length;
  };

  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, margin: "0px 0px -10% 0px", once: true });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden [perspective:1200px]">
      {/* Ambient decorative orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className={`mb-4 text-sm font-medium transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '40ms' : undefined }}>
            Featured Experience
          </Badge>
          <h2 className={`text-3xl sm:text-5xl md:text-5xl leading-tight sm:leading-[1.1] font-bold mb-6 mx-auto max-w-[22ch] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '120ms' : undefined }}>
            Immersive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wellness Retreats
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '220ms' : undefined }}>
            Step away from the noise and immerse yourself in nature. Our 3–5 day retreats are designed to restore balance, deepen connection, and create lasting change.
          </p>
        </div>

        {/* Featured Retreat */}
        <div className="max-w-6xl mx-auto">
          <Card className={`group overflow-hidden shadow-floating border-0 bg-gradient-to-br from-white to-muted/20 ring-1 ring-black/5 transition-all duration-1000 hover:shadow-2xl hover:ring-primary/20 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '280ms' : undefined }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className={`relative h-56 sm:h-64 lg:h-full min-h-[320px] lg:min-h-[400px] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '360ms' : undefined }}>
                {/* Framed image with subtle gradient border */}
                <div className="absolute inset-0 p-[1px] rounded-none lg:rounded-r-[14px] bg-[linear-gradient(120deg,theme(colors.primary/25),transparent,theme(colors.primary/25))]">
                <img
                  src={retreatBg}
                  alt="Pathfinder Wellness Retreat"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-2px]"
                />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
                {/* Top shine */}
                <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Floating Icons */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  <div className="p-3 rounded-full glass text-white transition-transform duration-500 group-hover:-translate-y-0.5">
                    <Mountain className="h-5 w-5" />
                  </div>
                  <div className="p-3 rounded-full glass text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <TreePine className="h-5 w-5" />
                  </div>
                  <div className="p-3 rounded-full glass text-white transition-transform duration-500 group-hover:-translate-y-1.5">
                    <Waves className="h-5 w-5" />
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="px-4 py-2 rounded-full glass text-white font-semibold text-lg shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    From {featuredRetreat.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '420ms' : undefined }}>
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '460ms' : undefined }}>
                      {featuredRetreat.title}
                    </h3>
                    <p className={`text-lg sm:text-xl text-primary font-medium mb-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '500ms' : undefined }}>
                      {featuredRetreat.subtitle}
                    </p>
                    <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '540ms' : undefined }}>
                      {featuredRetreat.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className={`flex items-center space-x-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '580ms' : undefined }}>
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium">{featuredRetreat.location}</span>
                    </div>
                    <div className={`flex items-center space-x-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '620ms' : undefined }}>
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium">{featuredRetreat.date}</span>
                    </div>
                    <div className={`flex items-center space-x-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-1000 p-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '660ms' : undefined }}>
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium">{featuredRetreat.spots}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featuredRetreat.highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className={`group/item flex items-center space-x-2 p-1 rounded-md transition-colors hover:bg-primary/5 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                          style={{ transitionDelay: inView ? `${680 + index * 60}ms` : undefined }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary transition-transform duration-300 group-hover/item:scale-125" />
                          <span className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '820ms' : undefined }}>
                    <Link to="/retreats" className="flex-1">
                      <Button size="lg" className="btn-hero w-full group relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                        Explore Retreats
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        {/* Shine sweep */}
                        <span className="pointer-events-none absolute -inset-10 -skew-x-12 bg-white/15 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                      </Button>
                    </Link>
                    <Link to="/retreats">
                      <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto relative overflow-hidden transition-all duration-300 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                        View All Retreats
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Supporting Text */}
        <div className={`text-center mt-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '900ms' : undefined }}>
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