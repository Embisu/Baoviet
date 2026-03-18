"use client";

import { motion } from "framer-motion";
import { Flag, Shirt, Trophy, Users } from "lucide-react";

export default function EventBlueprint() {
  return (
    <section className="w-full bg-[#020813] py-24 relative overflow-hidden">
      
      {/* Background line */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="max-w-4xl mx-auto"
        >
          <span className="text-heritage-gold font-inter text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4 block drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            Cấu Trúc Giải Đấu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            Nền Tảng <br className="hidden md:block" /> <span className="text-heritage-gold italic font-light">Chuyên Môn & Tổ Chức</span>
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Nội dung */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-baoviet-blue/20 flex items-center justify-center text-baoviet-blue mb-6 border border-baoviet-blue/30 group-hover:bg-baoviet-blue group-hover:text-white transition-colors duration-300">
              <Flag size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide group-hover:text-heritage-gold transition-colors duration-300">Nội Dung Thi Đấu</h3>
            <ul className="text-off-white/80 font-inter space-y-3 font-light">
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ tiền Nam & Độ tiền Nữ tách biệt</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ tiền 1-4 theo quy chuẩn điều lệ Giải</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ phối hợp Nam Nữ & Độ Phá</li>
              <li className="flex items-start gap-2 mt-4 text-heritage-gold font-semibold uppercase tracking-widest text-sm">→ Tổng cộng 8–10 nội dung tranh tài</li>
            </ul>
          </motion.div>

          {/* Card 2: Trang phục */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-heritage-gold mb-6 border border-heritage-gold/30 group-hover:bg-heritage-gold group-hover:text-black transition-colors duration-300">
              <Shirt size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide group-hover:text-heritage-gold transition-colors duration-300">Trang Phục & Nhận Diện</h3>
            <ul className="text-off-white/80 font-inter space-y-3 font-light">
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> <strong className="text-white">Đồng phục:</strong> Áo Xanh Bảo Việt (#005BAC) viền vàng cao cấp, quy chuẩn Logo Ngực & Lưng.</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> <strong className="text-white">Băng rôn:</strong> VĐV mang băng đầu trắng/xanh in dòng chữ "BAOVIET".</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> <strong className="text-white">Thiết bị:</strong> Mái chèo đồng bộ sơn xanh đậm phủ logo Bảo Việt.</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> <strong className="text-white">Ghe thi đấu:</strong> Giữ nguyên nét mộc truyền thống, dán decal sóng nước BVNT dọc sườn ghe.</li>
            </ul>
          </motion.div>

          {/* Card 3: Tổ chức */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/30 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide group-hover:text-heritage-gold transition-colors duration-300">Công Tác Phối Hợp</h3>
            <ul className="text-off-white/80 font-inter space-y-4 font-light">
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-off-white/60">Đơn vị chủ trì:</span> 
                <strong className="text-white">Sở VH & TT TP.Huế</strong>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-off-white/60">Nhà Tài Trợ Đặc Biệt:</span> 
                <strong className="text-baoviet-blue bg-white px-2 py-0.5 rounded text-sm font-bold">BẢO VIỆT NHÂN THỌ</strong>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-off-white/60">Đơn vị triển khai trực tiếp:</span> 
                <strong className="text-white">Bravo Group</strong>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-off-white/60">An ninh & Y tế:</span> 
                <strong className="text-white">Công an TP & Cano Cứu Hộ</strong>
              </li>
            </ul>
          </motion.div>

          {/* Card 4: Giải thưởng */}
          <motion.div 
            className="bg-gradient-to-br from-[#003B73]/40 to-[#005BAC]/40 backdrop-blur-xl border border-[#005BAC]/50 rounded-2xl hover:-translate-y-2 shadow-[0_0_30px_rgba(0,91,172,0.15)] transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-heritage-gold/20 flex items-center justify-center text-heritage-gold mb-6 border border-heritage-gold/50 group-hover:bg-heritage-gold group-hover:text-black transition-colors duration-300">
              <Trophy size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide group-hover:text-heritage-gold transition-colors duration-300">Cơ Cấu Giải Thưởng</h3>
            <div className="space-y-6 font-inter text-off-white/80 font-light mt-2">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-lg">Tổng Giải Tiền Mặt</span>
                <span className="font-bold text-2xl text-white">~50.000.000đ</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-lg">Giải Hiện Vật Giá Trị</span>
                <span className="font-bold text-2xl text-white">~35.000.000đ</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="uppercase text-xs tracking-[0.2em] text-heritage-gold/80 font-bold">Vinh Dự Lớn Nhất</span>
                <span className="font-playfair font-bold text-2xl text-heritage-gold italic drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                  Cúp Bảo Việt Nhân Thọ
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
