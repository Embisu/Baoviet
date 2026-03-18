"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UsersRound, Settings, CheckCircle2, Building2, UserCircle } from "lucide-react";

export default function OperationStructure() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="bg-gradient-to-b from-[#020510] to-[#001736] py-32 px-6 relative w-full border-t border-white/5 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_bottom_left,_rgba(0,91,172,0.1)_0%,_transparent_50%)]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#005BAC] bg-[#005BAC]/10 px-4 py-1.5 rounded-full font-inter text-xs tracking-widest uppercase font-bold mb-6 inline-block border border-[#005BAC]/30">
            Nền tảng vận hành
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
            Công Tác <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#D4AF37] italic drop-shadow-lg">Tổ Chức</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Organization Panel (Left 8 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Row 1 */}
            <div className="bg-[#020510]/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#005BAC]/50 transition-colors shadow-lg">
               <Building2 className="text-[#4DA8DA] mb-4" size={28} />
               <p className="text-xs text-[#A0AFC0] uppercase tracking-widest font-bold mb-2">Đơn vị tổ chức</p>
               <h4 className="text-xl font-playfair font-bold text-white">Sở Văn hoá & Thể thao Huế<br/><span className="text-base text-white/70 font-inter font-normal hidden md:inline-block mt-2">Đồng hành cùng BTC Đại hội TDTT</span></h4>
            </div>

            <div className="bg-gradient-to-br from-[#003B73]/60 to-[#020510]/80 backdrop-blur-md p-6 rounded-3xl border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(0,91,172,0.3)]">
               <TrophyIcon className="text-[#FADB5F] mb-4" size={28} />
               <p className="text-xs text-[#FADB5F] uppercase tracking-widest font-bold mb-2">Nhà tài trợ & Đơn vị phối hợp</p>
               <h4 className="text-xl font-playfair font-bold text-white mb-2">Bảo Việt Nhân Thọ</h4>
               <p className="text-[#A0AFC0] font-inter text-sm">Bravo Group (Phối hợp thực hiện)</p>
            </div>

            {/* Row 2 */}
            <div className="bg-[#020510]/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#005BAC]/50 transition-colors shadow-lg">
               <Settings className="text-[#4DA8DA] mb-4" size={28} />
               <p className="text-xs text-[#A0AFC0] uppercase tracking-widest font-bold mb-4">Phụ trách chuyên môn</p>
               <ul className="space-y-2 text-white/90 font-inter text-sm md:text-base">
                 <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Trọng tài Thể Dục Thể Thao</li>
                 <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Ban điều hành đường đua</li>
                 <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Ban kỹ thuật ghe</li>
               </ul>
            </div>

            <div className="bg-[#020510]/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-red-500/30 transition-colors shadow-lg">
               <ShieldCheck className="text-red-400 mb-4" size={28} />
               <p className="text-xs text-[#A0AFC0] uppercase tracking-widest font-bold mb-4">An ninh – An toàn</p>
               <ul className="space-y-2 text-white/90 font-inter text-sm md:text-base">
                 <li className="flex gap-3"><span className="text-red-400">•</span> Lực lượng Công an TP & Bảo vệ</li>
                 <li className="flex gap-3"><span className="text-red-400">•</span> Y tế – Cấp cứu trực ban</li>
                 <li className="flex gap-3"><span className="text-red-400">•</span> Đội Cano hỗ trợ chuyên nghiệp</li>
               </ul>
            </div>
            
          </motion.div>

          {/* Rules Panel (Right 4 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 bg-gradient-to-tr from-[#121008] to-[#020510] border-2 border-[#D4AF37]/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col justify-center">
             <span className="bg-[#D4AF37]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={28} className="text-[#D4AF37]" />
             </span>
             <h3 className="text-3xl font-playfair font-bold text-[#FADB5F] mb-6 border-b border-[#D4AF37]/30 pb-4">
               Quy Định Đội Thi
             </h3>
             <div className="space-y-6">
               <div>
                  <h4 className="font-playfair font-bold text-white text-lg mb-2 flex items-center gap-2">
                     <UsersRound size={18} className="text-[#4DA8DA]" /> Cấu trúc tham dự
                  </h4>
                  <p className="text-[#A0AFC0] font-inter text-sm leading-relaxed">
                    Mỗi Đơn vị đại diện = <strong className="text-white">1 Ghe Phân hạng</strong>. <br/>
                    Định mức tối đa: <strong className="text-white">12 Vận Động Viên</strong> / lượt đua.
                  </p>
               </div>
               <div>
                  <h4 className="font-playfair font-bold text-white text-lg mb-2 flex items-center gap-2">
                     <UserCircle size={18} className="text-[#4DA8DA]" /> Cam kết VĐV
                  </h4>
                  <ul className="text-[#A0AFC0] font-inter text-sm leading-relaxed space-y-1">
                    <li>✓ Trang bị đồng phục tiêu chuẩn</li>
                    <li>✓ Đảm bảo giấy chứng nhận sức khoẻ</li>
                    <li>✓ Tuân thủ tuyệt đối điều lệ BTC</li>
                  </ul>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7c0 3.31 2.69 6 6 6s6-2.69 6-6V2Z" />
    </svg>
  )
}
