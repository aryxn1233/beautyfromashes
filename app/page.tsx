"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ArtistsSection from "@/components/ArtistsSection";
import PortfolioSection from "@/components/PortfolioSection";
import StudioExperienceSection from "@/components/StudioExperienceSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Dynamic import for custom cursor (no SSR)
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ArtistsSection />
      <PortfolioSection />
      <StudioExperienceSection />
      <ReviewsSection />
      <ProcessTimeline />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
