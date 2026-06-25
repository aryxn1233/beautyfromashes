"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does getting a tattoo hurt?",
    answer:
      "Pain tolerance varies from person to person and depends greatly on the placement. Some areas (ribs, spine, feet) are more sensitive, while others (outer arm, calf) are much more tolerable. Our artists are skilled at making the experience as comfortable as possible, and most clients describe it as manageable discomfort rather than intense pain.",
  },
  {
    question: "How should I prepare for my tattoo session?",
    answer:
      "Eat a full meal 2 hours before your appointment, stay well hydrated, get a good night's sleep, and avoid alcohol for 24 hours beforehand. Wear comfortable, loose clothing that gives easy access to the area being tattooed. Avoid sunburn on the area and don't apply any lotions or creams on the day of your session.",
  },
  {
    question: "How long does the healing process take?",
    answer:
      "The surface layer of your tattoo typically heals within 2–3 weeks. Complete deep healing takes 2–3 months. During the first week, you'll notice peeling and flaking — this is completely normal. Follow our aftercare instructions carefully and avoid sun exposure, swimming, and picking at the skin for optimal healing.",
  },
  {
    question: "Can I bring my own design or reference images?",
    answer:
      "Absolutely! We encourage clients to bring references, mood boards, photos, or sketches. Our artists use your references as inspiration while creating a completely custom design. We'll work collaboratively with you to ensure the final design is exactly what you envision — or even better.",
  },
  {
    question: "How much does a tattoo cost?",
    answer:
      "Pricing depends on size, placement, complexity, and the time required. Small pieces start around $80–$150. Medium work typically ranges $200–$500. Large custom pieces and sleeves are priced by hourly rate at $150/hour. We always discuss pricing transparently during your consultation — no hidden costs.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We do occasionally have availability for walk-ins, but we strongly recommend booking an appointment in advance, especially for custom work. Appointments ensure your artist has adequate time to design your piece and prepare for your session. Contact us to check current availability.",
  },
  {
    question: "What tattoo styles do you specialize in?",
    answer:
      "Our team excels in black & grey realism, fine line work, traditional American, Japanese traditional, blackwork, geometric, portrait realism, memorial tattoos, floral designs, and full sleeves. During your consultation, we'll match you with the artist whose style best aligns with your vision.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "28px 0",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          cursor: "none",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              color: open ? "#D4AF37" : "#9A1B1B",
              transition: "color 0.3s ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              fontWeight: 400,
              color: open ? "#F5F5F5" : "rgba(245,245,245,0.8)",
              transition: "color 0.3s ease",
              lineHeight: 1.3,
            }}
          >
            {faq.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            border: `1px solid ${open ? "rgba(212,175,55,0.4)" : "rgba(255,255,255,0.1)"}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "#D4AF37" : "rgba(245,245,245,0.4)",
            fontSize: "1rem",
            lineHeight: 1,
            transition: "border-color 0.3s ease, color 0.3s ease",
          }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              style={{
                paddingBottom: "28px",
                paddingLeft: "34px",
                color: "rgba(245,245,245,0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                fontWeight: 300,
                borderLeft: "1px solid rgba(212,175,55,0.2)",
                marginLeft: "8px",
                paddingLeft: "24px",
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        background: "#141414",
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
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
              Questions & Answers
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
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: "60px",
            padding: "32px",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "2px",
            background: "rgba(9,9,9,0.5)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem", marginBottom: "20px" }}>
            Have a question not answered here?
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "12px 32px",
              border: "1px solid rgba(212,175,55,0.3)",
              background: "transparent",
              color: "#D4AF37",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "none",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-inter)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
            }}
          >
            Contact Us Directly
          </button>
        </motion.div>
      </div>
    </section>
  );
}
