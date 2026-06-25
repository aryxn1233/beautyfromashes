"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Artists", href: "#artists" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", abbr: "IG" },
  { label: "Facebook", href: "https://facebook.com", abbr: "FB" },
  { label: "TikTok", href: "https://tiktok.com", abbr: "TK" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#090909",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Animated noise/grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
        }}
      />

      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 40px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <button
              onClick={() => scrollTo("#home")}
              style={{
                background: "none",
                border: "none",
                cursor: "none",
                padding: 0,
                textAlign: "left",
                marginBottom: "24px",
                display: "block",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(212,175,55,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <span style={{ color: "#D4AF37", fontSize: "1rem" }}>✦</span>
                  <div
                    style={{
                      position: "absolute",
                      inset: "3px",
                      border: "1px solid rgba(154,27,27,0.25)",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: "#F5F5F5",
                      lineHeight: 1.1,
                    }}
                  >
                    BEAUTY FROM ASHES
                  </div>
                  <div
                    style={{
                      fontSize: "0.5rem",
                      letterSpacing: "0.25em",
                      color: "#D4AF37",
                      textTransform: "uppercase",
                    }}
                  >
                    TATTOO STUDIO
                  </div>
                </div>
              </div>
            </button>

            <p
              style={{
                color: "rgba(245,245,245,0.35)",
                fontSize: "0.8rem",
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: "300px",
                marginBottom: "28px",
              }}
            >
              Where stories become permanent works of art. Premium tattoo studio
              in Crothersville, Indiana, dedicated to crafting timeless ink with
              purpose and precision.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,245,245,0.4)",
                    textDecoration: "none",
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    cursor: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                    (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(212,175,55,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,245,245,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(245,245,245,0.4)",
                      fontSize: "0.8rem",
                      cursor: "none",
                      padding: 0,
                      transition: "color 0.3s ease",
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.03em",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#D4AF37")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.4)")
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div style={{ color: "rgba(160,160,160,0.4)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Address
                </div>
                <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", lineHeight: 1.7, fontWeight: 300 }}>
                  201 N Armstrong St<br />
                  Crothersville, IN, USA
                </div>
              </div>
              <div>
                <div style={{ color: "rgba(160,160,160,0.4)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Email
                </div>
                <a
                  href="mailto:studio@beautyfromashes.com"
                  style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", textDecoration: "none", cursor: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF37")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.5)")}
                >
                  studio@beautyfromashes.com
                </a>
              </div>
              <div>
                <div style={{ color: "rgba(160,160,160,0.4)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Phone
                </div>
                <a
                  href="tel:+15551234567"
                  style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", textDecoration: "none", cursor: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF37")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.5)")}
                >
                  (555) 123-4567
                </a>
              </div>
              <div>
                <div style={{ color: "rgba(160,160,160,0.4)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Hours
                </div>
                <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.8rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Mon–Sat: 10AM – 7PM<br />
                  <span style={{ color: "rgba(154,27,27,0.6)" }}>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "rgba(160,160,160,0.25)",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Beauty From Ashes Tattoo. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span style={{ color: "#D4AF37", fontSize: "0.7rem" }}>✦</span>
            <span
              style={{
                color: "rgba(160,160,160,0.2)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Crafted with purpose
            </span>
            <span style={{ color: "#9A1B1B", fontSize: "0.7rem" }}>✦</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
