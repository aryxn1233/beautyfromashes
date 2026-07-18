"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Artists", href: "#artists" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(9,9,9,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
        }}
      >
        <div
          className="px-6 lg:px-10"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            style={{ textDecoration: "none", cursor: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid rgba(212,175,55,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span style={{ color: "#D4AF37", fontSize: "0.9rem" }}>✦</span>
                <div
                  style={{
                    position: "absolute",
                    inset: "3px",
                    border: "1px solid rgba(154,27,27,0.3)",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
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

          {/* Desktop Links */}
          <div
            style={{
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(245,245,245,0.7)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "none",
                  transition: "color 0.3s ease",
                  padding: "4px 0",
                  position: "relative",
                }}
                className="nav-link group"
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(245,245,245,0.7)")
                }
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollTo("#booking")}
              className="btn-primary relative"
              style={{
                cursor: "none",
                fontSize: "0.65rem",
                padding: "10px 24px",
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #9A1B1B, #C0392B)",
                color: "#F5F5F5",
                border: "none",
                borderRadius: "2px",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.background = "linear-gradient(135deg, #D4AF37, #F0D060)";
                el.style.color = "#090909";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 10px 30px rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.background = "linear-gradient(135deg, #9A1B1B, #C0392B)";
                el.style.color = "#F5F5F5";
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "8px",
            }}
            className="flex lg:hidden"
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 10 : 0,
              }}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "#D4AF37",
              }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1, x: mobileOpen ? 10 : 0 }}
              style={{
                display: "block",
                width: "16px",
                height: "1px",
                background: "#F5F5F5",
              }}
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -10 : 0,
              }}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "#D4AF37",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(9,9,9,0.98)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: "#F5F5F5",
                  cursor: "none",
                  letterSpacing: "0.1em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#F5F5F5")
                }
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
