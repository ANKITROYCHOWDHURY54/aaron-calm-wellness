import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isSinglePage?: boolean;
}

const Navbar = ({ isSinglePage = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (isSinglePage) {
        // Determine which section is currently in view
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 100; // Adding offset for better detection

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute("id") || "";

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    const handleHashChange = () => {
      if (isSinglePage && window.location.hash) {
        const sectionId = window.location.hash.replace('#', '');
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
          const navbarHeight = 100;
          const targetPosition = targetSection.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    
    // Handle initial hash if present
    if (isSinglePage && window.location.hash) {
      setTimeout(handleHashChange, 100); // Small delay to ensure DOM is ready
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isSinglePage]);

  const navLinks = [
    { href: isSinglePage ? "#home" : "/", label: "Home" },
    { href: isSinglePage ? "#about" : "/about", label: "About" },
    { href: isSinglePage ? "#services" : "/services", label: "Services" },
    { href: isSinglePage ? "#retreats" : "/retreats", label: "Retreats" },
    { href: isSinglePage ? "#courses" : "/courses", label: "Courses" },
    { href: isSinglePage ? "#testimonials" : "/testimonials", label: "Testimonials" },
    { href: isSinglePage ? "#blog" : "/blog", label: "Blog" },
    { href: isSinglePage ? "#contact" : "/contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isSinglePage) {
      e.preventDefault();
      
      // Extract the section ID from the href (remove the #)
      const sectionId = href.replace('#', '');
      
      // Update the URL hash
      window.history.pushState(null, '', href);
      
      // Find the target section
      const targetSection = document.getElementById(sectionId);
      
      if (targetSection) {
        // Calculate the offset to account for the fixed navbar
        const navbarHeight = 100; // Increased to account for navbar height
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        // Smooth scroll to the target section
        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (isSinglePage) {
      return href === `#${activeSection}`;
    }
    return false; // We don't need this for single page
  };
  
  const isHome = activeSection === "home";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-navbar-slide-down ${
        isHome
          ? (isScrolled 
              ? "glass shadow-card border-b border-white/20" 
              : "bg-primary/25 backdrop-blur-lg border-b border-white/15")
          : "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to={isSinglePage ? "#home" : "/"} 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 group logo-container"
          >
            <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Leaf className="h-6 w-6 text-primary logo-icon animate-logo-float" />
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">Aaron S. Murray</h1>
              <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">Holistic Health Coach</p>
            </div>
          </Link>

          {/* Desktop Navigation (show on large screens and up) */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium nav-link-hover animate-nav-link ${
                    isActive(link.href) 
                      ? "bg-primary text-primary-foreground shadow-md animate-pulse-glow" 
                      : "bg-background/80 text-foreground hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

          {/* CTA Button */}
          <div className="hidden lg:block animate-nav-link" style={{ animationDelay: '800ms' }}>
            <Link 
              to={isSinglePage ? "#retreats" : "/retreats"}
              onClick={(e) => handleNavClick(e, "#retreats")}
            >
              <Button variant="default" className="btn-hero group relative overflow-hidden animate-shimmer">
                <span className="relative z-10">Book a Retreat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:scale-110 hover:rotate-12 group"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-mobile-menu">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium nav-link-hover animate-nav-link ${
                    isActive(link.href) 
                      ? "bg-primary text-primary-foreground shadow-md animate-pulse-glow" 
                      : "bg-background/80 text-foreground hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to={isSinglePage ? "#retreats" : "/retreats"} onClick={(e) => handleNavClick(e, "#retreats")}>
                <Button variant="default" className="btn-hero w-full mt-2 group relative overflow-hidden animate-shimmer">
                  <span className="relative z-10">Book a Retreat</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;