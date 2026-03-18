"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* Absolute Minimalism Background */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none"></div>
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-heritage-gold/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl flex flex-col items-center">
        
        <motion.div
           className="space-y-12 md:space-y-16 mb-24"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-playfair text-white/50 italic leading-relaxed font-light">
            "Khán giả sẽ không nói: <br className="hidden md:block"/>
            <span className="text-white">‘Tôi vừa xem quảng cáo của Bảo Việt’</span>."
          </p>
          
          <p className="text-2xl md:text-4xl lg:text-5xl font-playfair text-white/70 italic leading-relaxed font-light">
            Họ sẽ hỏi nhau: <br className="hidden md:block"/>
            <span className="text-white font-medium">‘Năm nay bạn có xem <span className="text-heritage-gold font-bold not-italic">Chèo Di Sản</span> không?’</span>
          </p>

          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-heritage-gold/50 to-white/0 mx-auto my-12"></div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-heritage-gold leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Đây không phải là tài trợ. <br className="mb-4" />
            Đây là kiến tạo di sản.
          </h2>
        </motion.div>

        <motion.button
          className="group relative px-12 md:px-20 py-5 md:py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Button Background & Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-heritage-gold to-[#B8860B] group-hover:bg-[length:200%_auto] bg-[length:100%_auto] transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:shadow-[0_0_80px_rgba(212,175,55,1)] animate-pulse"></div>
          
          <span className="relative z-10 text-[#020617] font-playfair font-bold text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase">
            BẮT ĐẦU CHÈO
          </span>
        </motion.button>
        
      </div>
    </section>
  );
}
