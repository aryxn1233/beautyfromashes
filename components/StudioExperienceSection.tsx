"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: "consultation",
    tag: "Step 01",
    title: "Private Consultation",
    body:
      "Your vision matters. We begin every tattoo journey with a private, no-pressure consultation where we listen deeply to your idea, refine your concept, and ensure we capture exactly what you have in mind.",
    image: "/images/studio-experience.png",
    imageAlt: "Private tattoo consultation at Beauty From Ashes",
    reverse: false,
  },
  {
    id: "environment",
    tag: "Step 02",
    title: "Comfortable Environment",
    body:
      "Our studio is designed for your comfort and creative energy. From the moment you walk in, you'll feel at ease in our clean, professionally designed space that inspires great art.",
    image: "/images/studio-interior.png",
    imageAlt: "Premium tattoo studio interior",
    reverse: true,
  },
  {
    id: "safety",
    tag: "Step 03",
    title: "Safety First Approach",
    body:
      "We maintain the highest sanitation standards in the industry. All equipment is single-use sterilized, and our studio exceeds all health department requirements. Your safety is our top priority.",
    image: "/images/hero-bg.png",
    imageAlt: "Professional tattoo artist working safely",
    reverse: false,
  },
];

export default function StudioExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 lg:py-[120px]"
      style={{
        background: "#090909",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "100px" }}
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
            The Experience
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
          Studio{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}
          >
            Experience
          </span>
        </h2>
      </motion.div>

      {/* Alternating sections */}
      <div
        className="px-6 lg:px-10"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "120px",
        }}
      >
        {experiences.map((exp, i) => (
          <ExperienceBlock key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceBlock({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        direction: exp.reverse ? "rtl" : "ltr",
      }}
      className="exp-block"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: exp.reverse ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        style={{ position: "relative", direction: "ltr" }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Image
            src={exp.image}
            alt={exp.imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent, rgba(9,9,9,0.3))",
            }}
          />
        </div>
        {/* Decorative corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: "-16px",
            right: exp.reverse ? "auto" : "-16px",
            left: exp.reverse ? "-16px" : "auto",
            width: "80px",
            height: "80px",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "2px",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: exp.reverse ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        style={{ direction: "ltr" }}
      >
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "#D4AF37",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {exp.tag}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 300,
            color: "#F5F5F5",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          {exp.title}
        </h3>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#9A1B1B",
            marginBottom: "24px",
          }}
        />
        <p
          style={{
            color: "rgba(245,245,245,0.55)",
            lineHeight: 1.9,
            fontSize: "0.9rem",
            fontWeight: 300,
            marginBottom: "32px",
          }}
        >
          {exp.body}
        </p>
        <button
          onClick={() => {
            document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "12px 28px",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "transparent",
            color: "#D4AF37",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "none",
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
            (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          Learn More
        </button>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .exp-block { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
