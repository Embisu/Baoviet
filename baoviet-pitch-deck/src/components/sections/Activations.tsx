"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const activations = [
  {
    title: "Cổng Di Sản",
    subtitle: "Block 1",
    content: "Cổng LED phao khổng lồ trên sông. Mọi ghe lướt qua dưới dòng chữ 'Bảo Việt Nhân Thọ'.",
    image: "/images/4-1156-1773225868.webp", 
    align: "text-left"
  },
  {
    title: "Trạm Thư Di Sản",
    subtitle: "Block 2",
    content: "Gia đình viết thư tay niêm phong vào capsule. Quét mã QR lưu trữ số hóa -> Bridge chuyển đổi data tư vấn.",
    image: "/images/3-124603_268-145629.webp", 
    align: "text-right"
  },
  {
    title: "Thử Thách Gia Đình",
    subtitle: "Block 3",
    content: "Giả lập ghe tương tác màn hình LED. Cấp chứng nhận 'Gia đình Chèo Di Sản'.",
    image: "/images/Phu_Văn_lâu.jpg", 
    align: "text-left"
  }
];

export default function Activations() {
  return (
    <section className="w-full bg-deep-river py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Trải Nghiệm <span className="text-heritage-gold">Điểm Chạm</span></h2>
          <p className="text-off-white/70">Biến khán giả thi đấu thành những người kiến tạo di sản.</p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-24">
          {activations.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className={`flex flex-col md:flex-row items-stretch gap-12 ${isEven ? "md:flex-row-reverse" : ""}`}>
                {/* Image Side */}
                <motion.div 
                  className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-2"
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-baoviet-blue/10 mix-blend-overlay"></div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  className="w-full md:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                    <span className="text-heritage-gold font-bold tracking-widest text-sm mb-2 block uppercase">{item.subtitle}</span>
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">{item.title}</h3>
                    <p className="text-lg text-off-white/80 font-inter leading-relaxed max-w-md">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
