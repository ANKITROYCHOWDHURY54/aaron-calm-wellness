import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Target, Compass, Leaf } from "lucide-react";
import aaronPortrait from "@/assets/aaron-portrait.jpg";
import { useInView } from "@/hooks/useInView";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "Building genuine relationships based on trust, empathy, and mutual respect."
    },
    {
      icon: Compass,
      title: "Holistic Approach",
      description: "Addressing mind, body, and spirit for complete well-being and balance."
    },
    {
      icon: Target,
      title: "Practical Solutions",
      description: "Providing realistic strategies that fit into real-world, busy lifestyles."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Creating supportive environments where growth and healing can flourish."
    }
  ];

  const certifications = [
    "Certified Yoga Instructor (RYT-500)",
    "Breathwork Facilitator",
    "Mobility & Movement Specialist",
    "Wellness Coaching Certification",
    "Mindfulness-Based Stress Reduction"
  ];

  const { ref: pageRef, inView } = useInView<HTMLDivElement>({ threshold: 0, margin: "0px", once: true });
  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: bioRef, inView: bioInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: valuesRef, inView: valuesInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: credentialsRef, inView: credentialsInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: personalRef, inView: personalInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = portraitRef.current;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (+py * -6).toFixed(2);
      const rotateY = (+px * 6).toFixed(2);
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const reset = () => {
      el.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  useEffect(() => {
    const section = heroSectionRef.current;
    if (!section) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background pt-16 md:pt-[76px]">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden min-h-[60vh] md:min-h-[60vh] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl opacity-50 transition-transform duration-300" style={{ transform: `translate3d(${(mousePos.x - 0.5) * 12}px, ${(mousePos.y - 0.5) * 12}px, 0)` }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl opacity-60 transition-transform duration-300" style={{ transform: `translate3d(${(0.5 - mousePos.x) * 12}px, ${(0.5 - mousePos.y) * 12}px, 0)` }} />
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            <Badge variant="secondary" className={`mb-4 sm:mb-6 bg-white/20 text-white border-white/30 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>About Aaron</Badge>
            <h1 className={`text-3xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-2 sm:mb-3 mx-auto max-w-[18ch] transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: heroInView ? '80ms' : undefined }}>
              I'm Aaron S. Murray
            </h1>
            <div className={`mx-auto h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ${heroInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: heroInView ? '120ms' : undefined }} />
            <p className={`text-base sm:text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: heroInView ? '160ms' : undefined }}>
              A Holistic Health & Mobility Coach, father, and lifelong learner. Over the past 10+ years, I've guided busy professionals, parents, and teams to build wellness practices that fit real life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={bioRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className={`relative transition-all duration-1000 ${bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: bioInView ? '220ms' : undefined }}>
              <div ref={portraitRef} className="relative overflow-hidden rounded-2xl shadow-floating ring-1 ring-border/50 group [transform-style:preserve-3d] transition-transform duration-300 ease-out">
                <img
                  src={aaronPortrait}
                  alt="Aaron S. Murray"
                  className="w-full h-[360px] sm:h-[480px] lg:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:translate-y-[-3px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-white/20 to-transparent opacity-70" />
                <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_50%_10%,theme(colors.primary/40),transparent)]" />
              </div>
              
              {/* Stats - desktop overlay */}
              <div className="hidden sm:grid absolute -bottom-6 -right-6 grid-cols-2 gap-3 sm:gap-4">
                <Card className="shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Clients</div>
                  </CardContent>
                </Card>
              </div>
              {/* Stats - mobile inline */}
              <div className="sm:hidden mt-4 grid grid-cols-2 gap-3">
                <Card className="shadow-card">
                  <CardContent className="p-3 text-center">
                    <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-3 text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: bioInView ? '280ms' : undefined }}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Bio</h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                  <p>
                    I’m Aaron S. Murray — a Holistic Health & Mobility Coach, father, and lifelong learner. Over the past 10+ years, I’ve guided busy professionals, parents, and teams to build wellness practices that fit real life.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Story</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  My own journey into wellness began when I struggled with stress and recurring injuries. I discovered that sustainable habits, mobility, breathwork, and holistic coaching could completely shift not only my body, but my mindset and lifestyle. Today, I share that same path forward with others.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Mission</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  My mission is to help you move better, breathe deeper, and live with clarity — so you can thrive at work, at home, and within your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="relative py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Core Values</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of my work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className={`group text-center transition-all duration-700 ease-out ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-1 hover:shadow-lg`} style={{ transitionDelay: valuesInView ? `${100 + index * 80}ms` : undefined }}>
                  <CardContent className="p-5 sm:p-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 relative inline-block">
                      {value.title}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section ref={credentialsRef} className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${credentialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Training & Certifications</h2>
              <p className="text-base sm:text-xl text-muted-foreground">
                Committed to ongoing education and professional development in holistic wellness.
              </p>
            </div>

            <Card className={`shadow-card transition-all duration-1000 ${credentialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-2xl`} style={{ transitionDelay: credentialsInView ? '200ms' : undefined }}>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {certifications.map((cert, index) => (
                    <div key={cert} className={`flex items-center space-x-3 transition-all duration-1000 ${credentialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: credentialsInView ? `${300 + index * 100}ms` : undefined }}>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ring-1 ring-primary/20">
                        <Leaf className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section ref={personalRef} className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${personalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Beyond the Practice</h2>
            <div className={`text-base sm:text-lg text-muted-foreground space-y-4 sm:space-y-6 leading-relaxed transition-all duration-1000 ${personalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: personalInView ? '200ms' : undefined }}>
              <p>
                When I'm not guiding clients or leading retreats, you'll find me exploring 
                the Pacific Northwest trails with my family, experimenting with new healthy 
                recipes, or curled up with a good book on mindfulness or human potential.
              </p>
              <p>
                I believe that wellness professionals should practice what they teach—not 
                perfectly, but authentically. I'm here to walk this path alongside you, 
                sharing both the insights I've gained and the lessons I'm still learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;