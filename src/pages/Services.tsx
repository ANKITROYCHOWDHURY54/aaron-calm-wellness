import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import heroBg from "@/assets/hero-bg.jpg";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl opacity-60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            <Badge variant="secondary" className={`mb-4 sm:mb-6 bg-white/20 text-white border-white/30 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Services</Badge>
            <h1 className={`text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-2 sm:mb-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Services</h1>
            <div className={`mx-auto h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            <p className={`text-base sm:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Yoga & Breathwork, Mobility & Injury Prevention, Lifestyle Coaching, and Corporate Wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? `${120 + index * 80}ms` : undefined }}>
                  <div className="relative overflow-hidden rounded-2xl shadow-floating group ring-1 ring-border/50 [transform-style:preserve-3d] transition-all duration-500 ease-out hover:-rotate-[0.6deg] hover:shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover group-hover:scale-[1.06] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 -top-1 h-20 bg-gradient-to-b from-white/25 to-transparent" />
                    
                    {/* Floating Info */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <Badge variant="secondary" className="bg-white/90 text-foreground shadow-sm ring-1 ring-border/50 text-xs sm:text-sm">
                        {service.subtitle}
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                      <div className="bg-white/90 rounded-xl p-3 sm:p-4 text-center shadow-card ring-1 ring-border/50">
                        <div className="font-bold text-base sm:text-lg text-primary">{service.price}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">per session</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''} transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: inView ? `${180 + index * 80}ms` : undefined }}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{service.title}</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    
                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex items-center space-x-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 p-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-xs sm:text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 p-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-xs sm:text-sm font-medium">{service.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={benefit} className="group/item flex items-start space-x-3 rounded-md p-2 transition-colors hover:bg-primary/5">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
                          <span className="text-sm transition-colors group-hover/item:text-foreground" style={{ transitionDelay: `${i * 40}ms` }}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="btn-hero w-full sm:w-auto group relative overflow-hidden">
                        Book a Session
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto relative overflow-hidden hover:border-primary/40">
                      Learn More
                      <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Formats */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Flexible Formats</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the format that works best for your schedule, preferences, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
            ].map((format, index) => (
              <Card key={format.title} className={`text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`} style={{ transitionDelay: inView ? `${100 + index * 80}ms` : undefined }}>
                <CardContent className="p-5 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{format.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{format.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{format.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Begin?</h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Take the first step towards a more balanced, healthier you. Let's discuss 
              which service is the perfect fit for your goals and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero w-full sm:w-auto group relative overflow-hidden">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
                </Button>
              </Link>
              <Link to="/retreats">
                <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto relative overflow-hidden hover:border-primary/40">
                  Explore Retreats
                  <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
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