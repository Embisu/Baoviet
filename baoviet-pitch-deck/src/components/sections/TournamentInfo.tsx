"use client";

import { motion } from "framer-motion";
import { Flag, Shirt, Trophy, Users } from "lucide-react";

export default function TournamentInfo() {
  return (
    <section className="w-full bg-deep-river py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <span className="text-heritage-gold font-inter text-sm md:text-base tracking-[0.2em] uppercase font-bold mb-4 block drop-shadow-md">
            Mục Tiêu & Ý Nghĩa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            Khẳng Định Tầm Vóc <br className="hidden md:block" /> Giải Đua Quốc Gia
          </h2>
          <p className="text-off-white/80 font-inter text-lg leading-relaxed max-w-2xl mx-auto">
            Nâng tầm lễ hội đua ghe truyền thống Huế thành siêu sự kiện nhân dịp Quốc Khánh 2/9, kết hợp bảo tồn văn hóa và tạo nên nền tảng truyền thông rực rỡ cho Bảo Việt Nhân Thọ.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Nội dung */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-baoviet-blue/20 flex items-center justify-center text-baoviet-blue mb-6">
              <Flag size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide">Nội Dung Thi Đấu</h3>
            <ul className="text-off-white/80 font-inter space-y-3">
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ tiền Nam & Nữ</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ tiền 1-4 theo quy chuẩn</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Độ phối hợp Nam Nữ & Độ Phá</li>
              <li className="flex items-start gap-2 mt-4 text-heritage-gold font-semibold">→ Tổng cộng 8–10 nội dung tranh tài</li>
            </ul>
          </motion.div>

          {/* Card 2: Trang phục */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-heritage-gold mb-6">
              <Shirt size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide">Trang Phục & Nhận Diện</h3>
            <ul className="text-off-white/80 font-inter space-y-3">
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Đồng phục: Áo Xanh BV (#005BAC) viền vàng, Logo Ngực & Lưng.</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Băng đầu trắng xanh in 'BAOVIET'.</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Mái chèo đồng bộ sơn xanh & logo.</li>
              <li className="flex items-start gap-2"><span className="text-heritage-gold font-bold">✓</span> Cờ vẫy BVNT chạy dọc bờ sông Hương.</li>
            </ul>
          </motion.div>

          {/* Card 3: Giải thưởng */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-6">
              <Trophy size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide">Cơ Cấu Giải Thưởng</h3>
            <div className="space-y-4 font-inter text-off-white/80">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Giải Tiền Mặt</span>
                <span className="font-bold text-white">~50.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Hiện Vật Giá Trị</span>
                <span className="font-bold text-white">~35.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="uppercase text-xs tracking-widest text-off-white/50">Cúp Vô Địch</span>
                <span className="font-playfair font-bold text-xl text-heritage-gold italic">Cúp Bảo Việt Nhân Thọ</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tổ chức */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4 tracking-wide">Công Tác Tổ Chức</h3>
            <ul className="text-off-white/80 font-inter space-y-3">
              <li className="flex items-center justify-between"><span className="text-off-white/60">Đơn vị chủ trì:</span> <strong>Sở Văn Hóa & Thể Thao Huế</strong></li>
              <li className="flex items-center justify-between"><span className="text-off-white/60">Nhà Tài Trợ Độc Quyền:</span> <strong className="text-baoviet-blue">Bảo Việt Nhân Thọ</strong></li>
              <li className="flex items-center justify-between"><span className="text-off-white/60">Đơn vị triển khai:</span> <strong>Bravo Group</strong></li>
              <li className="flex items-center justify-between"><span className="text-off-white/60">An ninh Y tế:</span> <strong>Công an TP & Đội Cứu Hộ</strong></li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
