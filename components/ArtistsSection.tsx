"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const artists = [
  {
    id: "kyle",
    name: "Kyle",
    title: "Lead Artist",
    image: "/images/artist-kyle.png",
    specialties: ["Realism", "Blackwork", "Sleeves"],
    description:
      "Specializes in custom realism, blackwork, and large sleeve projects. Kyle brings years of precision artistry to every piece.",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    id: "kasey",
    name: "Kasey",
    title: "Fine Line Specialist",
    image: "/images/artist-kasey.png",
    specialties: ["Fine Line", "Florals", "Feminine"],
    description:
      "Fine line, delicate floral designs, feminine tattoos, and intricate detailing. Kasey turns beauty into permanent art.",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  {
    id: "anna",
    name: "Anna",
    title: "Creative Illustrator",
    image: "/images/artist-anna.png",
    specialties: ["Illustrations", "Memorial", "Custom"],
    description:
      "Creative custom illustrations and memorial tattoos. Anna captures emotion and stories with an artist's eye.",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
];

function ArtistCard({
  artist,
  index,
  isInView,
}: {
  artist: (typeof artists)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "40px 32px",
        background: "rgba(20,20,20,0.8)",
        border: `1px solid ${hovered ? "rgba(212,175,55,0.4)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "2px",
        textAlign: "center",
        transform: hovered ? "translateY(-8px)" : "none",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.08)"
          : "none",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
      }}
    >
      {/* Gold top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: hovered ? "80px" : "40px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          transition: "width 0.4s ease",
        }}
      />

      {/* Portrait */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 24px",
          border: `2px solid ${hovered ? "rgba(212,175,55,0.6)" : "rgba(255,255,255,0.08)"}`,
          boxShadow: hovered ? "0 0 30px rgba(212,175,55,0.2)" : "none",
          transition: "all 0.4s ease",
          position: "relative",
        }}
      >
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "2rem",
          fontWeight: 400,
          color: "#F5F5F5",
          marginBottom: "4px",
        }}
      >
        {artist.name}
      </h3>

      {/* Title */}
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          color: "#D4AF37",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        {artist.title}
      </div>

      {/* Specialties */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {artist.specialties.map((s) => (
          <span
            key={s}
            style={{
              padding: "4px 10px",
              border: "1px solid rgba(154,27,27,0.3)",
              borderRadius: "1px",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(245,245,245,0.5)",
              textTransform: "uppercase",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(245,245,245,0.5)",
          lineHeight: 1.8,
          marginBottom: "28px",
          fontWeight: 300,
        }}
      >
        {artist.description}
      </p>

      {/* Social + CTA */}
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "20px" }}>
        <a
          href={artist.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(245,245,245,0.5)",
            textDecoration: "none",
            fontSize: "0.8rem",
            transition: "all 0.3s ease",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
            (e.currentTarget as HTMLElement).style.color = "#D4AF37";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)";
          }}
        >
          IG
        </a>
        <a
          href={artist.facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(245,245,245,0.5)",
            textDecoration: "none",
            fontSize: "0.75rem",
            transition: "all 0.3s ease",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
            (e.currentTarget as HTMLElement).style.color = "#D4AF37";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)";
          }}
        >
          FB
        </a>
      </div>

      <button
        onClick={() => {
          const el = document.querySelector("#booking");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          width: "100%",
          padding: "12px",
          background: "transparent",
          border: "1px solid rgba(154,27,27,0.5)",
          color: "#9A1B1B",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "none",
          transition: "all 0.3s ease",
          borderRadius: "2px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#9A1B1B";
          (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#9A1B1B";
        }}
      >
        Book {artist.name}
      </button>
    </motion.div>
  );
}

export default function ArtistsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="artists"
      ref={ref}
      className="py-16 lg:py-[120px]"
      style={{
        background: "#090909",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(154,27,27,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="px-6 lg:px-10" style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
              Meet the Team
            </span>
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F5F5",
              lineHeight: 1.1,
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Featured Artists
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="artists-grid"
        >
          {artists.map((artist, i) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .artists-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
