"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function BrandIdentity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const identities = [
    {
      title: "Trang Phục Tự Hào",
      items: [
        "Áo xanh Bảo Việt (#005BAC) viền vàng",
        "Logo BVNT nổi bật trước ngực & sau lưng",
        "Băng rôn trắng/xanh in chữ BAOVIET",
      ],
      img: "/images/3-124603_268-145629.webp",
      alt: "Trang phục VĐV"
    },
    {
      title: "Vũ Khí Lan Tỏa",
      items: [
        "Giữ nguyên cốt ván mộc truyền thống",
        "Mái chèo sơn đoạn xanh đặc trưng",
        "Cánh chèo, dán sóng nước logo nhỏ"
      ],
      img: "/images/5-dua-ghe-song-huong.jpg",
      alt: "Vũ khí mái chèo"
    },
    {
      title: "Nhận Diện Dọc Sông",
      items: [
        "Cờ vẫy BVNT chạy dọc bờ sông",
        "Khung cảnh 20 cờ đầu ghe tung bay",
        "Sân khấu & Bục giải phủ màu xanh chủ đạo"
      ],
      img: "/images/4-1156-1773225868.webp",
      alt: "Cờ và Sân khấu"
    }
  ];

  return (
    <section className="bg-[#020510] py-32 px-6 relative w-full border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-[#005BAC] bg-[#005BAC]/10 px-4 py-1.5 rounded-full font-inter text-xs tracking-widest uppercase font-bold mb-6 inline-block border border-[#005BAC]/30">
            Khẳng Định Vị Thế
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight">
            Nhận Diện <span className="text-[#4DA8DA] italic drop-shadow-[0_0_20px_rgba(77,168,218,0.5)]">Độc Bản</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {identities.map((block, idx) => (
             <motion.div key={idx} variants={itemVariants} className="flex flex-col group">
               <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border border-white/10 shadow-[0_20px_40px_rgba(0,10,25,0.7)] group-hover:border-[#005BAC]/50 transition-colors duration-500 bg-[#001736]/20">
                  <Image src={block.img} alt={block.title} fill className="object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020510] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-[-10px] w-full text-center">
                    <h3 className="text-[5rem] lg:text-[7rem] font-playfair font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none tracking-tighter">
                      0{idx + 1}
                    </h3>
                  </div>
               </div>
               
               <h3 className="text-2xl font-playfair font-bold text-[#F8FAFC] mb-4 group-hover:text-[#4DA8DA] transition-colors">{block.title}</h3>
               <ul className="space-y-3 font-inter text-[#A0AFC0] font-light">
                 {block.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                 ))}
               </ul>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
