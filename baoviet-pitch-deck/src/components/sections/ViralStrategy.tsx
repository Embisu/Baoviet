"use client";

import { motion } from "framer-motion";
import { Copy, Users } from "lucide-react";

export default function ViralStrategy() {
  return (
    <section className="w-full bg-deep-river py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl mx-auto"
        >
          <span className="text-heritage-gold font-inter text-sm md:text-base tracking-[0.25em] uppercase font-bold mb-4 block">
            SOCIAL & VIRAL
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Chiến Lược Mạng Xã Hội</h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Pillar 1: TikTok Challenge */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-10 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Copy size={24} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white">TikTok Challenge</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-xl text-heritage-gold font-playfair font-bold italic mb-4">#CheoDiSan</p>
                <p className="text-white/90 font-inter text-lg leading-relaxed">Gia đình quay video động tác chèo đồng điệu.</p>
              </div>
              
              <div className="flex justify-between items-center pt-8 mt-auto border-t border-white/10">
                <span className="text-off-white/70 font-inter">Mục tiêu:</span>
                <span className="text-heritage-gold font-bold text-xl">1.5 triệu UGC videos</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Influencer Strategy */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[#D4AF37]/50 transition-all duration-300 p-10 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-heritage-gold">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white">Influencer Funnel</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h4 className="text-white font-inter text-lg">Đại sứ gia đình quốc dân</h4>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20 ml-7"></div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-white">15</span>
                </div>
                <div>
                  <h4 className="text-white font-inter text-lg">KOL Huế</h4>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20 ml-7"></div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-heritage-gold/20 border border-heritage-gold/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <span className="text-xl font-bold text-heritage-gold">100+</span>
                </div>
                <div>
                  <h4 className="text-heritage-gold font-inter font-bold text-lg">KOCs toàn quốc</h4>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
