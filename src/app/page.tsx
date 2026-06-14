"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import TheBigQuestion from "@/components/TheBigQuestion";
import TheSolution from "@/components/TheSolution";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import RiskAnalysis from "@/components/RiskAnalysis";
import WhyItMatters from "@/components/WhyItMatters";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import FutureRoadmap from "@/components/FutureRoadmap";
import GrandFinale from "@/components/GrandFinale";

const slides = [
  <Hero key="hero" />,
  <TheProblem key="problem" />,
  <TheBigQuestion key="question" />,
  <TheSolution key="solution" />,
  <HowItWorks key="how" />,
  <LiveDemo key="demo" />,
  <RiskAnalysis key="risk" />,
  <WhyItMatters key="matters" />,
  <TechnicalArchitecture key="architecture" />,
  <FutureRoadmap key="roadmap" />,
  <GrandFinale key="finale" />
];

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <main 
      className="flex w-screen h-screen overflow-hidden relative cursor-pointer" 
      onClick={nextSlide}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Presentation Controls HUD */}
      <div 
        className="absolute bottom-6 right-6 z-[100] flex gap-4 text-gray-500 font-mono text-sm" 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={prevSlide} disabled={currentSlide === 0} className="hover:text-primary transition-colors disabled:opacity-30 cursor-pointer p-2">
          PREV
        </button>
        <span className="text-white p-2">
          {String(currentSlide + 1).padStart(2, '0')} / {slides.length}
        </span>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="hover:text-primary transition-colors disabled:opacity-30 cursor-pointer p-2">
          NEXT
        </button>
      </div>
      
      {/* Keyboard Hint */}
      <div className="absolute bottom-6 left-6 z-[100] text-gray-600 font-mono text-xs opacity-50">
        TAP SCREEN OR USE ARROW KEYS TO NAVIGATE
      </div>
    </main>
  );
}
