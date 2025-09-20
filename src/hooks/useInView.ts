import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  threshold?: number | number[];
  margin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0.1, margin = "0px", once = true } = options;
  const elementRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root: null, rootMargin: margin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, margin, once]);

  return { ref: elementRef, inView } as const;
}










