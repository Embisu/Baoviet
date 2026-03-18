"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const moments = [
  {
    title: "UNITY ROW",
    vietnameseTitle: "Lễ Tôn Vinh",
    description: "20 ghe dừng giữa sông. 480 VĐV giơ cao mái chèo tĩnh lặng tri ân người trụ cột gia đình. Tiếng hô 'CHÈO DI SẢN' vang dội khúc sông.",
    image: "/images/3-1708427208.webp"
  },
  {
    title: "THE SHIELD",
    vietnameseTitle: "Chiếc Khiên Bảo Vệ",
    description: "Chụp ảnh Drone top-shot: 20 ghe diễu hành xếp thành Logo BVNT và chữ HUE trên mặt nước Sông Hương.",
    image: "/images/hai_7.webp"
  },
  {
    title: "GHE ẤN TƯỢNG NHẤT",
    vietnameseTitle: "Khởi Nguồn Festival",
    description: "Biến mặt nước thành Festival Visual. Các đội diễu hành giới thiệu concept ghe trang trí rực rỡ trước giờ đua.",
    image: "/images/5-dua-ghe-song-huong.jpg"
  }
];

export default function WowMoments() {
  return (
    <section className="w-full bg-deep-river py-24 md:py-32 relative">
      <div className="container relative z-10 mx-auto px-6 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Những Khoảnh Khắc <br/> <span className="text-heritage-gold italic">Bùng Nổ</span>
          </h2>
          <p className="text-off-white/70 font-inter text-lg">3 National WOW Moments tôn vinh di sản và thương hiệu.</p>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {moments.map((moment, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 group overflow-hidden flex flex-col h-[500px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full h-[55%] overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-river via-deep-river/40 to-transparent"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-end relative bg-white/5">
                <h3 className="text-2xl font-playfair font-bold text-white mb-1 tracking-wider">
                  {moment.title}
                </h3>
                <h4 className="text-sm font-inter text-heritage-gold font-bold uppercase tracking-widest mb-4">
                  {moment.vietnameseTitle}
                </h4>
                <p className="text-white/80 font-inter text-sm leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
