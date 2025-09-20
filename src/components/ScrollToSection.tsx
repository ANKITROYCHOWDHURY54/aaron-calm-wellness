import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (hash) {
      // Remove the # symbol
      const targetId = hash.substring(1);
      
      // Find the target element
      const targetElement = document.getElementById(targetId);
      
      // If the element exists, scroll to it
      if (targetElement) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          const yOffset = -150; // Adjust this value based on your navbar height
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }, 300);
      }
    } else if (pathname === '/') {
      // If we're on the home page with no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToSection;