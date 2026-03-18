"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ScaleCounters() {
  return (
    <section className="w-full bg-[#020813] py-24 md:py-32 relative overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#020813]">
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
            Scale of the Heritage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
            Quy Mô <span className="text-heritage-gold italic font-light">& Lịch Sử</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/0 to-heritage-gold/0 group-hover:from-heritage-gold/10 transition-colors duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
                <AnimatedCounter value={20} />
              </h3>
              <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-tight">Ghe Thi Đấu</h4>
              <p className="text-sm text-off-white/60 font-inter leading-relaxed">1 đội nam, 1 đội nữ/ghe</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/0 to-heritage-gold/0 group-hover:from-heritage-gold/10 transition-colors duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
                <AnimatedCounter value={480} prefix="~" />
              </h3>
              <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-tight">Vận Động Viên</h4>
              <p className="text-sm text-off-white/60 font-inter leading-relaxed">Phủ xanh trang phục thi đấu</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/0 to-heritage-gold/0 group-hover:from-heritage-gold/10 transition-colors duration-500 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-baseline">
                <AnimatedCounter value={10} /><span className="text-4xl">.000+</span>
              </h3>
              <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-tight">Khán Giả Trực Tiếp</h4>
              <p className="text-sm text-off-white/60 font-inter leading-relaxed">Dọc bờ sông Phú Xuân - Phu Văn Lâu</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-3 hover:border-heritage-gold/50 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center group shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/0 to-heritage-gold/0 group-hover:from-heritage-gold/10 transition-colors duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
                <AnimatedCounter value={440} prefix="~" />
              </h3>
              <h4 className="text-lg font-bold text-white mt-4 mb-2 uppercase tracking-tight">Triệu VNĐ</h4>
              <p className="text-sm text-off-white/60 font-inter leading-relaxed">Ngân Sách Tối Ưu (Cho một Festival quốc gia)</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
