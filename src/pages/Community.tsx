import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Target,
  Heart,
  Zap,
  BookOpen,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import communityImg from "@/assets/community.jpg";

const Community = () => {
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
      ]
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
      ]
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
      ]
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
      ]
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
      popular: false
    },
    {
      name: "Wellness Circle",
      price: "$27/month",
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
      popular: true
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
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Wellness Circle Member",
      text: "The community has been a game-changer for my wellness journey. Having daily support and accountability has helped me stay consistent with my practices.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael R.",
      role: "Inner Circle Member", 
      text: "Aaron's personal guidance combined with the supportive community has transformed how I approach health and wellness. It's like having a wellness coach and best friends all in one place.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Lisa M.",
      role: "Wellness Circle Member",
      text: "I love the weekly challenges! They push me out of my comfort zone in the best way and the community support makes everything feel achievable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${communityImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Join the Pathfinder Community</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in stagger-1">
              Be part of a supportive wellness network. Access exclusive video courses, join daily challenges, and receive practical tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-2">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2,500+", label: "Community Members" },
              { number: "50+", label: "Weekly Challenges Completed" },
              { number: "95%", label: "Member Satisfaction" },
              { number: "24/7", label: "Community Support" }
            ].map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in stagger-${index + 1}`}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Community Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the ways our community supports your wellness journey 
              with daily motivation, challenges, and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className={`hover-lift animate-fade-in stagger-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.details.map((detail) => (
                            <li key={detail} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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