"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Floating particle component
function Particle({ index }: { index: number }) {
  const size = 2 + Math.random() * 4;
  const left = 5 + Math.random() * 90;
  const duration = 4 + Math.random() * 8;
  const delay = Math.random() * 5;
  const isGold = Math.random() > 0.5;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-10px",
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: isGold ? "#D4AF37" : "#9A1B1B",
        boxShadow: isGold
          ? "0 0 6px rgba(212,175,55,0.8)"
          : "0 0 6px rgba(154,27,27,0.8)",
        animation: `float-particle ${duration}s ease-in infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
        pointerEvents: "none",
      }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 2.5 } },
};

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-bg.png"
          alt="Beauty From Ashes Tattoo Studio"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={90}
        />
      </div>

      {/* Multi-layer dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(9,9,9,0.3) 0%, rgba(9,9,9,0.5) 40%, rgba(9,9,9,0.85) 80%, rgba(9,9,9,1) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(154,27,27,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 2, overflow: "hidden" }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 24px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={textVariant}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "50px",
              background: "linear-gradient(90deg, transparent, #D4AF37)",
            }}
          />
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Crothersville, Indiana
          </span>
          <div
            style={{
              height: "1px",
              width: "50px",
              background: "linear-gradient(90deg, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={textVariant}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.9,
            color: "#F5F5F5",
            letterSpacing: "-0.01em",
            marginBottom: "28px",
          }}
        >
          Every Tattoo
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}
          >
            Tells a Story.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={textVariant}
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            color: "rgba(245,245,245,0.65)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto 48px",
            letterSpacing: "0.02em",
          }}
        >
          Transforming memories, passions, and ideas into timeless artwork.
          Crafted with precision, creativity, and purpose.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={textVariant}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#booking")}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #9A1B1B, #C0392B)",
              color: "#F5F5F5",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "none",
              boxShadow: "0 10px 40px rgba(154,27,27,0.4)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Book Consultation
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#portfolio")}
            style={{
              padding: "15px 40px",
              background: "transparent",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.5)",
              borderRadius: "2px",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              cursor: "none",
              fontFamily: "var(--font-inter)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#D4AF37";
              el.style.background = "rgba(212,175,55,0.08)";
              el.style.boxShadow = "0 0 20px rgba(212,175,55,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(212,175,55,0.5)";
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            Explore Portfolio
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "rgba(160,160,160,0.5)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, #D4AF37, transparent)",
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
