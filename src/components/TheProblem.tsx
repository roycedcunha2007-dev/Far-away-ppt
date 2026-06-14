"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { EyeOff, Users, Activity, AlertTriangle } from "lucide-react";

const stats = [
  { icon: Users, label: "Students", value: "300+", color: "text-blue-400" },
  { icon: EyeOff, label: "Invigilators", value: "4", color: "text-danger" },
  { icon: Activity, label: "Movements", value: "10,000+", color: "text-secondary" },
  { icon: AlertTriangle, label: "Blind Spots", value: "Countless", color: "text-yellow-400" },
];

const behaviors = [
  { title: "Looking left repeatedly", delay: 0 },
  { title: "Looking right repeatedly", delay: 0.1 },
  { title: "Looking down excessively", delay: 0.2 },
  { title: "Attempting to view hidden notes", delay: 0.3 },
  { title: "Secret phone usage", delay: 0.4 },
];

export default function TheProblem() {
  const [videoSrc, setVideoSrc] = useState<string | undefined>();

  useEffect(() => {
    fetch('/demo_video.mp4')
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setVideoSrc(url);
      })
      .catch(err => console.error("Error loading video blob:", err));
  }, []);

  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 scale-[0.85] md:scale-100 origin-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The Human <span className="text-danger">Limitation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A traditional examination hall presents an impossible surveillance challenge. Human invigilators cannot monitor every student simultaneously.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center group hover:border-primary/50 transition-colors duration-300"
            >
              <stat.icon size={48} className={`mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel group">
             {/* Live Demo Video Feed */}
             <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
                <video 
                  src={videoSrc || "/demo_video.mp4"}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/70 px-2 py-1 rounded backdrop-blur-sm z-20">
                  LIVE TRACKING - CAM_01
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-danger animate-pulse bg-black/70 px-2 py-1 rounded backdrop-blur-sm z-20 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-danger" /> REC
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-4">Suspicious Behaviors Missed</h3>
            {behaviors.map((behavior, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + behavior.delay }}
                className="flex items-center gap-4 glass-panel p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-danger animate-pulse shadow-[0_0_10px_rgba(255,77,109,0.8)]" />
                <span className="text-gray-300 font-medium">{behavior.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
