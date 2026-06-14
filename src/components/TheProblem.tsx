"use client";

import { useRef } from "react";
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
             {/* Simulated CCTV Feed of crowded hall */}
             <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-5 gap-2 w-full h-full p-4 opacity-50">
                  {[...Array(25)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                      className="bg-gray-800 rounded-sm relative overflow-hidden"
                    >
                      {/* Randomly highlight some as suspicious */}
                      {i % 7 === 0 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 + Math.random() * 2 }}
                          className="absolute inset-0 border-2 border-danger shadow-[inset_0_0_10px_rgba(255,77,109,0.5)]"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className="absolute top-4 left-4 text-xs font-mono text-white/50 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                  CAM_01 - EXAM_HALL_A
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-danger animate-pulse bg-black/50 px-2 py-1 rounded backdrop-blur-sm flex items-center gap-2">
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
