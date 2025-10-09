import React, { useState, useEffect } from "react";

interface ScrollToTopButtonProps {
  showAfter?: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  showAfter = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfter]);

  // Smooth scroll to top with animation
  const scrollToTop = () => {
    setIsAnimating(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset animation state after scroll completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Subtle scroll progress indicator */}
      <div
        className={`
        fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-cyan to-accent-gold z-50
        transition-all duration-300 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
        style={{
          width: `${Math.min(
            (window.pageYOffset /
              (document.documentElement.scrollHeight - window.innerHeight)) *
              100,
            100
          )}%`,
        }}
      />

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50
          w-14 h-14 rounded-full
          bg-gradient-to-br from-accent-cyan to-accent-gold
          text-white shadow-lg shadow-accent-cyan/25
          hover:shadow-xl hover:shadow-accent-gold/30
          transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          group overflow-hidden
          ${isAnimating ? "animate-pulse" : ""}
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }
        `}
        aria-label="Scroll to top"
        title="Back to top"
      >
        {/* Background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        {/* Arrow icon */}
        <div
          className={`
          relative z-10 flex items-center justify-center w-full h-full
          transition-transform duration-300
          ${isAnimating ? "animate-bounce" : "group-hover:-translate-y-0.5"}
        `}
        >
          <svg
            className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 transition-opacity duration-150"></div>
      </button>
    </>
  );
};

export default ScrollToTopButton;
