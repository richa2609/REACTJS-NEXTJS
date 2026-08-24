import { useEffect, useRef, useState } from 'react';

/**
 * Observes the returned ref and flips `isVisible` to true once the element
 * scrolls into the viewport (matching the original .reveal / .reveal.in
 * IntersectionObserver behavior). Unobserves after first reveal so the
 * animation only plays once.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
