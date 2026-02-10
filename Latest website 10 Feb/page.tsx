"use client";

import { useState } from "react";
import LandingHero from "@/components/LandingHero";
import CallToActionBreak from "@/components/CallToActionBreak";
import SalesSystemSection from "@/components/SalesSystemSection";
import ThreeFixesSection from "@/components/ThreeFixesSection";
import HowItWorksLanding from "@/components/HowItWorksLanding";
import WhyIBuiltThisSection from "@/components/WhyIBuiltThisSection";
import SocialProofLanding from "@/components/SocialProofLanding";
import FAQLanding from "@/components/FAQLanding";
import FinalCTASection from "@/components/FinalCTASection";
import LeadMagnetModalLanding from "@/components/LeadMagnetModalLanding";
import FooterLanding from "@/components/FooterLanding";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* All Sections */}
      <LandingHero onDownloadClick={handleDownloadClick} />
      <CallToActionBreak />
      <SalesSystemSection />
      <ThreeFixesSection onDownloadClick={handleDownloadClick} />
      <HowItWorksLanding onDownloadClick={handleDownloadClick} />
      <WhyIBuiltThisSection />
      <SocialProofLanding onDownloadClick={handleDownloadClick} />
      <FAQLanding />
      <FinalCTASection onDownloadClick={handleDownloadClick} />
      <FooterLanding />

      {/* Lead Magnet Modal */}
      <LeadMagnetModalLanding isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
