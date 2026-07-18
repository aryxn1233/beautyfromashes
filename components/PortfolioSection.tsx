"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Black & Grey",
  "Color",
  "Fine Line",
  "Portraits",
  "Sleeves",
  "Traditional",
];

const portfolio = [
  {
    id: 1,
    src: "/images/tattoo-blackgrey.png",
    title: "Wolf Portrait",
    artist: "Kyle",
    category: "Black & Grey",
  },
  {
    id: 2,
    src: "/images/tattoo-fineline.png",
    title: "Botanical Fineline",
    artist: "Kasey",
    category: "Fine Line",
  },
  {
    id: 3,
    src: "/images/tattoo-color.png",
    title: "Koi Fish",
    artist: "Kyle",
    category: "Color",
  },
  {
    id: 4,
    src: "/images/tattoo-portrait.png",
    title: "Realism Portrait",
    artist: "Anna",
    category: "Portraits",
  },
  {
    id: 5,
    src: "/images/tattoo-sleeve.png",
    title: "Japanese Sleeve",
    artist: "Kyle",
    category: "Sleeves",
  },
  {
    id: 6,
    src: "/images/tattoo-traditional.png",
    title: "Traditional Eagle",
    artist: "Kyle",
    category: "Traditional",
  },
  {
    id: 7,
    src: "/images/tattoo-geometric.png",
    title: "Sacred Geometry",
    artist: "Anna",
    category: "Black & Grey",
  },
  {
    id: 8,
    src: "/images/tattoo-blackgrey.png",
    title: "Realistic Study",
    artist: "Kyle",
    category: "Black & Grey",
  },
  {
    id: 9,
    src: "/images/tattoo-fineline.png",
    title: "Delicate Wildflowers",
    artist: "Kasey",
    category: "Fine Line",
  },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof portfolio)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-16 lg:py-[120px]"
      style={{
        background: "#141414",
        position: "relative",
      }}
    >
      <div className="px-6 lg:px-10" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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
              Our Work
            </span>
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F5F5",
              marginBottom: "24px",
            }}
          >
            Tattoo{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Portfolio
            </span>
          </h2>
          <p style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.9rem", fontWeight: 300 }}>
            Every piece tells a unique story. Browse our gallery of work.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                background:
                  activeCategory === cat ? "#9A1B1B" : "transparent",
                border: `1px solid ${activeCategory === cat ? "#9A1B1B" : "rgba(255,255,255,0.08)"}`,
                color:
                  activeCategory === cat ? "#F5F5F5" : "rgba(245,245,245,0.5)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "none",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="masonry-item"
              onClick={() => setLightbox(item)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
                cursor: "none",
                aspectRatio: i % 3 === 1 ? "3/4" : "1/1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "300px",
                }}
                className="portfolio-item group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  className="portfolio-img"
                />
                <div
                  className="portfolio-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.3) 50%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "#D4AF37",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      color: "#F5F5F5",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(245,245,245,0.5)" }}>
                    by {item.artist}
                  </div>
                  <div
                    style={{
                      marginTop: "16px",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>View Fullscreen</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            className="p-6 md:p-10"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(9,9,9,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "800px",
                maxHeight: "85vh",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "2px",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={95}
                />
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", color: "#F5F5F5" }}>
                  {lightbox.title}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#D4AF37", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px" }}>
                  {lightbox.category} · by {lightbox.artist}
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: 0,
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F5F5F5",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "none",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .portfolio-item:hover .portfolio-img { transform: scale(1.08); }
        .portfolio-item:hover .portfolio-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
