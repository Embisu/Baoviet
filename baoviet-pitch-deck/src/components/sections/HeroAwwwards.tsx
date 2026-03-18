"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroAwwwards() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const blurOverlay = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(30px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] bg-[#020510]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Cinematic Background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-[#020510]"
          style={{ filter: blurOverlay }}
        >
          <Image
            src="/images/cover_new.jpg"
            alt="Dòng sông Hương"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-70"
          />
          {/* Luxury Mist Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020510]/80 via-[#001736]/30 to-[#020510]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020510] via-transparent to-[#020510] opacity-80"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="container relative z-10 mx-auto px-6 text-center pt-24 md:pt-32 flex flex-col items-center justify-center"
          style={{ y: yText, opacity: opacityText }}
        >
          {/* Glass Date Bar */}
          <motion.div
            className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-2 md:py-3 rounded-full border border-[#D4AF37]/30 bg-[#001736]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,59,115,0.6)] mb-6 md:mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-[#FADB5F] font-inter text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.25em] font-bold uppercase">
              06:30 – 12:00 | 02.09.2026 | SÔNG HƯƠNG, HUẾ
            </span>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-[9rem] lg:text-[12rem] font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1B8] via-[#D4AF37] to-[#8C6D1F] leading-[1.1] md:leading-none mb-6 tracking-tight md:tracking-tighter drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CHÈO DI SẢN
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <p className="text-xl md:text-3xl font-playfair text-[#F8FAFC]/90 leading-relaxed font-light drop-shadow-xl">
              Giải Vô Địch Đua Ghe Truyền Thống Cố Đô Huế 2026 
              <br/>
              <span className="text-[#D4AF37] font-semibold uppercase tracking-widest text-lg md:text-2xl mt-4 block outline-none">
                Tranh Cúp Bảo Việt Nhân Thọ
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
