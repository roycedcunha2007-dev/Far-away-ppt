"use client";

import { motion } from "framer-motion";
import { Brain, Camera, Cpu, Network } from "lucide-react";

export default function TheBigQuestion() {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      
      {/* Intense glowing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            What if the camera wasn't just <span className="text-gray-500 line-through">watching</span>?<br />
            What if it was <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow">thinking</span>?
          </h2>
        </motion.div>

        {/* Neural Network Visualization */}
        <div className="relative mt-20 w-full max-w-5xl h-64 flex items-center justify-between px-10 md:px-0 scale-[0.8] md:scale-100">
          
          {/* Node 1: Camera */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center border-gray-700 relative group">
              <Camera size={40} className="text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute -inset-2 rounded-full border border-gray-600/50 animate-[spin_4s_linear_infinite]" />
            </div>
            <span className="font-mono text-sm text-gray-400">Passive Feed</span>
          </motion.div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gray-800 mx-4 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          {/* Node 2: Processing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center border-primary/50 relative">
              <Cpu size={40} className="text-primary" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-primary/30 border-dashed" 
              />
            </div>
            <span className="font-mono text-sm text-primary">Edge AI</span>
          </motion.div>

          {/* Connection Line */}
          <div className="flex-1 h-[2px] bg-gray-800 mx-4 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1.5 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent"
            />
          </div>

          {/* Node 3: Brain */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <div className="w-32 h-32 rounded-full bg-secondary/10 border border-secondary flex items-center justify-center relative shadow-[0_0_50px_rgba(123,97,255,0.4)]">
              <Brain size={56} className="text-secondary animate-pulse" />
              <Network size={120} className="absolute text-secondary/20 animate-[spin_20s_linear_infinite]" />
            </div>
            <span className="font-mono text-sm font-bold text-secondary glow">Active Intelligence</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
