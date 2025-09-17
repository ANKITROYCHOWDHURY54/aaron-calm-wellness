import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Target, Compass, Leaf } from "lucide-react";
import aaronPortrait from "@/assets/aaron-portrait.jpg";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">About Aaron</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              I’m Aaron S. Murray
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
              A Holistic Health & Mobility Coach, father, and lifelong learner. Over the past 10+ years, I’ve guided busy professionals, parents, and teams to build wellness practices that fit real life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-floating">
                <img
                  src={aaronPortrait}
                  alt="Aaron S. Murray"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
              
              {/* Stats */}
              <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
                <Card className="shadow-card">
                  <CardContent className="p-4 text-center">
                    <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in stagger-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bio</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    I’m Aaron S. Murray — a Holistic Health & Mobility Coach, father, and lifelong learner. Over the past 10+ years, I’ve guided busy professionals, parents, and teams to build wellness practices that fit real life.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My own journey into wellness began when I struggled with stress and recurring injuries. I discovered that sustainable habits, mobility, breathwork, and holistic coaching could completely shift not only my body, but my mindset and lifestyle. Today, I share that same path forward with others.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My mission is to help you move better, breathe deeper, and live with clarity — so you can thrive at work, at home, and within your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of my work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className={`text-center hover-lift animate-fade-in stagger-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Training & Certifications</h2>
              <p className="text-xl text-muted-foreground">
                Committed to ongoing education and professional development in holistic wellness.
              </p>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Beyond the Practice</h2>
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
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