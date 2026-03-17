import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Intro: React.FC = () => {
  const navigate = useNavigate();
  const [hasBrokenDown, setHasBrokenDown] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // 1. Car drives in with STUTTERS/JITTER
      await controls.start({
        x: ['-100%', '-60%', '-58%', '-30%', '-28%', '0%'],
        rotateZ: [0, -1, 1, -2, 2, 0],
        transition: { 
          duration: 4, 
          ease: "linear",
          times: [0, 0.4, 0.45, 0.7, 0.75, 1]
        }
      });

      // 2. Breakdown Jitters (Intense)
      await controls.start({
        x: [0, -15, 10, -10, 5, 0],
        rotateZ: [0, -4, 4, -3, 2, 0],
        transition: { duration: 1.2, ease: "easeInOut" }
      });

      // 3. Complete Breakdown (Dramatic tilt forward)
      await controls.start({
        rotateX: [0, 8],
        rotateZ: [0, -2],
        y: [0, 15],
        transition: { duration: 0.6, ease: "backOut" }
      });

      setHasBrokenDown(true);
    };

    sequence();
  }, [controls]);

  const smokeParticles = useMemo(() => {
    return [...Array(80)].map((_, i) => ({
      id: i,
      tx: Math.random() * 400 - 200,
      ty: -Math.random() * 600 - 400,
      ts: Math.random() * 8 + 4,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      size: Math.random() * 120 + 60,
      blur: Math.random() * 30 + 15,
      left: Math.random() * 40 - 20,
      wobble: Math.random() * 60 - 30,
      maxOpacity: Math.random() * 0.15 + 0.05,
    }));
  }, []);

  return (
    <div className="snap-container bg-black">
      {/* Section 1: The Breakdown (Cinematic Dark) */}
      <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden">
        {/* Road line effect */}
        <div className="absolute bottom-[30%] w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />
        
        <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center perspective-1000">
          <motion.div
            animate={controls}
            initial={{ x: '-100%' }}
            className="relative z-20"
          >
            <div className="relative">
              <img 
                src="/car_breakdown.png" 
                alt="Broken Car" 
                className="w-[650px] h-auto grayscale-[0.2] brightness-110 drop-shadow-[0_0_50px_rgba(255,255,255,0.05)] mix-blend-screen"
              />
              
              {/* Enhanced Realistic Smoke (Front/Right) */}
              {hasBrokenDown && (
                <div className="absolute top-[20%] left-[78%] pointer-events-none z-30">
                  {smokeParticles.map((p) => (
                    <div
                      key={p.id}
                      className="smoke-particle-v2 absolute rounded-full"
                      style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        background: `radial-gradient(circle at center, rgba(230, 230, 240, ${p.maxOpacity}) 0%, transparent 70%)`,
                        filter: `blur(${p.blur}px)`,
                        '--tx': `${p.tx}px`,
                        '--ty': `${p.ty}px`,
                        '--ts': p.ts,
                        '--wobble': `${p.wobble}px`,
                        '--duration': `${p.duration}s`,
                        '--delay': `${p.delay}s`,
                        '--max-opacity': p.maxOpacity,
                      } as any}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Text BELOW the car */}
          <div className="absolute bottom-[-100px] left-0 w-full flex items-center justify-center pointer-events-none z-40">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={hasBrokenDown ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-6xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,0,0,0.2)]"
            >
              Unexpected <span className="text-red-600">Breakdown?</span>
            </motion.h1>
          </div>
        </div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasBrokenDown ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center gap-2 text-slate-500 font-medium mt-12"
          >
            <p className="uppercase tracking-[0.4em] text-xs">Scroll Down</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
      </section>

      {/* Section 2: Massive Logo Section (Clean, Minimal) */}
      <section className="snap-section relative flex flex-col items-center justify-center bg-black">
        {/* Subtle white glow behind everything */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/home')}
            className="group relative"
          >
            {/* Massive Pulsing Halo */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all scale-[1.3] animate-pulse" />
            
            <div className="relative bg-white/5 backdrop-blur-3xl p-16 rounded-[6rem] shadow-[0_0_120px_rgba(0,0,0,0.6)] border border-white/10 flex items-center justify-center overflow-hidden w-[800px] h-[800px]">
              <img 
                src="/logo.jpg" 
                alt="Enter Website" 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-slate-600 uppercase tracking-[0.8em] text-xs font-light"
          >
            Click Logo to Proceed
          </motion.div>
        </div>
      </section>
    </div>
  );
};
