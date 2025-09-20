import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on route changes, not on hash changes
    if (pathname === "/") {
      // For single page, only scroll to top if there's no hash in the URL
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    } else {
      // For other routes (like 404), scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

















