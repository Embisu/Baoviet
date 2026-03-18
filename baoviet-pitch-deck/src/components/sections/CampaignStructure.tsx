"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "TEASING",
    subtitle: "Sông Hương đang gọi",
    content: "Tung clip ngắn bóng người chèo ghe trong sương. Phủ sóng PR.",
    message: "Di sản sắp thức dậy",
    align: "left"
  },
  {
    phase: "Phase 2",
    title: "EXPLOSION",
    subtitle: "Ngày 02/09",
    content: "Livestream 8 tiếng. Phủ xanh mặt nước với cờ vẫy, băng rôn, và trang phục thi đấu đồng bộ.",
    message: "Dù sóng lớn, hành trình vẫn tiếp tục",
    align: "right"
  },
  {
    phase: "Phase 3",
    title: "AMPLIFICATION",
    subtitle: "Di sản không dừng lại",
    content: "Tung chuỗi Documentary 'Những Gia Đình Chèo Di Sản'.",
    message: "Có những người chèo cả đời... để gia đình không chìm",
    align: "left"
  }
];

export default function CampaignStructure() {
  return (
    <section className="w-full bg-deep-river py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Cấu Trúc Chiến Dịch <span className="text-heritage-gold">IMC</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-[3px] bg-heritage-gold rounded-full shadow-[0_0_15px_#D4AF37]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {phases.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${item.align === "right" ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-[14px] md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full border-4 border-deep-river bg-heritage-gold z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Content */}
                <motion.div 
                  className={`ml-16 md:ml-0 md:w-1/2 ${item.align === "left" ? "md:pr-16" : "md:pl-16"}`}
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-2 p-8 border-l-4 border-l-baoviet-blue hover:border-l-heritage-gold">
                    <span className="text-baoviet-blue font-bold tracking-widest text-sm mb-2 block uppercase">{item.phase}</span>
                    <h3 className="text-3xl font-playfair font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-lg font-playfair italic text-heritage-gold mb-4">{item.subtitle}</h4>
                    <p className="text-off-white/80 font-inter leading-relaxed mb-6">
                      {item.content}
                    </p>
                    <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-sm text-off-white font-medium">✨ {item.message}</p>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
