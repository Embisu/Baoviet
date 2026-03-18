"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-deep-river">
        <Image
          src="/images/dua_22-1693633071517.jpg"
          alt="Dòng sông Hương"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-deep-river"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.p
          className="text-white/80 font-inter text-sm md:text-base tracking-[0.2em] mb-6 uppercase shadow-black/50 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          06:30 - 12:00 | 02.09.2026 | SÔNG HƯƠNG, HUẾ
        </motion.p>
        
        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-playfair font-bold text-heritage-gold mb-6 tracking-tight"
          style={{ textShadow: "0 0 40px rgba(212, 175, 55, 0.4)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          CHÈO DI SẢN
        </motion.h1>

        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-playfair text-off-white/90 leading-relaxed mb-16 shadow-black/50 drop-shadow-md">
            Giải Vô Địch Đua Ghe Truyền Thống Cố Đô Huế
            <br />
            <span className="text-heritage-gold font-semibold">Tranh Cúp Bảo Việt Nhân Thọ</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}
      >
        <span className="text-xs uppercase tracking-widest text-white/70 shadow-black drop-shadow-sm font-inter">
          Cuộn để khám phá chiến dịch
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-heritage-gold" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
