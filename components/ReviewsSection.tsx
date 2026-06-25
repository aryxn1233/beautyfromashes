"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    stars: 5,
    text: "Kyle took my idea and turned it into absolute reality. The attention to detail was incredible — every line, every shade was exactly what I envisioned. I couldn't be happier.",
    author: "Sarah M.",
    date: "March 2025",
    tattoo: "Custom Sleeve",
  },
  {
    stars: 5,
    text: "Clean shop, amazing atmosphere, and truly talented artists. Kasey did my fine line floral and it's perfect. Already planning my next appointment.",
    author: "Jessica R.",
    date: "January 2025",
    tattoo: "Fine Line Floral",
  },
  {
    stars: 5,
    text: "The entire experience felt professional from start to finish. Anna captured my grandmother's portrait with such emotion and precision. I cried when I saw it. Thank you.",
    author: "Michael T.",
    date: "February 2025",
    tattoo: "Memorial Portrait",
  },
  {
    stars: 5,
    text: "I drove 3 hours to get tattooed here and it was 100% worth it. Kyle's blackwork is next level. Highly recommend to anyone who wants serious quality work.",
    author: "David K.",
    date: "April 2025",
    tattoo: "Blackwork Chest Piece",
  },
  {
    stars: 5,
    text: "Kasey is an absolute wizard with fine line work. My botanical tattoo healed beautifully and looks just as crisp as day one. 10/10 experience.",
    author: "Emma L.",
    date: "May 2025",
    tattoo: "Botanical Fine Line",
  },
  {
    stars: 5,
    text: "First time getting tattooed and they made me feel so comfortable. The consultation was thorough, the studio was spotless, and the result was better than I imagined.",
    author: "Chris P.",
    date: "March 2025",
    tattoo: "Traditional Style",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            color: i < stars ? "#D4AF37" : "rgba(160,160,160,0.2)",
            fontSize: "0.85rem",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        background: "#141414",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
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
              Client Stories
            </span>
            <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#F5F5F5",
              marginBottom: "16px",
            }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Clients Say
            </span>
          </h2>
          <p style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.85rem" }}>
            Real stories from real clients who trusted us with their vision.
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="reviews-grid"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ y: -6 }}
              style={{
                padding: "32px",
                background: "rgba(9,9,9,0.8)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "2px",
                backdropFilter: "blur(10px)",
                position: "relative",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "4rem",
                  color: "rgba(212,175,55,0.08)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                "
              </div>

              <StarRating stars={review.stars} />

              <p
                style={{
                  color: "rgba(245,245,245,0.65)",
                  lineHeight: 1.8,
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                "{review.text}"
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.05)",
                  marginBottom: "20px",
                }}
              />

              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#F5F5F5",
                      marginBottom: "4px",
                    }}
                  >
                    {review.author}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "#D4AF37",
                    }}
                  >
                    {review.tattoo}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(160,160,160,0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
