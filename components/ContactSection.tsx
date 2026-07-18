"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 lg:py-[120px]"
      style={{
        background: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border */}
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
        className="contact-grid px-6 lg:px-10"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left: Info */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ height: "1px", width: "40px", background: "#9A1B1B" }} />
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#9A1B1B", textTransform: "uppercase" }}>
                Visit Us
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "#F5F5F5",
                marginBottom: "40px",
                lineHeight: 1.1,
              }}
            >
              Find Us &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                Get In Touch
              </span>
            </h2>

            {/* Address block */}
            <div
              style={{
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                marginBottom: "24px",
                background: "rgba(9,9,9,0.5)",
              }}
            >
              <div style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                Address
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", color: "#F5F5F5", marginBottom: "6px" }}>
                Beauty From Ashes Tattoo
              </div>
              <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>
                201 N Armstrong St<br />
                Crothersville, Indiana<br />
                USA
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                marginBottom: "24px",
                background: "rgba(9,9,9,0.5)",
              }}
            >
              <div style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Business Hours
              </div>
              {hours.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: i < hours.length - 1 ? "12px" : 0,
                    marginBottom: i < hours.length - 1 ? "12px" : 0,
                    borderBottom: i < hours.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  <span style={{ color: "rgba(245,245,245,0.6)", fontSize: "0.8rem", fontWeight: 300 }}>
                    {h.day}
                  </span>
                  <span
                    style={{
                      color: h.time === "Closed" ? "rgba(154,27,27,0.7)" : "#D4AF37",
                      fontSize: "0.8rem",
                      fontWeight: h.time === "Closed" ? 400 : 300,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="tel:+15551234567"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  textDecoration: "none",
                  background: "rgba(9,9,9,0.5)",
                  color: "rgba(245,245,245,0.7)",
                  fontSize: "0.85rem",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.7)";
                }}
              >
                <span style={{ color: "#D4AF37", fontSize: "0.9rem" }}>☎</span>
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:studio@beautyfromashes.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  textDecoration: "none",
                  background: "rgba(9,9,9,0.5)",
                  color: "rgba(245,245,245,0.7)",
                  fontSize: "0.85rem",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.7)";
                }}
              >
                <span style={{ color: "#D4AF37", fontSize: "0.9rem" }}>✉</span>
                <span>studio@beautyfromashes.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        >
          {/* Interactive embedded map */}
          <div
            className="h-[350px] md:h-[500px]"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <iframe
              title="Beauty From Ashes Tattoo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.7295823248357!2d-85.77040092357847!3d38.794938871679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886aecd96fd71d77%3A0x1!2s201%20N%20Armstrong%20St%2C%20Crothersville%2C%20IN%2047229!5e0!3m2!1sen!2sus!4v1687000000000!5m2!1sen!2sus&style=dark"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(90%) contrast(120%) brightness(0.5) sepia(20%) hue-rotate(180deg)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay to match theme */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(9,9,9,0.15)",
                pointerEvents: "none",
              }}
            />
            {/* Map badge */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                padding: "12px 18px",
                background: "rgba(9,9,9,0.9)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "2px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>
                ✦ Our Location
              </div>
              <div style={{ color: "#F5F5F5", fontSize: "0.8rem" }}>
                201 N Armstrong St, Crothersville, IN
              </div>
            </div>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Instagram", icon: "IG", href: "https://instagram.com" },
              { label: "Facebook", icon: "FB", href: "https://facebook.com" },
              { label: "TikTok", icon: "TK", href: "https://tiktok.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  textDecoration: "none",
                  color: "rgba(245,245,245,0.5)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "none",
                  transition: "all 0.3s ease",
                  background: "rgba(9,9,9,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.5)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(9,9,9,0.5)";
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid currentColor",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.55rem",
                  }}
                >
                  {social.icon}
                </span>
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.5fr; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 50px !important; }
        }
      `}</style>
    </section>
  );
}
