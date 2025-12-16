"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

const VisionSection = dynamic(() => import("@/components/VisionSection"));
const OurSolutionsSection = dynamic(
  () => import("@/components/OurSolutionsSection")
);
const EsgImpactSection = dynamic(() => import("@/components/EsgImpactSection"));
const AwardsSection = dynamic(() => import("@/components/AwardsSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <VisionSection />
      <OurSolutionsSection />
      <EsgImpactSection />
      <AwardsSection />
      <Footer />
    </div>
  );
}