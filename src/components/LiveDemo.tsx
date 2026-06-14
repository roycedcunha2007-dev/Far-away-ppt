"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Maximize, Scan, AlertTriangle, Activity } from "lucide-react";

export default function LiveDemo() {
  const [riskScore, setRiskScore] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore((prev) => {
        const change = Math.floor(Math.random() * 20) - 5;
        let newScore = prev + change;
        if (newScore > 95) newScore = 95;
        if (newScore < 5) newScore = 5;
        return newScore;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Live AI Detection</h2>
        <p className="text-gray-400 text-xl">Real-time analysis of examination environments.</p>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel p-2 rounded-3xl border-primary/30 max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,229,255,0.1)]">
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden relative aspect-video">
            
            {/* Background Feed Simulation */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[#050816]/60 mix-blend-overlay" />
            <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)" }} />

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 flex gap-4">
              <div className="glass-panel px-3 py-1 rounded text-xs font-mono flex items-center gap-2">
                <div className="w-2 h-2 bg-danger rounded-full animate-pulse" /> LIVE
              </div>
              <div className="glass-panel px-3 py-1 rounded text-xs font-mono text-gray-400">
                CAM_04
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <div className="glass-panel px-4 py-2 rounded-xl text-right">
                <div className="text-xs text-gray-400 font-mono mb-1">GLOBAL RISK</div>
                <div className={`text-2xl font-bold font-mono transition-colors duration-500 ${riskScore > 70 ? 'text-danger glow text-shadow' : riskScore > 40 ? 'text-yellow-400' : 'text-primary'}`}>
                  {riskScore}%
                </div>
              </div>
            </div>

            {/* Bounding Boxes */}
            <motion.div 
              className="absolute top-[30%] left-[20%] w-[15%] h-[40%] border-2 border-primary/50 rounded-sm flex flex-col"
              animate={{ x: [0, 5, -2, 0], y: [0, -2, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="absolute -top-6 left-0 bg-primary/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-primary border border-primary/50 whitespace-nowrap">
                ID: 104 | NORMAL
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            </motion.div>

            <motion.div 
              className="absolute top-[40%] left-[60%] w-[12%] h-[35%] border-2 border-danger shadow-[0_0_15px_rgba(255,77,109,0.5)] rounded-sm flex flex-col"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="absolute -top-12 left-0 bg-danger/20 backdrop-blur-md px-2 py-1 text-[10px] font-mono text-danger border border-danger/50 whitespace-nowrap z-10 flex flex-col gap-1">
                <span>ID: 218 | ALERT</span>
                <span className="flex items-center gap-1"><AlertTriangle size={10}/> HEAD_ROTATION: 85%</span>
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-danger" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-danger" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-danger" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-danger" />
              
              {/* Pose Estimation Lines */}
              <svg className="absolute inset-0 w-full h-full text-danger overflow-visible">
                <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="1" />
                <circle cx="50%" cy="20%" r="3" fill="currentColor" />
                <circle cx="50%" cy="50%" r="3" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Phone Detection Object */}
            <motion.div 
              className="absolute top-[65%] left-[68%] w-[4%] h-[6%] border border-yellow-400 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            >
              <div className="absolute -bottom-6 left-0 text-[8px] font-mono text-yellow-400 bg-yellow-400/20 px-1 whitespace-nowrap border border-yellow-400/50">
                OBJ: PHONE (92%)
              </div>
            </motion.div>

            {/* Scanning Line overlay */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_20px_#00E5FF]"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <div className="absolute bottom-4 left-4 flex gap-2">
              <Scan className="text-primary opacity-50" />
              <Activity className="text-secondary opacity-50" />
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-500">
              ExamSphere Vision Engine v2.4.1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
