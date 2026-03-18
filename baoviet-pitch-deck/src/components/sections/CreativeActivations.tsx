"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const activations = [
  {
    id: 1,
    tag: "Creative Idea (Docx)",
    title: "GHE ẤN TƯỢNG NHẤT",
    description: "Giải phụ khuyến khích các đội diễu hành và trang trí ghe trước giờ G. Biến mặt nước sông Hương thành một 'Festival Visual' đầy rực rỡ mang dấn ấn màu sắc đặc trưng của mỗi đội phối cùng sắc xanh Bảo Việt.",
    image: "/images/5-dua-ghe-song-huong.jpg"
  },
  {
    id: 2,
    tag: "Visual Asset (Docx)",
    title: "DẤU ẤN TỪ BẦU TRỜI",
    description: "20 ghe thi đấu tập hợp xếp thành Logo BVNT & chữ HUE khổng lồ trên mặt nước. Drone Top-Shot bắt trọn khoảnh khắc này để đẩy mạnh Viral PR & TikTok.",
    image: "/images/hai_7.webp"
  },
  {
    id: 3,
    tag: "New Experience",
    title: "LỄ RƯỚC MÁI CHÈO DI SẢN",
    description: "Nghi thức rước 'Mái chèo Vàng Bảo Việt' qua các lăng tẩm, đại nội Huế trong vòng 7 ngày diễn ra trước 2/9. Kích hoạt PR Teasing, khơi dậy tinh thần thể thao dân tộc.",
    image: "/images/4-diem-view-dep-ngam-song-Huong-xu-Hue-ivivu-04.jpg" 
  },
  {
    id: 4,
    tag: "Ground Interation (Docx+)",
    title: "PHOTO CHECK-IN & MC BÌNH LUẬN LIVE",
    description: "Sông Hương không chỉ có đua ghe, mà còn sôi động bởi các khu check-in mang nhận diện BVNT. Song song là tiếng bình luận rực lửa 'Tranh cúp Bảo Việt' loan xa khắp đôi bờ.",
    image: "/images/3-124603_268-145629.webp"
  },
  {
    id: 5,
    tag: "New Touchpoint",
    title: "TRẠM THƯ 'NGƯỜI CHÈO THẦM LẶNG'",
    description: "Một Booth tương tác cảm xúc đặt tại công viên Phú Xuân - nơi khán giả viết tay lời cảm ơn gửi đến 'người cầm lái' trụ cột gia đình mình, gắn lên sa bàn ghe khổng lồ.",
    image: "/images/3-1708427208.webp"
  }
];

export default function CreativeActivations() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 1 Intro + 5 Cards = 6 blocks. Total width 600vw. To see the last block fully, we translate by -(5/6) = -83.333%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.333333%"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-[#020813]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex w-[600vw] h-full">
          
          {/* Intro Block */}
          <div className="w-screen h-full flex flex-col items-start justify-center px-6 md:px-24 flex-shrink-0 relative">
            <div className="absolute inset-0 z-0">
              <Image src="/images/4-1156-1773225868.jpg" alt="Background" fill className="object-cover opacity-30 mix-blend-luminosity grayscale" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/90 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-5xl">
              <span className="text-heritage-gold font-inter text-sm md:text-base tracking-[0.4em] uppercase font-bold mb-6 block drop-shadow-lg">
                Mở rộng tầm vóc
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-playfair font-bold text-white drop-shadow-2xl leading-[1.1] tracking-tight">
                Creative <br /> Activations <br />
                <span className="italic text-white/50 text-4xl md:text-5xl lg:text-[5rem] block mt-6">
                  & Trải Nghiệm Kế Thừa
                </span>
              </h2>
            </div>
          </div>

          {/* Cards */}
          {activations.map((card, index) => (
            <div key={card.id} className="w-screen h-full flex items-center justify-center relative flex-shrink-0 p-6 md:p-16 lg:p-24">
              
              <div className="relative w-full h-full max-h-[85vh] max-w-[85vw] md:max-w-6xl rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,10,30,0.9)] group border border-white/5 bg-black">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  priority={index === 0}
                  style={{ objectFit: "cover" }} 
                  className="group-hover:scale-105 transition-transform duration-[2.5s] ease-out opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                />
                
                {/* Immersive Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 lg:p-20 w-full md:w-4/5">
                  <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-heritage-gold/30 bg-heritage-gold/10 backdrop-blur-md mb-8">
                    <span className="text-heritage-gold font-inter text-[10px] md:text-xs tracking-widest uppercase font-bold">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-2xl tracking-tight uppercase leading-none">
                    {card.title}
                  </h3>
                  <p className="text-lg md:text-2xl text-off-white/80 font-inter leading-relaxed max-w-3xl font-light">
                    {card.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Scroll helper fixed at bottom right */}
        <div className="absolute bottom-12 right-12 z-50 flex items-center gap-4 hidden md:flex">
          <span className="text-xs uppercase tracking-widest text-white/40 font-inter font-bold">Vuốt để chuyển slide</span>
          <div className="w-16 h-[1px] bg-white/40 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full w-full bg-heritage-gold"
              style={{ scaleX: scrollYProgress, originX: 0 }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
