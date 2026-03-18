"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, Video, Trophy } from "lucide-react";

export default function MediaROI() {
  return (
    <section className="w-full bg-[#020813] py-24 md:py-32 relative overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-6 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="max-w-4xl mx-auto text-center"
        >
          <span className="text-heritage-gold font-inter text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6 block drop-shadow-md">
            Media & ROI Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            Brand Activation Trên Mặt Nước <br className="hidden md:block" /> <span className="text-heritage-gold italic font-light">Độc Nhất Huế</span>
          </h2>
          <p className="text-off-white/70 font-inter text-lg">
            Chiếm lĩnh hoàn toàn mặt trận truyền thông và không gian sự kiện.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col group hover:border-baoviet-blue/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-baoviet-blue/20 flex items-center justify-center text-baoviet-blue mb-6">
              <Tv size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-3">Live Broadcast</h3>
            <p className="text-off-white/80 font-inter leading-relaxed">
              Livestream toàn bộ giải đua trên đa nền tảng. Tiếp cận hàng triệu lượt xem trực tuyến trên toàn quốc đúng dịp Lễ 2/9.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col group hover:border-[#D4AF37]/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-heritage-gold/20 flex items-center justify-center text-heritage-gold mb-6">
              <Smartphone size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-3">TikTok / Reels</h3>
            <p className="text-off-white/80 font-inter leading-relaxed">
              Bùng nổ UGC (User-Generated Content) với các khoảnh khắc nhả khói, đua ghe nước rút. Hashtags chiến dịch leo Top Trending.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col group hover:border-white/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
              <Video size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-3">Drone Top-Shots</h3>
            <p className="text-off-white/80 font-inter leading-relaxed">
              Thước phim Drone từ trên cao thu trọn đội hình ghe lướt đi dũng mãnh trên sông Hương, tạo visual mãn nhãn cho Asset thương hiệu.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-[#003B73] to-[#005BAC] backdrop-blur-lg border border-[#005BAC]/50 rounded-2xl p-8 flex flex-col group shadow-[0_0_30px_rgba(0,91,172,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-6">
              <Trophy size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-3 tracking-wide">Quyền Trị Giá Tài Trợ</h3>
            <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
              <span className="text-white/90 font-inter">Full Visual Dominance</span>
              <span className="text-heritage-gold font-bold">100% Logo</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/90 font-inter">Prize Money Contribution</span>
              <span className="text-heritage-gold font-bold">~50M VNĐ</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
