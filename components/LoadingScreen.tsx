"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          {/* Ember particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: "0",
                left: `${10 + i * 12}%`,
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: i % 2 === 0 ? "#D4AF37" : "#9A1B1B",
                animation: `float-particle ${3 + i * 0.5}s ease-in infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo mark */}
            <div className="flex items-center justify-center mb-6">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid rgba(212,175,55,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    color: "#D4AF37",
                    lineHeight: 1,
                  }}
                >
                  ✦
                </span>
                <div
                  style={{
                    position: "absolute",
                    inset: "4px",
                    border: "1px solid rgba(154,27,27,0.3)",
                  }}
                />
              </div>
            </div>

            <motion.h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "#F5F5F5",
                marginBottom: "4px",
              }}
            >
              BEAUTY FROM ASHES
            </motion.h1>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              TATTOO STUDIO
            </p>

            {/* Progress bar */}
            <div
              style={{
                width: "200px",
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #9A1B1B, #D4AF37)",
                  width: `${Math.min(progress, 100)}%`,
                  transition: "width 0.1s ease",
                }}
              />
            </div>
            <p
              style={{
                marginTop: "12px",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "rgba(160,160,160,0.5)",
              }}
            >
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
