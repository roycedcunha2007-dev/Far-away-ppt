"use client";

import { motion } from "framer-motion";
import { Camera, Video, ScanEye, Activity, AlertTriangle, Bell } from "lucide-react";

const steps = [
  { icon: Camera, title: "CCTV Camera" },
  { icon: Video, title: "Video Feed" },
  { icon: ScanEye, title: "OpenCV Processing" },
  { icon: Activity, title: "Behavior Analysis" },
  { icon: AlertTriangle, title: "Risk Assessment" },
  { icon: Bell, title: "Real-Time Alerts" },
];

export default function TheSolution() {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 scale-[0.85] md:scale-100 origin-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow">ExamSphere Vision</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A state-of-the-art AI platform that processes CCTV feeds in real time, detecting microscopic behavioral anomalies that indicate cheating.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center w-36 hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <step.icon size={40} className="text-primary mb-4 relative z-10" />
                <span className="text-sm font-medium text-gray-300 relative z-10 text-center leading-tight">{step.title}</span>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center relative w-8 md:w-12 mx-2">
                   <motion.div
                      animate={{ x: [0, 48] }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#7B61FF]"
                   />
                   <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-[1px] bg-white/10" />
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
