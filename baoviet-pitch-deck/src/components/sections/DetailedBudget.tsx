"use client";

import { motion } from "framer-motion";
import { DollarSign, Shirt, Ship, FileText, Pickaxe, Trophy, Mic2, Flag } from "lucide-react";

const budgetItems = [
  {
    icon: <Shirt size={24} />,
    title: "1. Trang phục VĐV",
    desc: "400 VĐV × 150.000đ (Đồng bộ Logo BVNT)",
    amount: "60.000.000đ"
  },
  {
    icon: <Ship size={24} />,
    title: "2. Hạ nề & Di chuyển",
    desc: "Ghe + Vận chuyển + Chuẩn bị kỹ thuật",
    amount: "260.000.000đ"
  },
  {
    icon: <FileText size={24} />,
    title: "3. Hồ sơ & Thủ tục",
    desc: "In ấn, Giấy tờ cấp phép tổ chức",
    amount: "10.000.000đ"
  },
  {
    icon: <Pickaxe size={24} />,
    title: "4. Quản lý – An ninh",
    desc: "Công an, Bảo vệ, Y tế phòng dịch",
    amount: "30.000.000đ"
  },
  {
    icon: <Mic2 size={24} />,
    title: "5. Sân khấu",
    desc: "Dựng rạp, Âm thanh & Backdrop",
    amount: "..."
  },
  {
    icon: <Flag size={24} />,
    title: "6. Trang trí",
    desc: "Cờ phướn, Banner, Pano dọc sông",
    amount: "..."
  },
  {
    icon: <Trophy size={24} />,
    title: "7. Giải thưởng",
    desc: "Tiền mặt & Hiện vật cho các Thứ hạng",
    amount: "80.000.000đ"
  }
];

export default function DetailedBudget() {
  return (
    <section className="bg-[#020510] py-32 px-6 relative w-full border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full font-inter text-xs tracking-widest uppercase font-bold mb-6 inline-block border border-[#D4AF37]/30">
            Dự toán chi phí
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
            Ngân Sách <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#D4AF37] italic drop-shadow-md">Tối Ưu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Detailed Table (Left 7 cols) */}
           <div className="lg:col-span-7 bg-[#001736]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-[#4DA8DA] font-inter uppercase tracking-[0.2em] text-xs font-bold mb-8">Bảng phân bổ hạng mục (Dự kiến)</h3>
              
              <div className="space-y-4">
                 {budgetItems.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                       <div className="flex items-center gap-4 mb-2 md:mb-0">
                         <div className="text-[#A0AFC0]">{item.icon}</div>
                         <div>
                            <p className="font-playfair text-white text-lg font-bold">{item.title}</p>
                            <p className="font-inter text-[#A0AFC0] text-sm hidden md:block">{item.desc}</p>
                         </div>
                       </div>
                       <div className="md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                         <span className="font-inter text-[#A0AFC0] text-sm md:hidden">{item.desc}</span>
                         <span className="font-inter font-bold text-[#FADB5F] whitespace-nowrap">{item.amount}</span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Total Summarizer (Right 5 cols) */}
           <motion.div 
             className="lg:col-span-5 bg-gradient-to-tr from-[#121008] to-[#020510] border border-[#D4AF37]/30 rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-[0_30px_60px_rgba(212,175,55,0.1)] relative overflow-hidden"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <DollarSign size={200} className="absolute -left-12 -bottom-12 text-[#D4AF37]/5 rotate-12" />
              
              <div className="relative z-10 w-full">
                 <p className="text-[#A0AFC0] font-inter text-sm uppercase tracking-widest font-bold mb-4">
                    Tổng Ngân Sách Chuyên Môn
                 </p>
                 <h3 className="text-5xl md:text-6xl font-playfair font-bold text-[#FADB5F] drop-shadow-xl mb-4 leading-none tracking-tight">
                    ~ 440 <br/> Triệu
                 </h3>
                 <p className="text-white/50 text-xs italic mb-8">Biên độ dao động (±10%)</p>

                 <div className="bg-[#020510]/80 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <p className="text-[#D4AF37] text-sm font-bold font-inter mb-2 uppercase">Brand Activation</p>
                    <p className="text-[#A0AFC0] font-light text-sm leading-relaxed">
                      Chỉ với khoản chi phí được kiểm soát chặt chẽ, Bảo Việt Nhân Thọ sẽ bao phủ toàn diện từ sân khấu, ghe đua, cho đến hàng trăm VĐV trên mặt nước sông Hương rực rỡ.
                    </p>
                 </div>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
