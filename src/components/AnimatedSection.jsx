import { useEffect, useRef, useState } from 'react';

// Reusable component for scroll-triggered animations
const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' // 'fade-up', 'fade-left', 'fade-right', 'scale-up', 'fade-in'
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-left':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-30px)' };
        case 'fade-right':
          return { ...baseStyle, opacity: 0, transform: 'translateX(30px)' };
        case 'scale-up':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.9)' };
        case 'fade-in':
          return { ...baseStyle, opacity: 0, transform: 'none' };
        case 'fade-up':
        default:
          return { ...baseStyle, opacity: 0, transform: 'translateY(30px)' };
      }
    }

    return { ...baseStyle, opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyle()}>
      {children}
    </div>
  );
};

export default AnimatedSection;


