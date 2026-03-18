"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function WaterRippleHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blurOverlay = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Cinematic Background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-[#020813]"
          style={{ filter: blurOverlay }}
        >
          <Image
            src="/images/dua_22-1693633071517.jpg"
            alt="Dòng sông Hương"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-70 mix-blend-luminosity"
          />
          {/* Mist / Fog Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020813]/80 via-transparent to-[#020813]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020813_100%)] opacity-90"></div>
          
          {/* Animated Fog overlay (simulated with large blurred shapes) */}
          <motion.div 
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[50%] bg-heritage-gold/5 blur-[120px] rounded-full"
            animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-[20%] -right-[10%] w-[50%] h-[60%] bg-baoviet-blue/20 blur-[150px] rounded-full"
            animate={{ x: [0, -100, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="container relative z-10 mx-auto px-6 text-center mt-12"
          style={{ y: yText, opacity: opacityText }}
        >
          {/* Glassmorphism Date Bar */}
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-heritage-gold/80 font-inter text-xs md:text-sm tracking-[0.25em] font-medium uppercase">
              02/09/2026 | 06:30 - 12:00 | Sông Hương
            </span>
          </motion.div>
          
          <motion.h1
            className="text-[4.5rem] md:text-[8rem] lg:text-[11rem] font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-b from-heritage-gold via-[#FFF1B8] to-[#997A15] leading-none mb-6 tracking-tighter"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CHÈO DI SẢN
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair text-white/90 leading-relaxed drop-shadow-lg font-light">
              Giải Vô Địch Đua Ghe Truyền Thống Cố Đô Huế 2026 
              <br/>
              <span className="text-heritage-gold font-semibold italic">Tranh Cúp Bảo Việt Nhân Thọ</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Cinematic Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-heritage-gold/0 via-heritage-gold to-heritage-gold/0 origin-bottom animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-inter">
            Khám phá
          </span>
        </motion.div>

      </div>
    </section>
  );
}
