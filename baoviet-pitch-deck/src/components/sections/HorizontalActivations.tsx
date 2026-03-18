"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "HẠM ĐỘI BẢO VỆ THẦM LẶNG",
    description: "Dàn cano y tế & cứu hộ mang nhận diện Bảo Việt, luôn đi sát bảo vệ các tay chèo. Minh chứng sống cho triết lý đồng hành.",
    image: "/images/3-124603_268-145629.webp"
  },
  {
    id: 2,
    title: "BÙNG NỔ SẮC MÀU TỪ BẦU TRỜI",
    description: "20 ghe xếp hình Logo BVNT & chữ HUE trên mặt nước, đồng loạt nhả pháo khói Xanh/Vàng ban ngày. Drone ghi lại khoảnh khắc viral TikTok.",
    image: "/images/hai_7.webp"
  },
  {
    id: 3,
    title: "LỄ RƯỚC MÁI CHÈO DI SẢN",
    description: "7 ngày rước 'Mái chèo Vàng' qua các lăng tẩm Huế trước thềm 2/9, thu hút truyền thông báo chí mạnh mẽ.",
    image: "/images/Phu_Văn_lâu.jpg" // Using an existing architectural image for context
  }
];

export default function HorizontalActivations() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#020813]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20">
          <span className="text-heritage-gold font-inter text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4 block">
            The Ultimate Brand Activations
          </span>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] h-full pl-[5vw] md:pl-[10vw]">
          {cards.map((card, index) => (
            <div key={card.id} className="w-screen h-full flex items-center justify-center relative flex-shrink-0 p-6 md:p-24">
              
              <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,91,172,0.2)] group border border-white/5 bg-[#020813]">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                />
                
                {/* Heavy Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/60 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-heritage-gold/30 bg-heritage-gold/10 backdrop-blur-md mb-6">
                    <span className="text-heritage-gold font-inter text-xs tracking-widest uppercase font-bold">
                      Activation 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 drop-shadow-lg tracking-wide uppercase">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-xl text-off-white/90 font-inter leading-relaxed max-w-2xl font-light">
                    {card.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
