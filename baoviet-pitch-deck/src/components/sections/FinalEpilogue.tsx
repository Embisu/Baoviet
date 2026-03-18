"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FinalEpilogue() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] flex flex-col items-center justify-end overflow-hidden pb-32">
       
       <motion.div 
         className="absolute inset-0 z-0 bg-[#020510]"
         style={{ scale: imgScale }}
       >
         <Image 
           src="/images/dua_22-1693633071517.jpg" 
           alt="Sông Hương chiều tà" 
           fill 
           className="object-cover opacity-60 mix-blend-luminosity brightness-75 contrast-125"
         />
         {/* Heavy vignette gradient for ending */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#020510] via-[#020510]/80 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-transparent to-transparent opacity-50"></div>
       </motion.div>

       <motion.div 
         className="relative z-10 container mx-auto px-6 text-center"
         style={{ y: yText, opacity: opacityText }}
       >
          <span className="text-[#A0AFC0] font-inter text-sm md:text-lg tracking-[0.4em] uppercase mb-8 block font-light">
             Kết Thúc Một Cuộc Đua
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-playfair font-bold text-white leading-[1.2] md:leading-[1.1] mb-12 drop-shadow-[0_0_30px_rgba(0,10,25,0.8)]">
             Hành trình <span className="text-[#D4AF37] italic">Bảo vệ & Nuôi dưỡng</span> <br className="hidden md:block"/> 
             giá trị Việt, chỉ mới <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#B8860B] border-b-2 border-[#D4AF37]/50 pb-2">Bắt đầu.</span>
          </h2>
          
          <div className="w-px h-24 md:h-32 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mb-12 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FADB5F] rounded-full shadow-[0_0_15px_rgba(250,219,95,0.8)]"></div>
          </div>

          <p className="text-[#4DA8DA] font-inter text-sm tracking-[0.3em] font-bold uppercase hover:text-white transition-colors cursor-pointer inline-block border border-[#4DA8DA]/30 px-8 py-3 rounded-full bg-[#005BAC]/20 backdrop-blur-md">
            Tranh Cúp Bảo Việt Nhân Thọ 2026
          </p>
       </motion.div>

    </section>
  );
}
