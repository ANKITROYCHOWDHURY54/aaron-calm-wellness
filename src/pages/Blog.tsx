import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import image1 from "@/assets/featured-wellness-habits.jpg"
import image2 from "@/assets/breathwork-guide.jpg"
import image3 from "@/assets/desk-mobility.jpg"
import image4 from "@/assets/mindful-eating.jpg"
import image5 from "@/assets/morning-routine.jpg"
import image6 from "@/assets/stress-management.jpg"
import image7 from "@/assets/small-space-movement.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Tag,
  Search,
  ArrowRight,
  BookOpen,
  Heart,
  Leaf,
  User
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "mindfulness", name: "Mindfulness", count: 8 },
    { id: "movement", name: "Movement", count: 6 },
    { id: "nutrition", name: "Nutrition", count: 5 },
    { id: "lifestyle", name: "Lifestyle", count: 5 }
  ];

  const featuredPost = {
    id: "sustainable-wellness-habits",
    title: "Building Sustainable Wellness Habits That Actually Stick",
    excerpt: "Discover the science-backed approach to creating lasting wellness habits that integrate seamlessly into your busy life, without overwhelming your schedule or energy.",
    author: "Aaron S. Murray",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "lifestyle",
    image: image1,
    featured: true
  };

  const blogPosts = [
    {
      id: "breathwork-beginners-guide",
      title: "The Complete Beginner's Guide to Breathwork",
      excerpt: "Learn fundamental breathing techniques that can transform your stress levels, energy, and overall well-being in just minutes a day.",
      author: "Aaron S. Murray",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "mindfulness",
      image: image2
    },
    {
      id: "desk-mobility-routine",
      title: "5-Minute Desk Mobility Routine for Remote Workers",
      excerpt: "Combat the effects of prolonged sitting with this quick and effective mobility routine designed specifically for desk workers.",
      author: "Aaron S. Murray", 
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "movement",
      image: image3
    },
    {
      id: "mindful-eating-principles",
      title: "Mindful Eating: Transform Your Relationship with Food",
      excerpt: "Discover how mindful eating practices can help you develop a healthier, more intuitive relationship with food and eating.",
      author: "Aaron S. Murray",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "nutrition",
      image: image4
    },
    {
      id: "morning-routine-energy",
      title: "Morning Routines That Actually Give You Energy",
      excerpt: "Science-backed morning practices that set you up for sustained energy and focus throughout your day, without requiring hours of time.",
      author: "Aaron S. Murray",
      date: "February 28, 2024", 
      readTime: "5 min read",
      category: "lifestyle",
      image: image5
    },
    {
      id: "stress-management-techniques",
      title: "Evidence-Based Stress Management for Busy Professionals",
      excerpt: "Practical stress management techniques that busy professionals can implement immediately for better mental health and productivity.",
      author: "Aaron S. Murray",
      date: "February 25, 2024",
      readTime: "9 min read", 
      category: "mindfulness",
      image: image6
    },
    {
      id: "movement-small-spaces",
      title: "Effective Movement Practices for Small Spaces",
      excerpt: "Get a full-body workout and maintain your mobility even in the smallest living spaces with these creative movement solutions.",
      author: "Aaron S. Murray",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "movement", 
      image: image7
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mindfulness": return Heart;
      case "movement": return User;
      case "nutrition": return Leaf;
      case "lifestyle": return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Wellness Blog</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Insights for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Holistic Living
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
              Practical wisdom, evidence-based insights, and real-world strategies 
              to support your wellness journey and help you thrive in daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden shadow-floating border-0 bg-gradient-to-br from-white to-muted/20 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-white/90 text-foreground capitalize">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <Button size="lg" className="btn-hero group">
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <Card key={post.id} className={`overflow-hidden hover-lift animate-fade-in stagger-${index + 1}`}>
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2 bg-white/90 rounded-full px-3 py-1">
                          <CategoryIcon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium capitalize">{post.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full btn-outline group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or selected category.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="btn-outline">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-floating border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Never Miss an Article</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Get the latest wellness insights and practical tips delivered 
                  directly to your inbox every week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 h-12"
                  />
                  <Button className="btn-hero">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Join 2,000+ readers. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;