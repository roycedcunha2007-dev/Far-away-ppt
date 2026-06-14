"use client";

import { motion } from "framer-motion";
import { Camera, Server, Brain, Activity, Target, LayoutDashboard } from "lucide-react";

const nodes = [
  { icon: Camera, label: "CCTV Cameras" },
  { icon: Server, label: "Video Processing Layer" },
  { icon: Target, label: "OpenCV Detection Engine" },
  { icon: Activity, label: "Behavior Analysis Module" },
  { icon: Brain, label: "Risk Assessment Engine" },
  { icon: LayoutDashboard, label: "Teacher Dashboard" },
];

export default function TechnicalArchitecture() {
  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Technical <span className="text-primary glow">Architecture</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical flow line for mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-10 w-1 bg-white/10 rounded-full" />
          <div className="md:hidden absolute top-0 bottom-0 left-10 w-1 overflow-hidden rounded-full">
             <motion.div 
               animate={{ y: ["-100%", "400%"] }}
               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
               className="w-full h-1/4 bg-gradient-to-b from-transparent via-primary to-transparent"
             />
          </div>

          {/* Horizontal flow line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-white/10 rounded-full" />
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 overflow-hidden rounded-full">
             <motion.div 
               animate={{ x: ["-100%", "400%"] }}
               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
               className="w-1/4 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
             />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex flex-row md:flex-col items-center gap-6 md:gap-4 group"
              >
                <div className="w-20 h-20 shrink-0 glass-panel rounded-2xl flex items-center justify-center border-primary/30 group-hover:border-primary transition-colors bg-[#050816] relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <node.icon size={32} className="text-white group-hover:text-primary transition-colors relative z-10" />
                </div>
                
                <div className="text-left md:text-center flex-1 md:w-32">
                  <span className="text-sm md:text-xs font-medium text-gray-300">{node.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
