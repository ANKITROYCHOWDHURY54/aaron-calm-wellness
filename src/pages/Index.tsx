import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import RetreatHighlight from "@/components/RetreatHighlight";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Play,
  Download,
  BookOpen,
  Video,
  FileText,
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Leaf,
  Mountain,
  TreePine,
  Waves,
  Image as ImageIcon,
} from "lucide-react";
import onlineCoursesImg from "@/assets/online-courses.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import yogaBreathworkImg from "@/assets/yoga-breathwork.jpg";
import mobilityTrainingImg from "@/assets/mobility-training.jpg";
import lifestyleCoachingImg from "@/assets/lifestyle-coaching.jpg";
import corporateWellnessImg from "@/assets/corporate-wellness.jpg";
import retreatBg from "@/assets/retreat-bg.jpg";

const Index = () => {
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

  const { ref: coursesRef, inView: coursesInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: blogRef, inView: blogInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });
  const { ref: contactRef, inView: contactInView } = useInView<HTMLDivElement>({ threshold: 0.1, margin: "0px", once: true });

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-[76px]">
      <Navbar isSinglePage={true} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutPreview />
        </section>
        <section id="services">
          <ServicesPreview />
        </section>
        <section id="retreats">
          <RetreatHighlight />
        </section>

        {/* Courses Section */}
        <section id="courses" ref={coursesRef} className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden min-h-screen">
          {/* Background Elements */}
          <div className="absolute top-6 sm:top-8 md:top-12 lg:top-16 xl:top-20 left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 bg-accent/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-primary/5 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Badge className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium bg-primary/10 text-primary border-primary/20">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Online Learning
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-4">
                Wellness Courses & Guides
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
                Transform your life with our comprehensive wellness courses. Learn at your own pace with expert guidance, 
                practical tools, and a supportive community that's here to help you succeed.
              </p>
            </div>

            {/* Course Categories */}
            <div className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: coursesInView ? '200ms' : undefined }}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4 sm:px-6">
                {[
                  { name: "All Courses", active: true, count: 6 },
                  { name: "Foundations", active: false, count: 2 },
                  { name: "Movement", active: false, count: 2 },
                  { name: "Mindfulness", active: false, count: 2 }
                ].map((category, index) => (
                  <Button
                    key={category.name}
                    variant={category.active ? "default" : "outline"}
                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base ${
                      category.active 
                        ? 'bg-primary text-white shadow-lg hover:shadow-xl' 
                        : 'hover:bg-primary/10 hover:border-primary/30'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0].slice(0, 3)}</span>
                    <Badge variant="secondary" className="ml-1.5 text-xs px-1.5">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Enhanced Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 md:mb-12">
              {[
                {
                  title: "Foundations of Holistic Wellness",
                  type: "8-Week Program",
                  category: "Foundations",
                  price: "$197",
                  originalPrice: "$297",
                  duration: "8 weeks",
                  lessons: 48,
                  students: 500,
                  rating: 4.9,
                  image: onlineCoursesImg,
                  description: "Transform your approach to wellness with this comprehensive program covering mindful movement, breathwork, nutrition, and stress management.",
                  features: ["8 comprehensive modules", "48 video lessons", "Workbook & resources", "Community access", "30-day money-back guarantee"],
                  popular: true,
                  badge: "Most Popular",
                  badgeColor: "from-primary to-accent"
                },
                {
                  title: "Breathwork Fundamentals",
                  type: "Video Course",
                  category: "Mindfulness",
                  price: "$67",
                  duration: "3 hours",
                  lessons: 12,
                  students: 320,
                  rating: 4.8,
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                  description: "Master the basics of conscious breathing with practical techniques you can use anywhere.",
                  features: ["12 guided practices", "Downloadable audio", "Breathing exercises", "Stress relief techniques"],
                  popular: false,
                  badge: "New",
                  badgeColor: "from-green-500 to-emerald-500"
                },
                {
                  title: "Mobility Mastery",
                  type: "Video Course",
                  category: "Movement",
                  price: "$89",
                  duration: "4.5 hours",
                  lessons: 18,
                  students: 280,
                  rating: 4.9,
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                  description: "Comprehensive movement training to prevent injury and improve daily function.",
                  features: ["18 movement sequences", "Injury prevention guide", "Daily routines", "Progress tracking"],
                  popular: false,
                  badge: "Best Seller",
                  badgeColor: "from-orange-500 to-red-500"
                },
                {
                  title: "Mindful Eating Mastery",
                  type: "Video Course",
                  category: "Mindfulness",
                  price: "$79",
                  duration: "2.5 hours",
                  lessons: 15,
                  students: 240,
                  rating: 4.7,
                  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
                  description: "Develop a healthy relationship with food through mindful eating practices and intuitive nutrition.",
                  features: ["15 mindful eating practices", "Nutrition guide", "Meal planning templates", "Mindful cooking videos"],
                  popular: false,
                  badge: "Trending",
                  badgeColor: "from-pink-500 to-rose-500"
                },
                {
                  title: "Stress Management Toolkit",
                  type: "Video Course",
                  category: "Mindfulness",
                  price: "$59",
                  duration: "2 hours",
                  lessons: 10,
                  students: 450,
                  rating: 4.8,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                  description: "Learn practical tools and techniques to manage stress and build resilience in daily life.",
                  features: ["10 stress management tools", "Meditation practices", "Breathing exercises", "Daily check-ins"],
                  popular: false,
                  badge: "Essential",
                  badgeColor: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Morning Routine Revolution",
                  type: "Video Course",
                  category: "Foundations",
                  price: "$47",
                  duration: "1.5 hours",
                  lessons: 8,
                  students: 380,
                  rating: 4.9,
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                  description: "Create a powerful morning routine that sets you up for success and wellness throughout the day.",
                  features: ["8 morning practices", "Routine templates", "Habit tracking", "Success stories"],
                  popular: false,
                  badge: "Quick Win",
                  badgeColor: "from-teal-500 to-cyan-500"
                }
              ].map((course, index) => (
                <div 
                  key={course.title} 
                  className={`relative transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: coursesInView ? `${400 + index * 150}ms` : undefined }}
                >
                  {course.badge && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className={`bg-gradient-to-r ${course.badgeColor} text-white shadow-lg text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5`}>
                        {course.badge}
                      </Badge>
                    </div>
                  )}

                  <Card
                    className={`group relative transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden ${
                      course.popular ? 'ring-2 ring-primary shadow-floating sm:scale-105 mt-6 sm:mt-8' :
                      course.rating >= 4.9 ? 'ring-1 ring-yellow-400/30 shadow-lg' : ''
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Course Type Badge */}
                      <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                        <Badge className="bg-white/95 text-foreground text-xs sm:text-sm ring-1 ring-border/50 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5">
                          {course.type}
                        </Badge>
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4">
                        <div className="text-right">
                          <div className="text-white font-bold text-base sm:text-lg md:text-xl">{course.price}</div>
                          {course.originalPrice && (
                            <div className="text-white/70 text-xs sm:text-sm line-through">{course.originalPrice}</div>
                          )}
                        </div>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white ml-0.5 sm:ml-1" />
                        </div>
                      </div>

                      {/* Course Progress Indicator */}
                      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-white/60 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 relative">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 line-clamp-2">
                            {course.title}
                          </h3>
                          
                          {/* Course Stats */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 gap-1 sm:gap-0">
                            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                <span className="text-xs sm:text-sm md:text-base">{course.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Video className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                <span className="text-xs sm:text-sm md:text-base">{course.lessons}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                              <span className="text-xs sm:text-sm md:text-base">{course.students}</span>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                            <div className="flex items-center space-x-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-xs sm:text-sm md:text-base font-medium">{course.rating}</span>
                            <span className="text-xs sm:text-sm text-muted-foreground hidden md:inline">({course.students} students)</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm md:text-base line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>
                        
                        {/* Course Features */}
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 text-foreground">What's Included:</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {course.features.slice(0, 2).map((feature, featureIndex) => (
                              <li 
                                key={featureIndex} 
                                className="flex items-start text-xs sm:text-sm text-muted-foreground group-hover:translate-x-2 transition-transform duration-300 ease-out"
                                style={{ transitionDelay: `${featureIndex * 100}ms` }}
                              >
                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed text-xs sm:text-sm md:text-base">{feature}</span>
                              </li>
                            ))}
                            {course.features.length > 2 && (
                              <li className="text-xs sm:text-sm text-primary font-medium ml-4 sm:ml-6">
                                +{course.features.length - 2} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Course Level Indicator */}
                        <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                          <div className="flex items-center space-x-1.5">
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                              course.category === 'Foundations' ? 'bg-green-500' :
                              course.category === 'Movement' ? 'bg-blue-500' :
                              'bg-purple-500'
                            }`}></div>
                            <span className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground">{course.category}</span>
                          </div>
                          {course.rating >= 4.9 && (
                            <div className="flex items-center space-x-1">
                              <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-500" />
                              <span className="text-xs sm:text-sm md:text-base font-medium text-yellow-600">Top Rated</span>
                            </div>
                          )}
                        </div>
                        
                        {/* CTA Button */}
                        <Button 
                          className={`w-full group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 text-xs sm:text-sm md:text-base ${
                            course.popular ? 'btn-hero' : 'btn-outline'
                          }`}
                          size="sm"
                        >
                          {course.popular ? 'Enroll Now' : 'Learn More'}
                          <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Course Statistics */}
            <div className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: coursesInView ? '600ms' : undefined }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
                {[
                  { icon: Users, value: "2,000+", label: "Students Enrolled", color: "from-blue-500 to-blue-600" },
                  { icon: Star, value: "4.8", label: "Average Rating", color: "from-yellow-500 to-orange-500" },
                  { icon: Award, value: "95%", label: "Completion Rate", color: "from-green-500 to-emerald-500" },
                  { icon: Clock, value: "24/7", label: "Lifetime Access", color: "from-purple-500 to-pink-500" }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={stat.label}
                      className={`text-center group hover:-translate-y-2 transition-all duration-300 ease-out ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: coursesInView ? `${700 + index * 150}ms` : undefined }}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                      <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight px-1 group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Course Bundle Section */}
            <div className={`transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: coursesInView ? '800ms' : undefined }}>
              <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
                <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-accent/10 text-accent border-accent/20">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
                  Course Bundles
                </Badge>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-2 sm:px-4">
                  Complete Wellness Learning Paths
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                  Save up to 40% when you bundle related courses together for a comprehensive learning experience. 
                  Choose your path and transform your wellness journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-2 sm:px-4">
                {/* Beginner Bundle */}
                <div className={`relative transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: coursesInView ? '1000ms' : undefined }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg text-xs px-3 py-1">
                      Best Value
                    </Badge>
                  </div>

                  <Card className="group relative transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden mt-6">
                    <div className="relative h-72">
                      <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                        alt="Beginner Wellness Bundle"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                          Beginner Friendly
                        </Badge>
                        <h4 className="text-2xl font-bold text-white mb-2">Wellness Foundations Bundle</h4>
                        <p className="text-white/90 text-sm leading-relaxed">Perfect for those starting their wellness journey with essential tools and practices</p>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 lg:p-8 relative">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Pricing */}
                        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl border border-primary/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm text-muted-foreground">Individual Price</span>
                            <span className="font-medium text-base sm:text-lg line-through">$213</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-foreground">Bundle Price</span>
                            <span className="font-bold text-primary text-xl sm:text-2xl">$147</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm text-muted-foreground">You Save</span>
                            <span className="font-bold text-green-600 text-base sm:text-lg">$66 (31%)</span>
                          </div>
                        </div>

                        {/* Bundle Contents */}
                        <div className="mb-4 sm:mb-6">
                          <h5 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-1.5 sm:mr-2" />
                            Bundle Contents:
                          </h5>
                          <ul className="space-y-2 sm:space-y-3">
                            {[
                              { name: "Breathwork Fundamentals", price: "$67" },
                              { name: "Morning Routine Revolution", price: "$47" },
                              { name: "Stress Management Toolkit", price: "$59" }
                            ].map((course, index) => (
                              <li
                                key={course.name}
                                className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-lg group-hover:bg-muted/50 transition-colors duration-300"
                              >
                                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm font-medium truncate">{course.name}</span>
                                </div>
                                <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0 ml-2">{course.price}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full btn-hero group-hover:scale-105 transition-all duration-300" size="lg">
                          Get Foundation Bundle
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </CardContent>
                  </Card>
                </div>

                {/* Advanced Bundle */}
                <div className={`relative transition-all duration-1000 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: coursesInView ? '1150ms' : undefined }}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg text-xs px-3 py-1">
                      Premium
                    </Badge>
                  </div>

                  <Card className="group relative transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl border-border/50 hover:border-primary/30 overflow-hidden mt-6 ring-2 ring-accent/20">
                    <div className="relative h-72">
                      <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                        alt="Advanced Wellness Bundle"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
                          Advanced Level
                        </Badge>
                        <h4 className="text-2xl font-bold text-white mb-2">Complete Wellness Mastery</h4>
                        <p className="text-white/90 text-sm leading-relaxed">Everything you need for comprehensive wellness transformation and mastery</p>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 lg:p-8 relative">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Pricing */}
                        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl sm:rounded-2xl border border-accent/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm text-muted-foreground">Individual Price</span>
                            <span className="font-medium text-base sm:text-lg line-through">$412</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-foreground">Bundle Price</span>
                            <span className="font-bold text-accent text-xl sm:text-2xl">$247</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm text-muted-foreground">You Save</span>
                            <span className="font-bold text-green-600 text-base sm:text-lg">$165 (40%)</span>
                          </div>
                        </div>

                        {/* Bundle Contents */}
                        <div className="mb-4 sm:mb-6">
                          <h5 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent mr-1.5 sm:mr-2" />
                            Bundle Contents:
                          </h5>
                          <ul className="space-y-2 sm:space-y-3">
                            {[
                              { name: "Foundations of Holistic Wellness", price: "$197" },
                              { name: "Mobility Mastery", price: "$89" },
                              { name: "Mindful Eating Mastery", price: "$79" },
                              { name: "Stress Management Toolkit", price: "$59" }
                            ].map((course, index) => (
                              <li
                                key={course.name}
                                className="flex items-center justify-between p-2 sm:p-3 bg-muted/30 rounded-lg group-hover:bg-muted/50 transition-colors duration-300"
                              >
                                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm font-medium truncate">{course.name}</span>
                                </div>
                                <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0 ml-2">{course.price}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white group-hover:scale-105 transition-all duration-300" size="lg">
                          Get Complete Bundle
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="testimonials">
          <TestimonialsCarousel />
        </section>

        {/* Blog Section */}
        <section id="blog" ref={blogRef} className="py-24 bg-gradient-to-br from-muted/20 via-background to-accent/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '4s' }} />

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className={`text-center mb-20 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <BookOpen className="h-4 w-4 mr-2" />
                Wellness Blog
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Latest Wellness Insights
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover practical tips, evidence-based strategies, and inspiring stories
                to support your wellness journey. Stay updated with the latest in holistic health.
              </p>
            </div>

            {/* Featured Post */}
            <div className={`mb-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: blogInView ? '200ms' : undefined }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                      alt="Featured Blog Post"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-white border-primary/30 text-sm px-3 py-1">
                        Featured Post
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">5 Morning Habits That Transform Your Day</h3>
                      <p className="text-white/90 text-sm mb-4">Start your day with intention and energy using these simple yet powerful morning routines.</p>
                      <div className="flex items-center text-white/80 text-sm">
                        <span>Dec 15, 2024</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Featured Article</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Our most popular article this month, packed with actionable morning routine strategies
                      that have helped thousands of people start their day with purpose and energy.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">2.5K+ reads</div>
                        <div className="text-sm text-muted-foreground">This month</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">98% helpful</div>
                        <div className="text-sm text-muted-foreground">Reader feedback</div>
                      </div>
                    </div>
                  </div>

                  <Button className="btn-hero group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "The Science of Breathwork: Why It Works",
                  excerpt: "Explore the physiological benefits of conscious breathing and how it impacts your nervous system.",
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
                  category: "Breathwork",
                  readTime: "7 min read",
                  date: "Dec 12, 2024",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50 dark:bg-blue-950/20"
                },
                {
                  title: "Building Sustainable Wellness Habits",
                  excerpt: "Learn how to create lasting change in your wellness routine without overwhelming yourself.",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
                  category: "Lifestyle",
                  readTime: "6 min read",
                  date: "Dec 10, 2024",
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50 dark:bg-green-950/20"
                },
                {
                  title: "Stress Management for Busy Professionals",
                  excerpt: "Practical strategies to manage stress and maintain balance in a demanding work environment.",
                  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
                  category: "Stress Management",
                  readTime: "8 min read",
                  date: "Dec 8, 2024",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50 dark:bg-purple-950/20"
                },
                {
                  title: "The Power of Mindful Movement",
                  excerpt: "Discover how gentle movement practices can improve both physical and mental well-being.",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
                  category: "Movement",
                  readTime: "6 min read",
                  date: "Dec 5, 2024",
                  color: "from-orange-500 to-orange-600",
                  bgColor: "bg-orange-50 dark:bg-orange-950/20"
                },
                {
                  title: "Creating Your Personal Wellness Vision",
                  excerpt: "A step-by-step guide to defining what wellness means to you and creating a clear path forward.",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
                  category: "Planning",
                  readTime: "9 min read",
                  date: "Dec 3, 2024",
                  color: "from-pink-500 to-pink-600",
                  bgColor: "bg-pink-50 dark:bg-pink-950/20"
                },
                {
                  title: "Nutrition for Mental Clarity and Focus",
                  excerpt: "How the right foods can boost your cognitive function and support mental wellness throughout the day.",
                  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
                  category: "Nutrition",
                  readTime: "7 min read",
                  date: "Dec 1, 2024",
                  color: "from-teal-500 to-teal-600",
                  bgColor: "bg-teal-50 dark:bg-teal-950/20"
                }
              ].map((post, index) => (
                <Card 
                  key={index} 
                  className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-2 ${post.bgColor} ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    transitionDelay: blogInView ? `${400 + index * 150}ms` : undefined,
                    transitionDuration: '1000ms'
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${post.color} text-white border-transparent text-xs px-3 py-1 shadow-lg`}>
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group font-medium">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className={`bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center border border-primary/20 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: blogInView ? '600ms' : undefined }}>
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center ring-1 ring-primary/20 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Wellness Insight</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Get the latest articles, tips, and exclusive content delivered straight to your inbox.
                  Join our community of wellness enthusiasts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                  <Button className="btn-hero h-12 px-8">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Join 2,500+ subscribers. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* View All Posts */}
            <div className={`text-center mt-16 transition-all duration-1000 ${blogInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: blogInView ? '800ms' : undefined }}>
              <Button variant="outline" className="btn-outline group px-8 py-3 text-lg">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

         {/* Contact Section */}
         <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
           {/* Background Elements */}
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
           <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

           <div className="container mx-auto px-4 relative z-10">
             <div className={`text-center mb-16 transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                 <MessageCircle className="h-4 w-4 mr-2" />
                 Get in Touch
               </Badge>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                 Let's Start Your Wellness Journey
               </h2>
               <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                 Ready to transform your health and well-being? I'm here to support you every step of the way.
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
               {/* Form */}
               <div className={`transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                 <Card className="shadow-2xl ring-1 ring-border/50 overflow-hidden bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm">
                   <CardContent className="relative p-8">
                     {/* Form Header */}
                     <div className="mb-8">
                       <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                       <p className="text-muted-foreground">
                         Have questions about my services or want to discuss your wellness goals?
                         I'd love to hear from you.
                       </p>
                     </div>

                     <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label htmlFor="name" className="block text-sm font-semibold text-foreground">
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
                             className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                           />
                         </div>
                         <div className="space-y-2">
                           <label htmlFor="email" className="block text-sm font-semibold text-foreground">
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
                             className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                           />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                             Phone Number
                           </label>
                           <Input
                             id="phone"
                             name="phone"
                             type="tel"
                             value={formData.phone}
                             onChange={handleChange}
                             placeholder="(555) 123-4567"
                             className="h-12 border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50"
                           />
                         </div>
                         <div className="space-y-2">
                           <label htmlFor="service" className="block text-sm font-semibold text-foreground">
                             Service Interest
                           </label>
                           <select
                             id="service"
                             name="service"
                             value={formData.service}
                             onChange={handleChange}
                             className="w-full h-12 px-4 rounded-md border-2 border-border/50 bg-background/50 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                           >
                             <option value="">Select a service</option>
                             <option value="Yoga & Breathwork">Yoga & Breathwork</option>
                             <option value="Mobility & Movement Training">Mobility & Movement Training</option>
                             <option value="Lifestyle Coaching">Lifestyle Coaching</option>
                             <option value="Corporate Wellness Program">Corporate Wellness Program</option>
                             <option value="Wellness Retreat">Wellness Retreat</option>
                             <option value="Workshop or Event">Workshop or Event</option>
                             <option value="Other">Other</option>
                           </select>
                         </div>
                       </div>

                       <div className="space-y-2">
                         <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                           Message *
                         </label>
                         <Textarea
                           id="message"
                           name="message"
                           required
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Tell me about your wellness goals, current challenges, or any questions you have..."
                           className="min-h-[140px] border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50 resize-none"
                         />
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
                             Sending Message...
                           </div>
                         ) : (
                           <div className="flex items-center justify-center relative z-10">
                             Send Message
                             <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                           </div>
                         )}

                         {/* Button Shimmer Effect */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />

                         {/* Ripple Effect */}
                         <div className="absolute inset-0 rounded-lg overflow-hidden">
                           <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full" />
                         </div>
                       </Button>
                     </form>
                   </CardContent>
                 </Card>
               </div>

               {/* Contact Info */}
               <div className={`space-y-6 transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: contactInView ? '200ms' : undefined }}>
                 {/* Contact Methods Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     {
                       icon: Mail,
                       title: "Email",
                       detail: "hello@aaronmurray.com",
                       description: "Send me a message anytime",
                       color: "from-blue-500 to-blue-600",
                       bgColor: "bg-blue-50 dark:bg-blue-950/20"
                     },
                     {
                       icon: Phone,
                       title: "Phone",
                       detail: "(555) 123-4567",
                       description: "Call or text for quick questions",
                       color: "from-green-500 to-green-600",
                       bgColor: "bg-green-50 dark:bg-green-950/20"
                     },
                     {
                       icon: MapPin,
                       title: "Location",
                       detail: "Pacific Northwest",
                       description: "Serving Seattle & surrounding areas",
                       color: "from-purple-500 to-purple-600",
                       bgColor: "bg-purple-50 dark:bg-purple-950/20"
                     },
                     {
                       icon: Clock,
                       title: "Response Time",
                       detail: "Within 24 hours",
                       description: "I respond to all inquiries promptly",
                       color: "from-orange-500 to-orange-600",
                       bgColor: "bg-orange-50 dark:bg-orange-950/20"
                     }
                   ].map((method, index) => {
                     const Icon = method.icon;
                     return (
                       <Card key={method.title} className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ring-1 ring-border/50 hover:ring-primary/30 ${method.bgColor}`}>
                         <CardContent className="p-6 text-center">
                           <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center ring-1 ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                             <Icon className="h-8 w-8 text-white" />
                           </div>
                           <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{method.title}</h3>
                           <div className="text-base font-semibold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">{method.detail}</div>
                           <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                         </CardContent>
                       </Card>
                     );
                   })}
                 </div>

                 {/* Additional Info Card */}
                 <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 ring-1 ring-primary/10">
                   <CardContent className="p-6">
                     <div className="text-center">
                       <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                         <Heart className="h-6 w-6 text-primary" />
                       </div>
                       <h3 className="text-lg font-bold mb-2">What to Expect</h3>
                       <p className="text-sm text-muted-foreground mb-4">
                         I'm committed to providing you with the best possible wellness experience.
                       </p>
                       <ul className="space-y-2 text-sm text-muted-foreground">
                         <li className="flex items-center justify-center space-x-2">
                           <CheckCircle className="h-4 w-4 text-primary" />
                           <span>Response within 24 hours</span>
                         </li>
                         <li className="flex items-center justify-center space-x-2">
                           <CheckCircle className="h-4 w-4 text-primary" />
                           <span>Free 15-minute discovery call</span>
                         </li>
                         <li className="flex items-center justify-center space-x-2">
                           <CheckCircle className="h-4 w-4 text-primary" />
                           <span>Personalized recommendations</span>
                         </li>
                       </ul>
                     </div>
                   </CardContent>
                 </Card>
               </div>
             </div>

           </div>
         </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
