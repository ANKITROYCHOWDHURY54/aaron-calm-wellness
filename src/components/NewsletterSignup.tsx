import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Check, Sparkles, Heart, Users, Calendar, Gift, ArrowRight, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/useInView";

const NewsletterSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Name and email required",
        description: "Please enter your name and email to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call - Replace with actual newsletter service integration
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setName("");
      setEmail("");
      toast({
        title: "Welcome to the wellness community!",
        description: "You've successfully subscribed to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { ref: sectionRef, inView } = useInView<HTMLDivElement>({ threshold: 0.2, margin: "0px 0px -10% 0px", once: true });

  if (isSubscribed) {
    return (
      <section className="relative py-24 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-60 animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border border-white/30 bg-gradient-to-br from-white via-white/95 to-muted/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "120ms" }}>
            <CardContent className="relative p-12 text-center">
              <div className="pointer-events-none absolute inset-x-0 -top-2 h-24 bg-gradient-to-b from-white/30 to-transparent opacity-80" />
              
              {/* Success Animation */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center ring-4 ring-green-200 shadow-lg animate-bounce">
                <Check className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-green-100 text-green-800 border-green-200">
                <Heart className="h-4 w-4 mr-2" />
                Successfully Subscribed!
              </Badge>
              
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
                Welcome to the Community!
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Thank you for joining our wellness journey. You'll receive mindful insights, 
                practical tips, and exclusive retreat updates directly in your inbox.
              </p>
              
              {/* What's Next */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-6 border border-primary/20">
                <h4 className="text-lg font-semibold mb-4 text-primary">What happens next?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Check your email</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Weekly wellness tips</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gift className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Exclusive content</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground/70">
                You can unsubscribe anytime with one click. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Heart className="h-4 w-4 mr-2" />
              Join Our Community
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Stay Connected to Your Wellness Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get exclusive wellness tips, mindful practices, and first access to retreats and workshops. 
              Join thousands of people transforming their lives through conscious living.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits & Features */}
            <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '200ms' : undefined }}>
              {/* Main Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                {[
                  {
                    icon: Sparkles,
                    title: "Weekly Wellness Tips",
                    description: "Evidence-based practices for daily well-being",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "bg-blue-50 dark:bg-blue-950/20"
                  },
                  {
                    icon: Heart,
                    title: "Mindful Practices",
                    description: "Simple exercises you can do anywhere, anytime",
                    color: "from-pink-500 to-pink-600",
                    bgColor: "bg-pink-50 dark:bg-pink-950/20"
                  },
                  {
                    icon: Calendar,
                    title: "Exclusive Updates",
                    description: "First access to retreats, workshops, and events",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "bg-purple-50 dark:bg-purple-950/20"
                  },
                  {
                    icon: Gift,
                    title: "Special Offers",
                    description: "Member-only discounts and early bird pricing",
                    color: "from-green-500 to-green-600",
                    bgColor: "bg-green-50 dark:bg-green-950/20"
                  }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className={`flex items-start space-x-4 p-4 rounded-xl ${benefit.bgColor} border border-white/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center ring-1 ring-white/20 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Community Stats */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">Community Stats</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,500+</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '400ms' : undefined }}>
              <Card className="shadow-2xl border border-white/30 bg-gradient-to-br from-white via-white/95 to-muted/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="relative p-8">
                  <div className="pointer-events-none absolute inset-x-0 -top-2 h-24 bg-gradient-to-b from-white/30 to-transparent opacity-80" />
                  
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center ring-1 ring-primary/20 shadow-lg">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Join the Community</h3>
                    <p className="text-muted-foreground">
                      Start your wellness journey with us today
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="newsletter-name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="newsletter-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label htmlFor="newsletter-email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 btn-hero relative overflow-hidden group text-lg font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Joining Community...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center relative z-10">
                          Join Now
                          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                      
                      {/* Button Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                      
                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full" />
                      </div>
                    </Button>
                    
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Join 2,500+ people on their wellness journey
                      </p>
                      <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="ml-2">4.9/5 from our community</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70">
                        No spam. Unsubscribe anytime with one click.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;