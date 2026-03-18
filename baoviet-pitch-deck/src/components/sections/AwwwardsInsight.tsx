"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AwwwardsInsight() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="h-[300vh] bg-[#020510] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Animated Glow in Background */}
        <motion.div 
          className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[160px] opacity-30 mix-blend-screen pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,91,172,1) 0%, rgba(212,175,55,0.2) 60%, rgba(2,5,16,0) 100%)",
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2])
          }}
        />

        <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center justify-center gap-12">
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-medium text-[#F8FAFC] leading-[1.3] drop-shadow-2xl tracking-wide max-w-4xl"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [0, 1, 1, 0]),
              y: useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [50, 0, 0, -50]),
              filter: useTransform(scrollYProgress, [0, 0.2, 0.4, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"])
            }}
          >
             Dưới tảng băng kiêu hãnh là nỗi sợ câm lặng.<br/><br/>
             <span className="text-[#A0AFC0] text-3xl md:text-5xl block">
                Chiếc ghe là sinh mệnh, người cầm lái là trụ cột.
             </span>
          </motion.h2>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            style={{
              opacity: useTransform(scrollYProgress, [0.5, 0.7, 0.9, 1], [0, 1, 1, 1]),
              y: useTransform(scrollYProgress, [0.5, 0.7], [50, 0]),
              filter: useTransform(scrollYProgress, [0.5, 0.7], ["blur(10px)", "blur(0px)"])
            }}
          >
            <p className="text-[#A0AFC0] font-inter text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto uppercase tracking-widest">
              Khi giông bão ập đến, ai sẽ giữ chắc tay chèo?
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] leading-none drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] tracking-tighter uppercase p-4">
              CHÚNG TA LÀ <br className="hidden md:block"/> MÁI CHÈO VÔ HÌNH.
            </h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
