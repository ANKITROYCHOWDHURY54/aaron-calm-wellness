import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  Users,
  Heart
} from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission - Replace with actual form handling
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@aaronmurray.com",
      description: "Send me a message anytime",
      href: "mailto:hello@aaronmurray.com"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "(555) 123-4567",
      description: "Call or text for quick questions",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Pacific Northwest",
      description: "Serving Seattle & surrounding areas",
      href: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Response Time",
      detail: "Within 24 hours",
      description: "I respond to all inquiries promptly",
      href: null
    }
  ];

  const services = [
    "Yoga & Breathwork",
    "Mobility & Movement Training",
    "Lifestyle Coaching",
    "Corporate Wellness Program",
    "Wellness Retreat",
    "Workshop or Event",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Let's Start Your{" "}
              <span className="text-accent-light">
                Wellness Journey
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in stagger-1">
              Ready to transform your health and well-being? I'm here to support you 
              every step of the way. Reach out and let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className={`text-center hover-lift animate-fade-in stagger-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-lg font-medium text-primary hover:text-primary/80 transition-colors block mb-2"
                      >
                        {method.detail}
                      </a>
                    ) : (
                      <div className="text-lg font-medium text-primary mb-2">{method.detail}</div>
                    )}
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Send a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours. 
                  The more details you share, the better I can tailor my response to your needs.
                </p>
              </div>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your wellness goals, current challenges, or any questions you have..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-hero"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8 animate-fade-in stagger-2">
              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button className="w-full btn-hero justify-start" asChild>
                      <a href="mailto:hello@aaronmurray.com">
                        <Mail className="mr-3 h-5 w-5" />
                        Send Email Directly
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full btn-outline justify-start" asChild>
                      <a href="tel:+15551234567">
                        <Phone className="mr-3 h-5 w-5" />
                        Call or Text
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full btn-outline justify-start" asChild>
                      <a href="/retreats">
                        <Calendar className="mr-3 h-5 w-5" />
                        Book a Retreat
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Frequently Asked</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <MessageCircle className="h-4 w-4 text-primary mr-2" />
                        How quickly will you respond?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        I respond to all inquiries within 24 hours, usually much sooner.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        Do you offer free consultations?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! I offer a complimentary 15-minute call to discuss your goals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Heart className="h-4 w-4 text-primary mr-2" />
                        What if I'm not sure which service is right?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        That's what I'm here for! Let's talk and find the perfect fit together.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">
                    "Aaron's compassionate approach made it easy to open up about my wellness goals. 
                    He truly listens and creates personalized solutions."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah J."
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">Sarah J.</div>
                      <div className="text-sm text-muted-foreground">Marketing Executive</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;