"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Ghe Ấn Tượng Nhất",
    description: "Diễu hành trước giờ đua biến mặt nước thành festival visual sống động.",
    image: "/images/5-dua-ghe-song-huong.jpg"
  },
  {
    id: 2,
    title: "Dấu Ấn Từ Bầu Trời",
    description: "20 ghe xếp thành Logo BVNT và chữ HUE chụp bằng Drone (Top-Shot).",
    image: "/images/hai_7.webp"
  },
  {
    id: 3,
    title: "Phủ Xanh Dòng Hương",
    description: "Cờ vẫy BVNT chạy dọc bờ sông, logo phủ kín trên từng nhịp mái chèo.",
    image: "/images/3-1708427208.webp"
  }
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]); // 3 cards = slide 2 widths over

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#020813]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20">
          <span className="text-heritage-gold/80 font-inter text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4 block">
            Visual Masterpieces
          </span>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-xl">
            WOW Moments
          </h2>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] h-full pl-[5vw] md:pl-[10vw]">
          {cards.map((card, index) => (
            <div key={card.id} className="w-screen h-full flex items-center justify-center relative flex-shrink-0 p-6 md:p-24">
              
              <div className="relative w-full max-w-6xl aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-white/5">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                  className="group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Text Content inside the image */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-4">
                    <span className="text-heritage-gold font-inter text-xs tracking-widest uppercase font-bold">
                      Moment 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-playfair font-black text-white mb-4 drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-lg text-white/80 font-inter leading-relaxed max-w-xl">
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
