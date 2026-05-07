"use client";

import { useState, useEffect } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import SalamPembuka from "@/components/SalamPembuka";
import ProfilMempelai from "@/components/ProfilMempelai";

import DetailAcara from "@/components/DetailAcara";
import Gallery from "@/components/Gallery";
import WeddingGift from "@/components/WeddingGift";
import Footer from "@/components/Footer";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpened]);

  return (
    <main className="relative min-h-screen bg-black-elegant">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-pattern opacity-10 pointer-events-none z-0" />

      {/* Opening Screen Overlay */}
      <OpeningScreen isOpened={isOpened} onOpen={() => setIsOpened(true)} />

      {/* Main Content */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          isOpened ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <HeroSection />
        <CountdownTimer />
        <SalamPembuka />
        <ProfilMempelai />

        <DetailAcara />
        <Gallery />
        <WeddingGift />
        <Footer />
      </div>

      {/* Floating Music Player */}
      {isOpened && <FloatingMusicPlayer />}
    </main>
  );
}
