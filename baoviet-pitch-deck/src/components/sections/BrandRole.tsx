"use client";

import { motion } from "framer-motion";

export default function BrandRole() {
  return (
    <section className="w-full relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-[#003B73] to-[#005BAC]">
      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
           className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-12 shadow-lg"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-heritage-gold font-inter text-sm md:text-base tracking-[0.25em] uppercase font-bold">
            Tái Định Vị Thương Hiệu
          </span>
        </motion.div>

        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-12 drop-shadow-xl">
            CHÚNG TA KHÔNG TÀI TRỢ MỘT CUỘC ĐUA. <br className="hidden lg:block"/>
            CHÚNG TA LÀ <span className="text-heritage-gold">"MÁI CHÈO VÔ HÌNH"</span>.
          </h2>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 max-w-3xl mx-auto p-8 md:p-12">
            <p className="text-xl md:text-2xl font-inter font-light leading-relaxed text-white/90">
              "Không chỉ dán logo vô hồn. BVNT là điểm tựa vững chắc, bảo đảm di sản gia đình không bao giờ bị gián đoạn."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
