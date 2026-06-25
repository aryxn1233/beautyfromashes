"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  "Custom Tattoos",
  "Memorial Tattoos",
  "Black & Grey",
  "Color Work",
  "Fine Line",
  "Cover Ups",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#090909",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle bg gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(154,27,27,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <Image
              src="/images/studio-interior.png"
              alt="Beauty From Ashes Tattoo Studio Interior"
              fill
              style={{ objectFit: "cover" }}
              quality={85}
            />
            {/* Gold overlay frame */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(9,9,9,0.6) 100%)",
              }}
            />
          </div>

          {/* Decorative offset frame */}
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "2px",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />

          {/* Stats badge */}
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              right: "-24px",
              background: "rgba(9,9,9,0.95)",
              border: "1px solid rgba(212,175,55,0.25)",
              backdropFilter: "blur(16px)",
              padding: "20px 24px",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "#D4AF37",
                lineHeight: 1,
              }}
            >
              210+
            </div>
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(160,160,160,0.7)",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Happy Clients
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariant}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "#9A1B1B",
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "#9A1B1B",
                textTransform: "uppercase",
              }}
            >
              Our Story
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariant}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F5F5",
              lineHeight: 1.05,
              marginBottom: "28px",
            }}
          >
            Ink With{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Meaning.
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div variants={itemVariant} className="divider-gold" style={{ marginBottom: "28px" }} />

          {/* Body */}
          <motion.p
            variants={itemVariant}
            style={{
              color: "rgba(245,245,245,0.6)",
              lineHeight: 1.9,
              fontSize: "0.95rem",
              marginBottom: "40px",
              fontWeight: 300,
            }}
          >
            Beauty From Ashes Tattoo is more than a tattoo studio — it&apos;s a
            place where stories become permanent works of art. Every design is
            carefully crafted with precision, creativity, and deep respect for
            the client&apos;s vision. We believe that art should be as unique as
            the person wearing it.
          </motion.p>

          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={itemVariant}
                whileHover={{ x: 6, borderColor: "rgba(212,175,55,0.4)" }}
                style={{
                  padding: "14px 18px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "default",
                  transition: "border-color 0.3s ease",
                  background: "rgba(20,20,20,0.5)",
                }}
              >
                <span style={{ color: "#D4AF37", fontSize: "0.7rem" }}>✦</span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,245,245,0.8)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}
