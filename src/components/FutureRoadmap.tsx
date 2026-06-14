"use client";

import { motion } from "framer-motion";
import { Lock, Fingerprint, Mic, MonitorSmartphone, GraduationCap } from "lucide-react";

const features = [
  { icon: MonitorSmartphone, title: "Smart Exam Desks" },
  { icon: Fingerprint, title: "Biometric Verification" },
  { icon: Mic, title: "Noise Detection Sensors" },
  { icon: GraduationCap, title: "AI Viva Evaluator" },
];

export default function FutureRoadmap() {
  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center scale-[0.85] md:scale-100 origin-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-block glass-panel px-4 py-1.5 rounded-full text-white font-medium text-sm mb-6">
            Future Roadmap
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Round 2 Expansion</h2>
          <p className="text-gray-400">The next evolution of intelligent examination ecosystems.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-[#050816]/80 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <Lock size={24} className="text-gray-500 mb-2" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Locked</span>
              </div>

              <feature.icon size={40} className="text-secondary mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-gray-300">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
