"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function UltimateActivation() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Highlight progress from 0 to 100%
  const widthTransform = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full bg-black min-h-[150vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Subtle glowing orb behind the text */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-baoviet-blue/10 blur-[150px] rounded-full"
          style={{ opacity: scrollYProgress }}
        />

        <div className="container px-6 mx-auto relative z-10 max-w-5xl">
          
          <p className="text-off-white/30 font-inter uppercase tracking-[0.4em] text-sm mb-12 text-center">
            The Ultimate Brand Activation
          </p>
          
          <div className="relative text-left md:text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-black leading-tight tracking-tight">
            {/* Base Text (Dimmed) */}
            <span className="text-white/10 select-none">
              Không chỉ là một giải đua. <br className="hidden md:block"/> Đây là Brand Activation trên mặt nước độc nhất Huế.
            </span>

            {/* Overlay Text (Gold Fill) */}
            <motion.div 
              className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full text-transparent bg-clip-text bg-gradient-to-r from-heritage-gold via-[#FFF1B8] to-heritage-gold overflow-hidden whitespace-nowrap md:whitespace-normal select-none"
              style={{ 
                clipPath: useTransform(widthTransform, w => `polygon(0 0, ${w} 0, ${w} 100%, 0% 100%)`)
              }}
            >
              Không chỉ là một giải đua. <br className="hidden md:block"/> Đây là Brand Activation trên mặt nước độc nhất Huế.
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
