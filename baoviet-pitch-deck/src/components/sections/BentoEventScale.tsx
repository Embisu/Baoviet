"use client";

import { motion } from "framer-motion";
import { Flag, MapPin, Clock, Users, Trophy, Ship } from "lucide-react";
import Image from "next/image";

export default function BentoEventScale() {
  return (
    <section className="bg-gradient-to-b from-[#020510] via-[#000a1f] to-[#020510] py-32 px-4 md:px-6 relative w-full overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#005BAC]/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[#D4AF37] font-inter text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 block drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
               Bức Tranh Toàn Cảnh
             </span>
             <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-[#F8FAFC] to-[#A0AFC0] leading-tight md:leading-[1.1] mb-6 tracking-tight">
               Quy Mô <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#B8860B] italic drop-shadow-2xl">Lịch Sử</span>
             </h2>
             <p className="text-[#A0AFC0] font-inter text-xl max-w-3xl mx-auto font-light leading-relaxed">
               Sự kiện thể thao truyền thống lớn nhất trên sông Hương, kiến tạo một điểm chạm văn hoá & thương hiệu khổng lồ đúng nhịp Quốc Khánh 02.09.
             </p>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,_auto)]">
          
          {/* Main Card - 20 Ghe */}
          <motion.div 
            className="md:col-span-8 md:row-span-2 rounded-[2.5rem] p-8 md:p-14 relative flex flex-col justify-end overflow-hidden group shadow-[0_20px_50px_rgba(0,10,25,0.5)] border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[#001736]">
               <Image src="/images/5-dua-ghe-song-huong.jpg" alt="20 Ghe Thi đấu" fill className="object-cover opacity-50 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[2s] ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020510] via-[#020510]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 text-left">
              <div className="bg-[#D4AF37]/20 backdrop-blur-xl border border-[#D4AF37]/50 text-[#FADB5F] rounded-full px-5 py-2 inline-flex items-center gap-3 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Ship size={18} /> <span className="text-sm uppercase tracking-widest font-bold">Lực lượng nòng cốt</span>
              </div>
              <h3 className="text-6xl md:text-[6rem] font-playfair font-bold text-white leading-none mb-6 tracking-tight text-shadow-xl drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                20 Ghe Thi Đấu
              </h3>
              <p className="text-white/80 font-inter text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                Hội tụ gần <strong className="text-[#FADB5F] font-semibold text-3xl">480 VĐV</strong> (Nam & Nữ) đến từ khắp các địa phương, tham gia tranh tài trên 8-10 danh mục độ tiền khốc liệt nhất.
              </p>
            </div>
          </motion.div>

          {/* Location & Time Card */}
          <motion.div 
            className="md:col-span-4 md:row-span-1 rounded-[2.5rem] p-8 relative flex flex-col justify-center overflow-hidden border border-[#005BAC]/30 bg-gradient-to-br from-[#003B73]/40 to-[#001736]/80 backdrop-blur-lg group shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DA8DA]/10 rounded-full blur-[50px]"></div>
             <div className="flex items-start gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-[#005BAC]/40 flex items-center justify-center text-[#4DA8DA] border border-[#005BAC]/50 shadow-[0_0_15px_rgba(0,91,172,0.4)]">
                 <MapPin size={26} />
               </div>
               <div>
                 <span className="text-xs text-[#4DA8DA] uppercase tracking-widest font-bold">Địa điểm</span>
                 <h4 className="text-2xl font-playfair font-bold text-white mt-1">Sông Hương</h4>
                 <p className="text-[#A0AFC0] text-sm mt-1">Phú Xuân – Phu Văn Lâu</p>
               </div>
             </div>

             <div className="flex items-start gap-4 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#FADB5F] border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                 <Clock size={26} />
               </div>
               <div>
                 <span className="text-xs text-[#FADB5F] uppercase tracking-widest font-bold">Thời gian</span>
                 <h4 className="text-2xl font-playfair font-bold text-white mt-1">06:30 – 12:00</h4>
                 <p className="text-[#A0AFC0] text-sm mt-1">Quốc Khánh | 02.09.2026</p>
               </div>
             </div>
          </motion.div>

          {/* Audience Card */}
          <motion.div 
            className="md:col-span-4 md:row-span-1 rounded-[2.5rem] p-8 flex flex-col justify-end items-start text-left shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden relative group border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#001736]">
               <Image src="/images/song-huong-scaled.jpg" alt="Khán giả" fill className="object-cover opacity-40 mix-blend-luminosity transition-transform duration-[2s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020510] via-[#020510]/50 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full">
              <div className="bg-[#4DA8DA]/20 w-fit p-3 rounded-xl backdrop-blur-md border border-[#4DA8DA]/30 mb-4">
                <Users size={28} className="text-[#4DA8DA]" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-playfair font-bold text-white mb-2 leading-none text-shadow-lg">10.000+</h3>
              <p className="text-[#F8FAFC] text-sm uppercase tracking-widest font-bold">Khán giả vây kín 2 bờ</p>
            </div>
          </motion.div>

          {/* Budget & Prize Card (Giant Horizontal) */}
          <motion.div 
            className="md:col-span-8 md:row-span-1 border border-[#D4AF37]/30 bg-gradient-to-br from-[#121008] to-[#020510] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row shadow-[0_20px_40px_rgba(212,175,55,0.15)] relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15)_0%,_transparent_60%)]"></div>
             <Trophy size={200} className="absolute -right-8 -bottom-12 text-[#D4AF37]/10 -rotate-12 group-hover:rotate-0 transition-transform duration-[2s]" />

             <div className="w-full flex flex-col md:flex-row gap-8 justify-between relative z-10">
               
               <div className="md:w-1/2">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-[0.3em] font-bold block mb-4">Ngân Sách Tối Ưu</span>
                  <h3 className="text-5xl md:text-6xl font-playfair font-bold text-[#FADB5F] leading-none drop-shadow-md">~ 440 Triệu</h3>
                  <p className="text-[#A0AFC0] text-sm md:text-base mt-6 leading-relaxed">
                    Đã bao gồm trọn gói: Chi phí tổ chức, y tế & an ninh, trang phục VĐV đồng bộ, công tác tiền trạm và quỹ phòng trừ rủi ro.
                  </p>
               </div>

               <div className="md:w-1/2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 space-y-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                       <p className="text-[#A0AFC0] text-xs uppercase tracking-widest">Tiền Mặt</p>
                       <p className="text-white font-playfair text-2xl font-bold">~ 50.000.000đ</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                       <p className="text-[#A0AFC0] text-xs uppercase tracking-widest">Hiện Vật</p>
                       <p className="text-white font-playfair text-2xl font-bold">~ 35.000.000đ</p>
                    </div>
                  </div>
               </div>

             </div>
          </motion.div>

          {/* Rules / Categories Card */}
          <motion.div 
            className="md:col-span-4 md:row-span-1 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center bg-gradient-to-br from-[#020510] to-[#001736] shadow-[0_15px_30px_rgba(0,0,0,0.6)] overflow-hidden relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#005BAC]/30 to-transparent blur-[40px]"></div>
               <Flag size={32} className="text-[#FADB5F] mb-6 drop-shadow-[0_0_10px_rgba(250,219,95,0.6)]" />
               <h4 className="text-2xl font-playfair font-bold text-white mb-6 tracking-wide">Nội dung tranh tài</h4>
               <ul className="text-[#A0AFC0] text-sm md:text-base font-inter space-y-4 font-light">
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]"></div> 
                   Độ tiền Nam & Độ tiền Nữ
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div> 
                   Độ tiền 1 – 4 (Theo luật chuẩn)
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#F8FAFC]"></div> 
                   Độ phối hợp & Độ phá
                 </li>
               </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
