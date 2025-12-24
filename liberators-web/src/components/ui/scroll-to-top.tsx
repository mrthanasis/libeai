"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Calculate stroke dashoffset based on scroll progress
  const circumference = 2 * Math.PI * 20; // radius = 20

  // Update progress on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Outer Glow Container */}
          <div className="relative group">
            {/* Animated Glow */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 blur-xl group-hover:opacity-70 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Main Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                scale: { duration: 0.2 },
                rotate: { duration: 0.6, ease: "easeInOut" }
              }}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-background/90 backdrop-blur-xl border border-border/50 shadow-2xl shadow-purple-500/20 overflow-hidden"
              aria-label="Scroll to top"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* SVG Circle Progress */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                style={{ overflow: "visible" }}
              >
                {/* Background Circle */}
                <circle
                  cx="28"
                  cy="28"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-muted-foreground/20"
                />
                
                {/* Progress Circle */}
                <motion.circle
                  cx="28"
                  cy="28"
                  r="20"
                  stroke="url(#gradient)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress)}
                  className="drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  style={{
                    transition: "stroke-dashoffset 0.3s ease-out",
                  }}
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Arrow Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-5 h-5 text-foreground group-hover:text-purple-400 transition-colors duration-300" />
              </motion.div>

              {/* Sparkle Effect on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${20 + i * 20}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.button>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="bg-background/95 backdrop-blur-sm border border-border/50 px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
              <span className="text-xs font-medium text-foreground">Back to top</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

