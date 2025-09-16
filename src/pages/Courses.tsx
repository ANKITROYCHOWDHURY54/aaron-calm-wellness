import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Play, 
  Download, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Video,
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import onlineCoursesImg from "@/assets/online-courses.jpg";

const Courses = () => {
  const featuredCourse = {
    title: "Foundations of Holistic Wellness",
    subtitle: "8-Week Comprehensive Program",
    price: "$197",
    originalPrice: "$297",
    duration: "8 weeks",
    modules: 12,
    lessons: 48,
    rating: 4.9,
    students: 500,
    image: onlineCoursesImg,
    description: "Transform your approach to wellness with this comprehensive 8-week program covering mindful movement, breathwork, nutrition, stress management, and sustainable habit formation.",
    outcomes: [
      "Establish a personalized wellness routine",
      "Master breathwork and mindfulness techniques",
      "Create sustainable nutrition habits",
      "Develop stress management strategies",
      "Build a supportive wellness community",
      "Design your ideal lifestyle framework"
    ]
  };

  const courses = [
    {
      id: "breathwork-fundamentals",
      title: "Breathwork Fundamentals",
      type: "Video Course",
      price: "$67",
      duration: "3 hours",
      lessons: 12,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      description: "Master the basics of conscious breathing with practical techniques you can use anywhere.",
      level: "Beginner"
    },
    {
      id: "mobility-mastery",
      title: "Mobility Mastery",
      type: "Video Course",
      price: "$89",
      duration: "4.5 hours",
      lessons: 18,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Comprehensive movement training to prevent injury and improve daily function.",
      level: "All Levels"
    },
    {
      id: "stress-resilience",
      title: "Stress Resilience Toolkit",
      type: "Workshop Series",
      price: "$127",
      duration: "6 hours",
      lessons: 8,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
      description: "Evidence-based strategies for managing stress and building mental resilience.",
      level: "Intermediate"
    }
  ];

  const guides = [
    {
      title: "7-Day Morning Routine Reset",
      type: "PDF Guide",
      price: "Free",
      pages: 24,
      downloads: "2.5k+",
      description: "Start your day with intention and energy with this comprehensive morning routine guide."
    },
    {
      title: "Desk Warrior's Wellness Kit",
      type: "Digital Bundle",
      price: "$29",
      pages: 45,
      downloads: "1.2k+",
      description: "Essential tools and exercises for maintaining wellness while working at a desk."
    },
    {
      title: "Mindful Nutrition Workbook",
      type: "Interactive PDF",
      price: "$19",
      pages: 32,
      downloads: "850+",
      description: "Develop a healthy relationship with food through mindful eating practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Online Learning</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Wellness{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Courses & Guides
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
              Learn at your own pace with comprehensive courses and practical guides 
              designed to support your wellness journey wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-floating border-0 bg-gradient-to-br from-white to-muted/20 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[500px]">
                  <img
                    src={featuredCourse.image}
                    alt={featuredCourse.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      Most Popular
                    </Badge>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-6 left-6">
                    <div className="glass text-white p-4 rounded-xl">
                      <div className="text-2xl font-bold">{featuredCourse.price}</div>
                      <div className="text-sm line-through opacity-75">{featuredCourse.originalPrice}</div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {featuredCourse.title}
                      </h2>
                      <p className="text-xl text-primary font-medium mb-4">
                        {featuredCourse.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {featuredCourse.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{featuredCourse.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{featuredCourse.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{featuredCourse.rating} ({featuredCourse.students} students)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Lifetime access</span>
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="font-semibold mb-3">What You'll Learn:</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {featuredCourse.outcomes.slice(0, 4).map((outcome) => (
                          <div key={outcome} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" className="btn-hero flex-1 group">
                        Enroll Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button size="lg" variant="outline" className="btn-outline">
                        Preview Course
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Library */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Course Library</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized courses designed to deepen your practice and knowledge in specific areas of wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className={`overflow-hidden hover-lift animate-fade-in stagger-${index + 1}`}>
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground text-xs">
                      {course.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="text-white font-bold text-lg">{course.price}</div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground text-xs">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Video className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  <Button className="w-full btn-outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Downloadable Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical resources you can download and use immediately to enhance your wellness practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={guide.title} className={`hover-lift animate-fade-in stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <Badge variant="secondary" className="mb-2">{guide.type}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{guide.price}</div>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{guide.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{guide.downloads}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-center mb-6">{guide.description}</p>
                  
                  <Button className="w-full btn-hero">
                    <Download className="mr-2 h-4 w-4" />
                    {guide.price === "Free" ? "Download Free" : "Purchase & Download"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Your Learning Path</h2>
              <p className="text-xl text-muted-foreground">
                Not sure where to start? Follow this recommended path for a comprehensive wellness education.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Start with Foundations",
                  description: "Begin with the free morning routine guide and breathwork fundamentals",
                  resources: ["7-Day Morning Routine Reset", "Breathwork Fundamentals"]
                },
                {
                  step: 2,
                  title: "Build Your Practice", 
                  description: "Develop movement and resilience skills with targeted courses",
                  resources: ["Mobility Mastery", "Stress Resilience Toolkit"]
                },
                {
                  step: 3,
                  title: "Master Integration",
                  description: "Bring it all together with the comprehensive wellness program",
                  resources: ["Foundations of Holistic Wellness", "Mindful Nutrition Workbook"]
                }
              ].map((step) => (
                <Card key={step.step} className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.resources.map((resource) => (
                            <Badge key={resource} variant="outline">
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Start Learning Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Invest in your wellness education and gain the knowledge and tools 
              to create lasting positive change in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-hero group">
                Browse All Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-outline">
                  Get Personal Guidance
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

export default Courses;