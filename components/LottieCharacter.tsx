import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const LottieCharacter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);
  const timelineRef = useRef<any>(null);
  const location = useLocation(); // Track route changes

  const playAnimation = () => {
    const container = containerRef.current;
    if (!container || !animRef.current) return;

    console.log("Playing Lottie animation for route:", location.pathname);

    // Stop any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Reset container state
    gsap.set(container, {
      y: 200,
      opacity: 0,
      visibility: "visible",
    });

    // Create new timeline
    timelineRef.current = gsap.timeline({
      onComplete: () => {
        console.log("Animation timeline completed");
        // After fade out, ensure the container is hidden
        if (container) {
          gsap.set(container, { visibility: "hidden" });
        }
      },
    });

    timelineRef.current
      .to(container, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
      })
      .call(() => {
        console.log("Starting Lottie animation playback");
        if (animRef.current) {
          animRef.current.stop();
          animRef.current.play();
        }
      })
      .to(container, { opacity: 0, duration: 0.5, delay: 4 });
  };

  useEffect(() => {
    console.log("LottieCharacter component mounted");
    const container = containerRef.current;
    if (!container) {
      console.error("Container ref is null");
      return;
    }

    console.log("Container found, initializing...");

    const initAnimation = () => {
      // Prevent re-initialization
      if (animRef.current) return;

      console.log("Initializing Lottie animation...");

      animRef.current = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "/lottie/astronot.json",
      });

      animRef.current.addEventListener("DOMLoaded", () => {
        console.log("Lottie animation loaded successfully!");
        // Play animation immediately on first load
        playAnimation();
      });

      animRef.current.addEventListener("data_failed", (error: any) => {
        console.error("Lottie data failed to load:", error);
      });

      animRef.current.addEventListener("error", (error: any) => {
        console.error("Lottie error:", error);
      });
    };

    // Initialize the animation
    initAnimation();

    // --- Cleanup Function ---
    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }

      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, []); // Empty dependency array for initialization

  // Trigger animation on route changes
  useEffect(() => {
    if (animRef.current) {
      // Small delay to let route transition settle
      const timer = setTimeout(() => {
        playAnimation();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Dependency on route changes

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "200px",
        height: "200px",
        zIndex: 100,
        visibility: "hidden", // Start hidden, GSAP will manage visibility
        pointerEvents: "none",
      }}
    />
  );
};

export default LottieCharacter;
