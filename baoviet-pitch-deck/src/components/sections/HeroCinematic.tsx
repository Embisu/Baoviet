"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroCinematic() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blurOverlay = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-[#020813]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Cinematic Background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-[#020813]"
          style={{ filter: blurOverlay }}
        >
          <Image
            src="/images/cover_new.jpg"
            alt="Dòng sông Hương"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-70 mix-blend-luminosity"
          />
          {/* Mist / Fog Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020813]/90 via-black/40 to-[#020813]"></div>
          
          {/* Animated Fog overlay (simulated with large blurred shapes) */}
          <motion.div 
            className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[60%] bg-white/5 blur-[120px] rounded-full"
            animate={{ x: [0, 100, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-baoviet-blue/20 blur-[150px] rounded-full"
            animate={{ x: [0, -100, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="container relative z-10 mx-auto px-6 text-center"
          style={{ y: yText, opacity: opacityText }}
        >
          {/* Glassmorphism Date Bar */}
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-off-white/80 font-inter text-xs md:text-sm tracking-[0.25em] font-medium uppercase">
              06:30 – 12:00 | 02.09.2026 | SÔNG HƯƠNG, HUẾ
            </span>
          </motion.div>
          
          <motion.h1
            className="text-[5rem] md:text-[9rem] lg:text-[12rem] font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] via-[#D4AF37] to-[#B8860B] leading-none mb-6 tracking-tighter drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            initial={{ opacity: 0, y: 30, filter: "blur(30px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            CHÈO DI SẢN
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-playfair text-white/90 leading-relaxed font-light">
              Giải Vô Địch Đua Ghe Truyền Thống Cố Đô Huế 2026 
              <br/>
              <span className="text-heritage-gold font-semibold uppercase tracking-widest text-lg mt-4 block">Tranh Cúp Bảo Việt Nhân Thọ</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
