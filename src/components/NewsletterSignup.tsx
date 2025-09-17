import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-floating border-0 bg-gradient-to-br from-white to-muted/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Welcome to the Community!</h3>
              <p className="text-muted-foreground">
                Thank you for joining our wellness journey. You'll receive mindful insights, 
                practical tips, and exclusive retreat updates directly in your inbox.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-floating border border-white/20 bg-gradient-to-br from-white to-muted/30 animate-fade-in">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Join my wellness community</h3>
              <p className="text-lg text-muted-foreground">
                Get tips, guides, and retreat updates straight to your inbox.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  <div key={benefit.title} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  disabled={isLoading}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="btn-hero px-8"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Joining...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Join Now
                      <Send className="ml-2 h-5 w-5" />
                    </div>
                  )}
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