"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, GitBranch } from "lucide-react";

export default function GrandFinale() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Intense glowing background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          From Passive Cameras <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            To Intelligent Invigilators
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16"
        >
          Building a fair, scalable and trustworthy future for examinations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
            <Play size={20} fill="currentColor" /> View Live Demo
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass-panel text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
            <ExternalLink size={20} /> View Prototype
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass-panel text-gray-300 font-bold rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300">
            <GitBranch size={20} /> GitHub Repository
          </button>
        </motion.div>

      </div>
    </section>
  );
}
