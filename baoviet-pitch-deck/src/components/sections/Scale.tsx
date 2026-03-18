"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCounter(end: number, start: number = 0, duration: number = 2) {
  const [count, setCount] = useState(start);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(updateCounter);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, start, duration, inView]);

  return { count, nodeRef };
}

const ScaleCard = ({ value, label, suffix = "", description, delay = 0, prefix = "" }: any) => {
  const { count, nodeRef } = useCounter(value, 0, 2.5);

  return (
    <motion.div
      ref={nodeRef}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-heritage-gold/0 to-heritage-gold/0 group-hover:from-heritage-gold/10 group-hover:to-transparent transition-colors duration-500 z-0"></div>
      
      <div className="relative z-10">
        <h3 className="text-5xl md:text-6xl font-playfair font-bold text-heritage-gold py-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
          {prefix}{count.toLocaleString()}{suffix}
        </h3>
        <h4 className="text-xl font-bold text-white mt-4 mb-2 uppercase tracking-wide">{label}</h4>
        <p className="text-sm text-off-white/70 font-inter leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Scale() {
  return (
    <section className="w-full bg-deep-river py-24 md:py-32 relative overflow-hidden">
      
      {/* Background with Dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3-1708427208.webp"
          alt="Đua ghe dọc sông"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A] via-[#040D1A]/80 to-[#040D1A]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-heritage-gold font-inter text-sm md:text-base tracking-[0.2em] uppercase font-bold mb-4 block drop-shadow-md">
            Brand Activation Trên Mặt Nước Độc Nhất Huế
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
            Quy Mô & Điểm Chạm Lịch Sử
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ScaleCard 
            value={20} 
            label="Đơn Vị Ghe" 
            description="Đội Nam & Đội Nữ tham gia tranh tài." 
            delay={0.1} 
          />
          <ScaleCard 
            prefix="~"
            value={480} 
            label="Vận Động Viên" 
            description="Trang phục Xanh BV #005BAC, viền vàng rực rỡ." 
            delay={0.2} 
          />
          <ScaleCard 
            value={10} 
            suffix=".000+" 
            label="Khán Giả Trực Tiếp" 
            description="Phủ kín hai bờ từ Phu Văn Lâu đến Phú Xuân." 
            delay={0.3} 
          />
          <ScaleCard 
            prefix="~"
            value={440} 
            suffix=" Triệu" 
            label="Ngân Sách Tối Ưu" 
            description="Ngân sách chuyên môn VNĐ cho một Festival Quốc gia." 
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
}
