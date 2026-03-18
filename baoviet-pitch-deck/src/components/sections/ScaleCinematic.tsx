"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

export default function ScaleCinematic() {
  return (
    <section className="w-full bg-[#020813] py-24 md:py-32 relative overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3-1708427208.webp"
          alt="Đua ghe dọc sông"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-10 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020813] via-[#020813]/80 to-[#020813]"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-heritage-gold/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-heritage-gold/80 font-inter text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6 block">
            Impact in Numbers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
            Quy Mô & <span className="text-heritage-gold italic font-light">Sức Ảnh Hưởng</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-heritage-gold to-[#997A15] py-2 drop-shadow-2xl">
              <AnimatedCounter value={20} />
            </h3>
            <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-widest">Ghe Thi Đấu</h4>
            <p className="text-xs text-off-white/60 font-inter leading-relaxed uppercase tracking-wider">Đơn Vị Tranh Tài</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-heritage-gold to-[#997A15] py-2 drop-shadow-2xl">
              <AnimatedCounter value={480} prefix="~" />
            </h3>
            <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-widest">Vận Động Viên</h4>
            <p className="text-xs text-off-white/60 font-inter leading-relaxed uppercase tracking-wider">Lực Lượng Tham Gia</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-heritage-gold to-[#997A15] py-2 drop-shadow-2xl flex items-baseline">
              <AnimatedCounter value={10} /><span className="text-4xl">.000+</span>
            </h3>
            <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-widest">Khán Giả</h4>
            <p className="text-xs text-off-white/60 font-inter leading-relaxed uppercase tracking-wider">Trực Tiếp Tại Sông Hương</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-heritage-gold to-[#997A15] py-2 drop-shadow-2xl">
              <AnimatedCounter value={440} prefix="~" />
            </h3>
            <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-widest">Triệu VNĐ</h4>
            <p className="text-xs text-off-white/60 font-inter leading-relaxed uppercase tracking-wider">Ngân Sách Tối Ưu</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
