import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";

const LottieCharacter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);
  const timelineRef = useRef<any>(null);

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
          .fromTo(
            container,
            { y: 200, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "bounce.out",
              visibility: "visible",
            }
          )
          .call(() => {
            console.log("Starting Lottie animation playback");
            if (animRef.current) {
              animRef.current.play();
            }
          })
          .to(container, { opacity: 0, duration: 0.5, delay: 5 });
      });

      animRef.current.addEventListener("data_ready", () => {
        console.log("Lottie data ready");
      });

      animRef.current.addEventListener("config_ready", () => {
        console.log("Lottie config ready");
      });

      animRef.current.addEventListener("data_failed", (error: any) => {
        console.error("Lottie data failed to load:", error);
      });

      animRef.current.addEventListener("error", (error: any) => {
        console.error("Lottie error:", error);
      });
    };

    const checkAndInit = () => {
      // Since we're importing the libraries directly, we can initialize immediately
      initAnimation();
    };

    // Initialize the animation directly since libraries are imported
    checkAndInit();

    // --- Cleanup Function ---
    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }

      if (timelineRef.current) {
        // kill() is crucial to stop animations and prevent memory leaks
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
