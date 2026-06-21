"use client";

import { motion } from "framer-motion";
import CCTVCamera3D from "./CCTVCamera";

export default function Hero() {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center scale-95 md:scale-100 origin-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left"
        >
          <div className="inline-block glass-panel px-4 py-1.5 rounded-full text-primary font-medium text-xs lg:text-sm w-fit mx-auto lg:mx-0">
            ExamSphere Vision
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Exams Were Designed To Measure Knowledge.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Not To Reward Cheating.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
            Transforming ordinary CCTV cameras into intelligent invigilators using AI-powered computer vision.
          </p>
          
          <div className="flex flex-wrap gap-3 lg:gap-4 mt-2 lg:mt-4 justify-center lg:justify-start">
            <button className="px-6 py-3 lg:px-8 lg:py-4 bg-primary text-background font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 text-sm lg:text-base">
              View Live Demo
            </button>
            <button className="px-6 py-3 lg:px-8 lg:py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm lg:text-base">
              Technical Architecture
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <CCTVCamera3D />
        </motion.div>

      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
    </section>
  );
}
