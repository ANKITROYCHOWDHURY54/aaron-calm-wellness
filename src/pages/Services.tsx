import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react";
import yogaBreathworkImg from "@/assets/yoga-breathwork.jpg";
import mobilityTrainingImg from "@/assets/mobility-training.jpg";
import lifestyleCoachingImg from "@/assets/lifestyle-coaching.jpg";
import corporateWellnessImg from "@/assets/corporate-wellness.jpg";

const Services = () => {
  const services = [
    {
      id: "yoga-breathwork",
      title: "Yoga & Breathwork",
      subtitle: "Daily practices to unlock energy and calm",
      image: yogaBreathworkImg,
      price: "From $85",
      duration: "60-90 min",
      groupSize: "1-12 people",
      description: "Calming and energizing practices that improve flexibility, focus, and emotional balance. Available as 1:1 coaching or group sessions.",
      benefits: [
        "Stress reduction and anxiety relief",
        "Improved flexibility and strength",
        "Enhanced mental clarity and focus",
        "Better sleep and relaxation"
      ],
      includes: [
        "Personalized practice assessment",
        "Guided movement sequences",
        "Breathwork techniques",
        "Meditation and mindfulness"
      ],
      formats: [
        "Private 1-on-1 Sessions",
        "Small Group Classes (2-6 people)",
        "Workshop Series (4-week programs)"
      ]
    },
    {
      id: "mobility-movement",
      title: "Mobility & Injury Prevention",
      subtitle: "Restore movement and reduce pain",
      image: mobilityTrainingImg,
      price: "From $95",
      duration: "45-75 min",
      groupSize: "1-8 people",
      description: "Restore your range of motion, prevent injuries, and reduce pain through simple, science-backed mobility routines.",
      benefits: [
        "Pain reduction and prevention",
        "Improved posture and alignment",
        "Increased range of motion",
        "Better balance and coordination"
      ],
      includes: [
        "Movement assessment and analysis",
        "Personalized mobility program",
        "Corrective exercise techniques",
        "Progress monitoring and adjustments"
      ],
      formats: [
        "Private Assessment & Training",
        "Semi-Private Sessions (2-4 people)",
        "Workplace Ergonomic Consultations"
      ]
    },
    {
      id: "lifestyle-coaching",
      title: "Lifestyle Coaching",
      subtitle: "Sustainable habits for a balanced life",
      image: lifestyleCoachingImg,
      price: "From $125",
      duration: "60-90 min",
      groupSize: "1-on-1",
      description: "Practical coaching that helps you create sustainable wellness habits in nutrition, sleep, stress management, and daily routines.",
      benefits: [
        "Sustainable habit formation",
        "Improved energy and vitality",
        "Better work-life balance",
        "Enhanced mental resilience"
      ],
      includes: [
        "Comprehensive wellness assessment",
        "Personalized action plans",
        "Sleep optimization strategies",
        "Stress management techniques"
      ],
      formats: [
        "Individual Coaching Sessions",
        "3-Month Transformation Programs",
        "Maintenance & Support Packages"
      ]
    },
    {
      id: "corporate-wellness",
      title: "Corporate Wellness",
      subtitle: "Team-focused retreats and workshops",
      image: corporateWellnessImg,
      price: "Custom Pricing",
      duration: "30min-Full Day",
      groupSize: "5-50+ people",
      description: "Workshops and retreats designed to recharge leaders and teams, improving productivity, resilience, and workplace culture.",
      benefits: [
        "Reduced employee stress and burnout",
        "Improved team morale and collaboration",
        "Increased productivity and focus",
        "Enhanced company culture"
      ],
      includes: [
        "Workplace wellness assessment",
        "Customized program design",
        "On-site workshops and sessions",
        "Progress tracking and reporting"
      ],
      formats: [
        "Lunch & Learn Sessions",
        "Half-Day Wellness Workshops",
        "Team Building Retreats"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
              Yoga & Breathwork, Mobility & Injury Prevention, Lifestyle Coaching, and Corporate Wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-floating group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    
                    {/* Floating Info */}
                    <div className="absolute top-6 left-6">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {service.subtitle}
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/90 rounded-xl p-4 text-center">
                        <div className="font-bold text-lg text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">per session</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in stagger-2`}>
                  <div>
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{service.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.slice(0, 4).map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="btn-hero group">
                        Book a Session
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="btn-outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Formats */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Flexible Formats</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the format that works best for your schedule, preferences, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Private Sessions",
                description: "One-on-one personalized attention",
                icon: "👤"
              },
              {
                title: "Small Groups",
                description: "Intimate group settings with friends",
                icon: "👥"
              },
              {
                title: "Workshops",
                description: "Deep-dive learning experiences",
                icon: "🎓"
              },
              {
                title: "Corporate Programs",
                description: "Workplace wellness solutions",
                icon: "🏢"
              }
            ].map((format) => (
              <Card key={format.title} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                  <p className="text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards a more balanced, healthier you. Let's discuss 
              which service is the perfect fit for your goals and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/retreats">
                <Button size="lg" variant="outline" className="btn-outline">
                  Explore Retreats
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

export default Services;