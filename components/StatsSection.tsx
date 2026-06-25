"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 210, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Star Rating" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Tattoos Completed" },
];

const marqueeItems = [
  "Custom Tattoos",
  "Black & Grey",
  "Fine Line",
  "Realism",
  "Sleeves",
  "Cover Ups",
  "Portraits",
  "Japanese",
  "Traditional",
  "Memorial",
  "Color Work",
  "Geometric",
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isFloat = value % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const step = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {value % 1 !== 0 ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background: "#141414",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "80px",
      }}
    >
      {/* Stats grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 40px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              padding: "50px 32px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Glow dot */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "rgba(160,160,160,0.6)",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why choose us cards */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
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
              Why Choose Us
            </span>
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "#F5F5F5",
            }}
          >
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Beauty From Ashes
            </span>{" "}
            Difference
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            { icon: "✦", title: "210+ Happy Clients", desc: "Trusted by hundreds of satisfied clients" },
            { icon: "★", title: "4.8 Star Rating", desc: "Consistently rated among the best" },
            { icon: "◈", title: "Clean & Sterile", desc: "Highest sanitation standards maintained" },
            { icon: "◉", title: "Experienced Artists", desc: "Years of professional artistry" },
            { icon: "◇", title: "Custom Artwork", desc: "Every design is one-of-a-kind" },
            { icon: "◎", title: "Premium Equipment", desc: "Top-of-the-line professional tools" },
            { icon: "○", title: "Comfortable Studio", desc: "Relaxed, welcoming environment" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.3)" }}
              style={{
                padding: "32px 24px",
                background: "rgba(9,9,9,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "#D4AF37",
                  marginBottom: "14px",
                }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#F5F5F5",
                  marginBottom: "8px",
                  letterSpacing: "0.02em",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(160,160,160,0.6)",
                  lineHeight: 1.6,
                }}
              >
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          marginTop: "80px",
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          padding: "20px 0",
        }}
      >
        <div className="marquee-track" style={{ display: "flex", gap: "60px", whiteSpace: "nowrap", width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: i % 3 === 0 ? "#D4AF37" : "rgba(160,160,160,0.4)",
                textTransform: "uppercase",
              }}
            >
              {item}
              <span style={{ marginLeft: "60px", color: "rgba(154,27,27,0.4)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
