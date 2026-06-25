"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your ideas, references, and vision with our artist",
    icon: "◎",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Your artist creates a unique design tailored just for you",
    icon: "◇",
  },
  {
    number: "03",
    title: "Tattoo Session",
    description: "Settle in comfortably as your permanent art comes to life",
    icon: "✦",
  },
  {
    number: "04",
    title: "Aftercare",
    description: "Receive detailed aftercare instructions and quality products",
    icon: "◈",
  },
  {
    number: "05",
    title: "Healing",
    description: "Watch your tattoo heal beautifully over the following weeks",
    icon: "○",
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#090909",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(154,27,27,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#9A1B1B", textTransform: "uppercase" }}>
              How It Works
            </span>
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F5F5",
            }}
          >
            Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Journey
            </span>{" "}
            With Us
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Animated connecting line */}
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.3 }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, transparent, #9A1B1B, #D4AF37, transparent)",
                transformOrigin: "left",
              }}
            />
          </div>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
            }}
            className="timeline-grid"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
                }}
                style={{ textAlign: "center", position: "relative" }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.3)",
                    background: "#090909",
                    margin: "0 auto 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Inner ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px",
                      borderRadius: "50%",
                      border: "1px solid rgba(154,27,27,0.2)",
                    }}
                  />
                  <span style={{ color: "#D4AF37", fontSize: "1rem" }}>
                    {step.icon}
                  </span>
                </div>

                {/* Number */}
                <div
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    color: "#D4AF37",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#F5F5F5",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(160,160,160,0.5)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ textAlign: "center", marginTop: "80px" }}
        >
          <button
            onClick={() =>
              document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 48px",
              background: "linear-gradient(135deg, #9A1B1B, #C0392B)",
              color: "#F5F5F5",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(154,27,27,0.3)",
              fontFamily: "var(--font-inter)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #D4AF37, #F0D060)";
              (e.currentTarget as HTMLElement).style.color = "#090909";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(212,175,55,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #9A1B1B, #C0392B)";
              (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(154,27,27,0.3)";
            }}
          >
            Begin Your Journey
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
