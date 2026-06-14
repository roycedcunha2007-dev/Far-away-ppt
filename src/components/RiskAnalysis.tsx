"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Head Movement", score: 85, angle: 270 },
  { label: "Object Det.", score: 42, angle: 342 },
  { label: "Phone Det.", score: 10, angle: 54 },
  { label: "Consistency", score: 76, angle: 126 },
  { label: "Attention Tracking", score: 65, angle: 198 },
];

export default function RiskAnalysis() {
  const [globalRisk, setGlobalRisk] = useState(55);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalRisk((prev) => {
        const change = Math.floor(Math.random() * 10) - 4;
        let newScore = prev + change;
        if (newScore > 90) newScore = 90;
        if (newScore < 20) newScore = 20;
        return newScore;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-32 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Risk Analysis Engine</h2>
          <p className="text-gray-400">Multi-dimensional behavior scoring in real time.</p>
        </div>

        <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex items-center justify-center mt-10">
          
          {/* Outer rotating rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-0 border border-primary/20 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-[20px] border border-secondary/20 rounded-full"
          />
          
          {/* Central Score */}
          <div className="relative z-20 flex flex-col items-center justify-center w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full glass-panel border-primary shadow-[0_0_50px_rgba(0,229,255,0.2)]">
             <div className="text-gray-400 text-xs md:text-sm font-mono mb-1">RISK SCORE</div>
             <motion.div 
               key={globalRisk}
               initial={{ scale: 1.2, color: "#fff" }}
               animate={{ scale: 1, color: globalRisk > 70 ? "#FF4D6D" : globalRisk > 40 ? "#FBBF24" : "#00E5FF" }}
               className="text-5xl md:text-7xl font-bold font-mono"
             >
               {globalRisk}
             </motion.div>
          </div>

          {/* Orbiting Metrics */}
          {metrics.map((metric, i) => {
            const x = 50 + Math.cos((metric.angle * Math.PI) / 180) * 50;
            const y = 50 + Math.sin((metric.angle * Math.PI) / 180) * 50;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <div className="glass-panel p-3 rounded-xl border-white/10 text-center w-[100px] md:w-36 relative group backdrop-blur-xl bg-background/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="text-[10px] md:text-xs text-gray-400 mb-1 truncate">{metric.label}</div>
                  <div className="text-sm md:text-lg font-bold text-white font-mono">{metric.score}%</div>
                  
                  {/* Small progress bar */}
                  <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.score}%` }}
                      transition={{ duration: 1, delay: 1 + i * 0.1 }}
                      className={`h-full ${metric.score > 70 ? 'bg-danger' : metric.score > 40 ? 'bg-yellow-400' : 'bg-primary'}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
