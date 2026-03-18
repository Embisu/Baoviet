"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "1. MỒI LỬA TỰ HÀO",
    time: "Trước sự kiện (Tháng 8/2026)",
    content: "Lễ rước '#Mái_Chèo_Vàng' qua các địa danh lịch sử Huế. Khởi động vòng sáng tạo Video TikTok 'Nhịp Chèo Quê Hương' để viral tinh thần văn hóa trước giờ G.",
    align: "left"
  },
  {
    title: "2. BÙNG NỔ MẶT NƯỚC",
    time: "Ngày Quốc Khánh 02.09.2026",
    content: "Trực diện 20 ghe đua khoác áo Bảo Việt rực sáng dòng Sông Hương. Tổ chức 'Trạm Thư Chèo Thầm Lặng' ngay tại bờ sông đón khán giả tương tác.",
    align: "right"
  },
  {
    title: "3. ÂM VANG DI SẢN",
    time: "Sau sự kiện (Tháng 9 - 10/2026)",
    content: "Chuỗi bài PR phân tích chiều sâu gắp kết tình yêu gia đình từ hình ảnh những 'bạn chèo'. Gửi thiệp cám ơn điện tử từ BVNT đến hơn 10.000 khán giả check-in tham dự.",
    align: "left"
  }
];

export default function JourneyTouchpoints() {
  return (
    <section className="bg-[#020510] py-40 px-6 relative w-full overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent opacity-30"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#005BAC] bg-[#005BAC]/10 px-4 py-1.5 rounded-full font-inter text-xs tracking-widest uppercase font-bold mb-6 inline-block border border-[#005BAC]/30">
            Hành Trình Chiến Dịch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight">
            Điểm Chạm <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#D4AF37] italic">Cảm Xúc</span>
          </h2>
        </div>

        <div className="relative">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 ${phase.align === "right" ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
               <div className="md:w-[45%] text-center md:text-left bg-[#001736]/30 p-8 rounded-3xl border border-[#005BAC]/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,59,115,0.2)] hover:border-[#D4AF37]/40 transition-colors">
                  <p className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] font-bold uppercase mb-3">{phase.time}</p>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-[#A0AFC0] font-light leading-relaxed font-inter">{phase.content}</p>
               </div>
               
               {/* Center Timeline Dot */}
               <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#020510] border-2 border-[#D4AF37] rounded-full items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)] z-20">
                  <div className="w-4 h-4 rounded-full bg-[#FADB5F]"></div>
               </div>

               <div className="md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
