import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Target,
  Heart,
  Zap,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Play,
  Sparkles,
  Globe,
  Shield,
  Crown,
  TrendingUp,
  Activity,
  Coffee,
  Mountain
} from "lucide-react";
import communityImg from "@/assets/community.jpg";

const Community = () => {
  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: featuresRef, inView: featuresInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: tiersRef, inView: tiersInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: challengeRef, inView: challengeInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: ctaRef, inView: ctaInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Daily Support",
      description: "Connect with like-minded individuals on their wellness journey",
      details: [
        "Private discussion forums",
        "Daily check-ins and motivation",
        "Peer support and accountability",
        "Expert guidance from Aaron"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      stats: "2,500+ daily interactions"
    },
    {
      icon: Calendar,
      title: "Weekly Challenges",
      description: "Participate in fun, engaging wellness challenges each week",
      details: [
        "Movement challenges",
        "Mindfulness practices",
        "Nutrition experiments",
        "Habit building exercises"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      stats: "50+ challenges completed"
    },
    {
      icon: BookOpen,
      title: "Exclusive Content",
      description: "Access member-only resources and early content previews",
      details: [
        "Monthly wellness workshops",
        "Bonus video content",
        "Downloadable resources",
        "First access to new programs"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      stats: "100+ exclusive resources"
    },
    {
      icon: Users,
      title: "Live Sessions",
      description: "Join monthly live Q&A sessions and group practices",
      details: [
        "Monthly live coaching calls",
        "Group meditation sessions",
        "Q&A with Aaron",
        "Community celebrations"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      stats: "Monthly live events"
    }
  ];

  const membershipTiers = [
    {
      name: "Community Member",
      price: "Free",
      description: "Get started with basic community access",
      features: [
        "Access to community forums",
        "Weekly wellness tips",
        "Monthly newsletter",
        "Basic resource library"
      ],
      cta: "Join Free",
      popular: false,
      icon: Globe,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
      savings: null
    },
    {
      name: "Wellness Circle",
      price: "$27/month",
      originalPrice: "$47/month",
      description: "Full access to all community features and content",
      features: [
        "Everything in Community Member",
        "Weekly wellness challenges",
        "Monthly live sessions with Aaron",
        "Exclusive video content library",
        "Priority support",
        "Member-only workshops"
      ],
      cta: "Start 7-Day Trial",
      popular: true,
      icon: Crown,
      color: "from-primary to-primary/80",
      bgColor: "bg-primary/5",
      savings: "Save $20/month"
    },
    {
      name: "Inner Circle",
      price: "$97/month",
      description: "Premium access with personalized guidance",
      features: [
        "Everything in Wellness Circle",
        "Monthly 1-on-1 check-ins",
        "Personalized wellness plans",
        "Direct access to Aaron",
        "First access to retreats",
        "Custom content recommendations"
      ],
      cta: "Apply Now",
      popular: false,
      icon: Sparkles,
      color: "from-accent to-accent/80",
      bgColor: "bg-accent/5",
      savings: null
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Wellness Circle Member",
      company: "Marketing Manager",
      text: "The community has been a game-changer for my wellness journey. Having daily support and accountability has helped me stay consistent with my practices.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: "Game-changer for wellness journey",
      duration: "6 months",
      results: "Lost 15 lbs, gained energy"
    },
    {
      name: "Michael R.",
      role: "Inner Circle Member",
      company: "Software Engineer", 
      text: "Aaron's personal guidance combined with the supportive community has transformed how I approach health and wellness. It's like having a wellness coach and best friends all in one place.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: "Transformed health approach",
      duration: "8 months",
      results: "Reduced stress by 60%"
    },
    {
      name: "Lisa M.",
      role: "Wellness Circle Member",
      company: "Teacher",
      text: "I love the weekly challenges! They push me out of my comfort zone in the best way and the community support makes everything feel achievable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      highlight: "Challenges push comfort zone",
      duration: "4 months",
      results: "Completed 12 challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${communityImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/80" />
        
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl opacity-60 animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                Community
              </Badge>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: heroInView ? '100ms' : undefined }}>
              Join the Pathfinder Community
            </h1>
            
            <p className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: heroInView ? '200ms' : undefined }}>
              Be part of a supportive wellness network with 2,500+ members. Access exclusive content, 
              join daily challenges, and receive personalized guidance from Aaron and our expert community.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: heroInView ? '300ms' : undefined }}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl group px-8 py-4">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Community Stats */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="pointer-events-none absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Community Growth
            </Badge>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our Community by the Numbers
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              Join thousands of people who have transformed their wellness journey through our supportive community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "2,500+", 
                label: "Community Members", 
                icon: Users,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50 dark:bg-blue-950/20",
                description: "Active members worldwide"
              },
              { 
                number: "50+", 
                label: "Challenges Completed", 
                icon: Target,
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50 dark:bg-green-950/20",
                description: "Weekly wellness challenges"
              },
              { 
                number: "98%", 
                label: "Member Satisfaction", 
                icon: Heart,
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50 dark:bg-red-950/20",
                description: "Happy community members"
              },
              { 
                number: "24/7", 
                label: "Community Support", 
                icon: Shield,
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50 dark:bg-purple-950/20",
                description: "Always here to help"
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className={`text-center transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: statsInView ? `${200 + index * 100}ms` : undefined }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center ring-1 ring-white/20 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Community Features */}
      <section ref={featuresRef} className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-4 w-4 mr-2" />
              Community Features
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Everything You Need to Thrive
            </h2>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              Discover all the ways our community supports your wellness journey 
              with daily motivation, challenges, expert guidance, and exclusive content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className={`group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 overflow-hidden ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: featuresInView ? `${200 + index * 150}ms` : undefined }}
                >
                  <CardContent className="p-8 relative">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                            <Badge className={`${feature.bgColor} text-xs font-medium`}>
                              {feature.stats}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{feature.description}</p>
                          <ul className="space-y-3">
                            {feature.details.map((detail, detailIndex) => (
                              <li 
                                key={detail} 
                                className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                                style={{ transitionDelay: `${detailIndex * 50}ms` }}
                              >
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                                  <CheckCircle className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-sm font-medium">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Membership Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the level of support and access that best fits your wellness goals and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative hover-lift animate-fade-in stagger-${index + 1} ${
                  tier.popular ? 'ring-2 ring-primary shadow-floating' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${tier.popular ? 'btn-hero' : 'btn-outline'}`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Member Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from community members who have transformed their wellness journey 
              through the power of supportive connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`shadow-card animate-fade-in stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Challenge Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-floating border-0 bg-gradient-to-br from-white to-muted/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">This Week's Challenge</Badge>
                    <h3 className="text-3xl font-bold mb-4">
                      5-Minute Morning Movement
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Start each day with intention and energy! This week, we're focusing 
                      on creating a simple 5-minute morning movement routine that you can 
                      do anywhere, anytime.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Daily 5-minute movement videos",
                        "Community accountability check-ins",
                        "Progress tracking and celebrations",
                        "Weekend bonus content"
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <Zap className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-16 w-16 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">Day 3</div>
                    <div className="text-muted-foreground mb-4">of 7</div>
                    <Button className="btn-hero">
                      Join Challenge
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step toward a more connected, supported wellness journey. 
              Your community is waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-outline">
                  Have Questions?
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

export default Community;