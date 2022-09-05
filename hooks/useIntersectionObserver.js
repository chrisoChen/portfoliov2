import { useState, useEffect } from "react";

// Obtained from Ryan Finni's guide to lazy load React components:
// Source: https://letsbuildui.dev/articles/how-to-lazy-load-react-components
const useIntersectionObserver = (reference, options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
        observer.disconnect();
      }
    };

    // Create the observer, passing in the callback
    const observer = new IntersectionObserver(handleIntersect, options);

    // If we have a ref value, start observing it
    if (reference) {
      observer.observe(reference.current);
    }

    // If unmounting, disconnect the observer
    return () => observer.disconnect();
  }, [reference]);

  return isVisible;
};

export default useIntersectionObserver;
