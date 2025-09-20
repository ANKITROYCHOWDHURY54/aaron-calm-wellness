import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
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

  const { ref: pageRef, inView } = useInView<HTMLDivElement>({ threshold: 0, margin: "0px", once: true });
  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: methodsRef, inView: methodsInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: formRef, inView: formInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-16 md:pt-[76px]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-20 relative overflow-hidden min-h-[60vh] md:min-h-[60vh] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/50 to-accent/60" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className={`mb-4 sm:mb-6 bg-white/20 text-white border-white/30 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Get in Touch
            </Badge>
            <h1 className={`text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-2 sm:mb-3 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: heroInView ? '80ms' : undefined }}>
              Let's Start Your{" "}
              <span className="text-accent-light">
                Wellness Journey
              </span>
            </h1>
            <div className={`mx-auto h-1 w-20 sm:w-24 rounded-full bg-white/70 transition-all duration-1000 ${heroInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: heroInView ? '120ms' : undefined }} />
            <p className={`text-base sm:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: heroInView ? '160ms' : undefined }}>
              Ready to transform your health and well-being? I'm here to support you 
              every step of the way. Reach out and let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={methodsRef} className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className={`text-center transition-all duration-700 ease-out ${methodsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg ring-1 ring-border/50`} style={{ transitionDelay: methodsInView ? `${80 + index * 80}ms` : undefined }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 transition-transform duration-300 hover:scale-110">
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
      <section ref={formRef} className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className={`transition-all duration-1000 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Send a Message</h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours. 
                  The more details you share, the better I can tailor my response to your needs.
                </p>
              </div>

              <Card className="shadow-card ring-1 ring-border/50 overflow-hidden">
                <CardContent className="relative p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-x-0 -top-1 h-16 bg-gradient-to-b from-white/30 to-transparent opacity-70" />
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                          className="h-12 focus-visible:ring-2 focus-visible:ring-primary/40"
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
                          className="h-12 focus-visible:ring-2 focus-visible:ring-primary/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                          className="h-12 focus-visible:ring-2 focus-visible:ring-primary/40"
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
                          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus-visible:ring-2 focus-visible:ring-primary/40"
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
                        className="min-h-[120px] focus-visible:ring-2 focus-visible:ring-primary/40"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-hero relative overflow-hidden group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center relative z-10">
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </div>
                      )}
                      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: formInView ? '200ms' : undefined }}>
              {/* Quick Actions */}
              <Card className="shadow-card ring-1 ring-border/50 transition-all duration-500 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className="pointer-events-none absolute inset-x-0 -top-1 h-12 bg-gradient-to-b from-white/30 to-transparent opacity-70" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button className="w-full btn-hero justify-start relative overflow-hidden group" asChild>
                      <a href="mailto:hello@aaronmurray.com">
                        <Mail className="mr-3 h-5 w-5" />
                        Send Email Directly
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full btn-outline justify-start relative overflow-hidden hover:border-primary/40" asChild>
                      <a href="tel:+15551234567">
                        <Phone className="mr-3 h-5 w-5" />
                        Call or Text
                        <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full btn-outline justify-start relative overflow-hidden hover:border-primary/40" asChild>
                      <a href="/retreats">
                        <Calendar className="mr-3 h-5 w-5" />
                        Book a Retreat
                        <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-card ring-1 ring-border/50 transition-all duration-500 hover:shadow-lg">
                <CardContent className="relative p-6">
                  <div className="pointer-events-none absolute inset-x-0 -top-1 h-12 bg-gradient-to-b from-white/30 to-transparent opacity-70" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Frequently Asked</h3>
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
              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5 ring-1 ring-border/50">
                <CardContent className="relative p-6">
                  <div className="pointer-events-none absolute inset-x-0 -top-1 h-12 bg-gradient-to-b from-white/30 to-transparent opacity-70" />
                  <blockquote className="text-lg italic mb-4">
                    "Aaron's compassionate approach made it easy to open up about my wellness goals. 
                    He truly listens and creates personalized solutions."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah J."
                      className="w-10 h-10 rounded-full ring-2 ring-white/60"
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