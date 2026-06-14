"use client";

import { motion } from "framer-motion";
import { Camera, Server, Coins, Expand, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Camera,
    title: "No New Infrastructure Required",
    description: "Works with your existing CCTV network. No specialized hardware needed."
  },
  {
    icon: Server,
    title: "Edge or Cloud Processing",
    description: "Flexible deployment options to meet your privacy and security requirements."
  },
  {
    icon: Coins,
    title: "Low Cost Deployment",
    description: "Fraction of the cost of hiring human invigilators for every row."
  },
  {
    icon: Expand,
    title: "Scalable Across Institutions",
    description: "Easily scales from a single examination hall to an entire university campus."
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Instant alerts allow for immediate intervention during the exam."
  },
  {
    icon: ShieldCheck,
    title: "Reduced Malpractice",
    description: "The mere presence of an AI invigilator significantly deters cheating attempts."
  }
];

export default function WhyItMatters() {
  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 scale-[0.85] md:scale-100 origin-center">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Why This <span className="text-secondary glow">Matters</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <benefit.icon size={32} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
