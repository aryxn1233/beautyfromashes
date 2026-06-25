"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  tattooIdea: string;
  preferredArtist: string;
  preferredDate: string;
  budget: string;
  placement: string;
  message: string;
};

const artists = ["No Preference", "Kyle", "Kasey", "Anna"];
const budgets = ["Under $200", "$200–$500", "$500–$1,000", "$1,000–$2,000", "$2,000+"];
const placements = [
  "Arm",
  "Leg",
  "Back",
  "Chest",
  "Ribs",
  "Neck",
  "Hand",
  "Foot",
  "Full Sleeve",
  "Other",
];

export default function BookingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section
      id="booking"
      ref={ref}
      style={{
        background: "#090909",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decorative */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(154,27,27,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.05)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
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
              Book Now
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
            Schedule Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Consultation
            </span>
          </h2>
          <p style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.85rem", fontWeight: 300 }}>
            Fill out the form and we'll reach out within 24 hours to confirm your appointment.
          </p>
        </motion.div>

        {/* Success message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "24px 32px",
              border: "1px solid rgba(212,175,55,0.3)",
              background: "rgba(212,175,55,0.05)",
              borderRadius: "2px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <div style={{ color: "#D4AF37", fontSize: "1.5rem", marginBottom: "8px" }}>✦</div>
            <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", color: "#F5F5F5", marginBottom: "8px" }}>
              Consultation Request Sent!
            </div>
            <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "0.85rem" }}>
              We'll reach out within 24 hours to confirm your appointment.
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.07 }}
          onSubmit={handleSubmit(onSubmit)}
          style={{
            padding: "60px",
            background: "rgba(20,20,20,0.6)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "2px",
            backdropFilter: "blur(10px)",
          }}
          className="booking-form"
        >
          {/* Row 1: Name + Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
            <motion.div variants={fieldVariant}>
              <label className="form-label">Full Name *</label>
              <input
                {...register("fullName", { required: true })}
                className="form-input"
                placeholder="John Doe"
                style={{
                  borderColor: errors.fullName ? "rgba(154,27,27,0.6)" : undefined,
                }}
              />
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="form-label">Email *</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="form-input"
                placeholder="john@email.com"
                type="email"
                style={{
                  borderColor: errors.email ? "rgba(154,27,27,0.6)" : undefined,
                }}
              />
            </motion.div>
          </div>

          {/* Row 2: Phone + Preferred Artist */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
            <motion.div variants={fieldVariant}>
              <label className="form-label">Phone</label>
              <input
                {...register("phone")}
                className="form-input"
                placeholder="(555) 000-0000"
                type="tel"
              />
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="form-label">Preferred Artist</label>
              <select
                {...register("preferredArtist")}
                className="form-input"
                style={{ appearance: "none" }}
              >
                {artists.map((a) => (
                  <option key={a} value={a} style={{ background: "#141414" }}>
                    {a}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Row 3: Date + Budget */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
            <motion.div variants={fieldVariant}>
              <label className="form-label">Preferred Date</label>
              <input
                {...register("preferredDate")}
                className="form-input"
                type="date"
                style={{ colorScheme: "dark" }}
              />
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="form-label">Budget Range</label>
              <select
                {...register("budget")}
                className="form-input"
                style={{ appearance: "none" }}
              >
                {budgets.map((b) => (
                  <option key={b} value={b} style={{ background: "#141414" }}>
                    {b}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Row 4: Placement + Tattoo Idea */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-row">
            <motion.div variants={fieldVariant}>
              <label className="form-label">Placement</label>
              <select
                {...register("placement")}
                className="form-input"
                style={{ appearance: "none" }}
              >
                {placements.map((p) => (
                  <option key={p} value={p} style={{ background: "#141414" }}>
                    {p}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="form-label">Tattoo Idea *</label>
              <input
                {...register("tattooIdea", { required: true })}
                className="form-input"
                placeholder="Describe your tattoo idea..."
                style={{
                  borderColor: errors.tattooIdea ? "rgba(154,27,27,0.6)" : undefined,
                }}
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={fieldVariant} style={{ marginBottom: "32px" }}>
            <label className="form-label">Additional Message</label>
            <textarea
              {...register("message")}
              className="form-input"
              placeholder="Share any additional details, reference images you have, size preferences, or special requests..."
              rows={4}
              style={{ resize: "vertical" }}
            />
          </motion.div>

          {/* Reference images note */}
          <motion.div
            variants={fieldVariant}
            style={{
              padding: "16px 20px",
              border: "1px dashed rgba(212,175,55,0.15)",
              borderRadius: "2px",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ color: "#D4AF37", fontSize: "1rem" }}>◎</span>
            <p style={{ color: "rgba(245,245,245,0.4)", fontSize: "0.75rem", lineHeight: 1.6 }}>
              Have reference images? Email them to{" "}
              <a
                href="mailto:studio@beautyfromashes.com"
                style={{ color: "#D4AF37", textDecoration: "none" }}
              >
                studio@beautyfromashes.com
              </a>{" "}
              after submitting this form.
            </p>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fieldVariant} style={{ textAlign: "center" }}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: "100%",
                padding: "20px",
                background: "linear-gradient(135deg, #9A1B1B, #C0392B)",
                color: "#F5F5F5",
                border: "none",
                borderRadius: "2px",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "none",
                boxShadow: "0 10px 40px rgba(154,27,27,0.3)",
                fontFamily: "var(--font-inter)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #D4AF37, #F0D060)";
                (e.currentTarget as HTMLElement).style.color = "#090909";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #9A1B1B, #C0392B)";
                (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
              }}
            >
              Schedule My Consultation
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
          .booking-form { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
