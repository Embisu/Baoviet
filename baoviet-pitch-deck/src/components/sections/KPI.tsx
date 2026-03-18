"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(updateCounter);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return { count, nodeRef };
}

const MetricCard = ({ value, label, suffix = "", description, delay = 0, hideCounter = false, stringValue = "" }: any) => {
  const { count, nodeRef } = useCounter(value, 2.5);

  return (
    <motion.div
      ref={nodeRef}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-heritage-gold py-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300">
        {!hideCounter ? <>{count.toLocaleString()}{suffix}</> : stringValue}
      </h3>
      <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{label}</h4>
      <p className="text-sm text-off-white/70 font-inter leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function KPI() {
  return (
    <section className="w-full relative py-24 md:py-32 overflow-hidden">
      
      {/* Background Image with heavy blur and dark overlay */}
      <div className="absolute inset-0 z-0 bg-deep-river">
        <Image
          src="/images/3-1708427208.webp"
          alt="Đua ghe dọc sông"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50 blur-md grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-deep-river"></div>
      </div>

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-heritage-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">KPI & ROI</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Tác Động Kinh Doanh</h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard 
            value={20} 
            suffix=" Triệu+" 
            label="Lượt Tiếp Cận" 
            description="Phủ sóng toàn quốc trên các nền tảng." 
            delay={0.1} 
          />
          <MetricCard 
            value={6} 
            suffix=" Triệu+" 
            label="Lượt Xem Livestream" 
            description="Lượt xem cùng lúc trên đa nền tảng ngày 02/09." 
            delay={0.2} 
          />
          <MetricCard 
            value={120} 
            suffix=" K+" 
            label="Leads Booking" 
            description="Tư vấn từ mã QR On-ground & Retargeting." 
            delay={0.3} 
          />
          <div className="md:col-span-2 lg:col-span-3">
            <MetricCard 
              hideCounter={true}
              stringValue="Chuyển dịch nhận thức"
              label="Định vị thương hiệu" 
              description="BVNT trở thành 'Người Bảo Vệ Di Sản Gia Đình' trong mắt hàng chục triệu khách hàng." 
              delay={0.4} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
