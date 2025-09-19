import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, Check, Sparkles } from "lucide-react";
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
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-60" />
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto overflow-hidden shadow-floating border border-white/20 bg-gradient-to-br from-white to-muted/30 animate-fade-in" style={{ animationDelay: "120ms" }}>
            <CardContent className="relative p-8 text-center">
              <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/25 to-transparent opacity-70" />
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Welcome to the Community!</h3>
              <p className="text-muted-foreground mb-2">
                Thank you for joining our wellness journey. You'll receive mindful insights, 
                practical tips, and exclusive retreat updates directly in your inbox.
              </p>
              <p className="text-xs text-muted-foreground/70">You can unsubscribe anytime with one click.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl opacity-60" />
      <div className="container mx-auto px-4">
        <Card className={`max-w-2xl mx-auto overflow-hidden shadow-floating border border-white/20 bg-gradient-to-br from-white to-muted/30 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '100ms' : undefined }}>
          <CardContent className="relative p-8">
            <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/25 to-transparent opacity-70" />
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`text-3xl font-bold mb-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '160ms' : undefined }}>Join my wellness community</h3>
              <p className={`text-lg text-muted-foreground transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '220ms' : undefined }}>
                Get tips, guides, and retreat updates straight to your inbox.
              </p>
              <p className={`text-xs text-muted-foreground/70 mt-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: inView ? '240ms' : undefined }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {[
                {
                  icon: Sparkles,
                  title: "Weekly Wellness Tips",
                  description: "Practical guidance for daily well-being"
                },
                {
                  icon: Mail,
                  title: "Mindful Practices",
                  description: "Simple exercises you can do anywhere"
                },
                {
                  icon: Send,
                  title: "Exclusive Updates",
                  description: "First access to retreats and workshops"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className={`text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? `${260 + index * 80}ms` : undefined }}>
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 transition-transform duration-300 hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? '540ms' : undefined }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-primary/40"
                  disabled={isLoading}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-primary/40"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="btn-hero w-full sm:w-auto px-8 relative overflow-hidden group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Joining...
                    </div>
                  ) : (
                    <div className="flex items-center relative z-10">
                      Join Now
                      <Send className="ml-2 h-5 w-5" />
                    </div>
                  )}
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Join 2,000+ people on their wellness journey. Unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;