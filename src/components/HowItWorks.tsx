"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Eye, BellRing } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "1. Observe",
    desc: "CCTV feeds are captured in real-time, focusing on the examination environment.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: Eye,
    title: "2. Analyze",
    desc: "Computer vision continuously tracks posture, eye movement, and object interaction.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: Cpu,
    title: "3. Detect",
    desc: "The AI engine compares patterns against known cheating behaviors to flag anomalies.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20"
  },
  {
    icon: BellRing,
    title: "4. Alert",
    desc: "Invigilators receive instant silent notifications with video evidence.",
    color: "text-danger",
    bg: "bg-danger/10",
    border: "border-danger/20"
  }
];

export default function HowItWorks() {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-panel px-4 py-1.5 rounded-full text-white/70 font-medium text-sm mb-6">
            System Workflow
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            How The System <span className="text-primary glow">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2, ease: "easeOut" }}
              className={`glass-panel p-8 rounded-3xl border ${step.border} relative overflow-hidden group`}
            >
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl ${step.bg} transition-transform duration-500 group-hover:scale-150`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${step.color}`}>
                  <step.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
