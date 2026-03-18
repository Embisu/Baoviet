"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ideas = [
  {
    tag: "Creative Idea",
    title: "GHE ẤN TƯỢNG NHẤT",
    desc: "Giải phụ khuyến khích các đội diễu hành và trang trí ghe trước giờ G. Biến mặt nước sông Hương thành một 'Lễ Hội Sắc Xanh' lộng lẫy.",
    img: "/images/5.jpg"
  },
  {
    tag: "Visual Asset",
    title: "DẤU ẤN TỪ BẦU TRỜI",
    desc: "20 ghe thi đấu tập hợp xếp thành Logo BVNT & chữ HUE khổng lồ trên mặt nước. Drone Top-Shot bắt trọn khoảnh khắc này để đẩy mạnh Viral PR.",
    img: "/images/16.webp"
  },
  {
    tag: "Ground Interaction",
    title: "CHECK-IN SÔNG HƯƠNG",
    desc: "Mở khu vực Check-in gắn Logo mạ vàng dọc công viên. Song song là tiếng MC bình luận rực lửa 'Tranh cúp Bảo Việt' loan xa khắp đôi bờ.",
    img: "/images/1.webp"
  },
  {
    tag: "Night Activation",
    title: "HUẾ THẮP SÁNG BẢO VIỆT",
    desc: "Đêm trước Ngày Khai mạc, hàng nghìn đèn hoa đăng mang logo Bảo Việt lấp lánh được thả xuống dòng sông Hương, tạo nên một nghi thức gửi gắm ước nguyện bình an đến mỗi gia đình.",
    img: "/images/14.jpg"
  },
  {
    tag: "New Touchpoint",
    title: "TRẠM THƯ CHÈO THẦM LẶNG",
    desc: "Một Booth tương tác cảm xúc nơi khán giả viết tay lời cảm ơn gửi đến 'người cầm lái' trụ cột gia đình mình, gắn lên sa bàn ghe Bảo Việt cỡ lớn.",
    img: "/images/2.webp"
  },
  {
    tag: "Sport Extension",
    title: "FAMILY RUN: ĐƯỜNG CHẠY YÊU THƯƠNG",
    desc: "Giải chạy bộ/đạp xe khởi động dọc bờ sông dành cho các gia đình, truyền cảm hứng về lối sống khỏe và tinh thần bảo vệ, đồng thời cổ vũ sức mạnh cho đường đua xanh.",
    img: "/images/12.jpg"
  },
  {
    tag: "New Experience",
    title: "RƯỚC MÁI CHÈO DI SẢN",
    desc: "Nghi thức rước 'Mái chèo Vàng Bảo Việt' qua các lăng tẩm Huế trong vòng 7 ngày trước khai mạc. Kích hoạt PR Teasing khơi dậy tinh thần dân tộc.",
    img: "/images/4.jpg" 
  }
];

const Card = ({ idea, i, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  
  // Scale down the card when it scrolls up to stack the next one
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-12 py-12 md:py-24">
       <motion.div 
         className="relative w-full max-w-6xl h-full mt-12 md:mt-24 max-h-[70vh] md:max-h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_-10px_50px_rgba(0,0,0,0.8)] border border-white/5 bg-[#0a1128]"
         style={{ scale, top: `calc(-10vh + ${i * 25}px)` }}
       >
         
         <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-[#020510] to-[#001736]">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#FADB5F] font-inter text-xs tracking-widest uppercase font-bold mb-6">
                 {idea.tag}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight uppercase tracking-tight">
              {idea.title}
            </h3>
            <p className="text-[#A0AFC0] font-inter text-lg md:text-xl font-light leading-relaxed">
              {idea.desc}
            </p>
         </div>
         
         <div className="relative h-[40vh] md:h-full md:w-1/2 overflow-hidden bg-black">
            <motion.div className="w-full h-full" style={{ scale: useTransform(progress, range, [1, 1.1]) }}>
               <Image src={idea.img} alt={idea.title} fill className="object-cover opacity-80 mix-blend-luminosity brightness-110 contrast-125" />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#001736]/90"></div>
            </motion.div>
         </div>
         
       </motion.div>
    </div>
  );
};

export default function WowActivations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [1, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="bg-[#020510] relative w-full pt-10 md:pt-20 pb-6">
      
      <motion.div 
        className="text-center mb-8 md:mb-10 px-6 sticky top-[15vh] md:top-[20vh] z-0"
        style={{ opacity: headerOpacity, y: headerY }}
      >
          <span className="text-[#D4AF37] font-inter text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4 block drop-shadow-lg">
            Hoạt động bên lề
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight md:leading-none drop-shadow-2xl">
             Bùng Nổ <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#D4AF37] italic pr-2">Ý Tưởng</span>
          </h2>
      </motion.div>

      <div className="mt-[5vh] relative z-10">
        {ideas.map((idea, i) => {
          const targetScale = 1 - ((ideas.length - i) * 0.04);
          return (
            <Card 
              key={i} 
              i={i} 
              idea={idea} 
              progress={scrollYProgress} 
              range={[i * 0.2, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>

    </section>
  );
}
