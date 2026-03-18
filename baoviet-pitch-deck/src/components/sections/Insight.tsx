"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Insight() {
  return (
    <section className="w-full min-h-screen bg-deep-river flex overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full min-h-screen">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen">
          <Image
            src="/images/4-diem-view-dep-ngam-song-Huong-xu-Hue-ivivu-04.jpg"
            alt="Sông Hương tĩnh lặng"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-river via-deep-river/40 to-black/20"></div>
        </div>

        {/* Right Side: Text Context */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-deep-river">
          <motion.div
            className="max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-8">
              <span className="text-heritage-gold font-inter text-xs tracking-widest uppercase font-semibold">
                Nỗi Đau Văn Hóa (The Insight)
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
              Dòng Sông, Gia Đình & <br className="hidden md:block"/>
              <span className="text-heritage-gold italic">Nỗi Sợ Câm Lặng</span>
            </h2>

            <p className="text-lg md:text-xl font-inter text-white/80 leading-relaxed font-light mb-6">
              "Ở Huế, Sông Hương là 'dòng đời'. Chiếc ghe là gia đình, và người cầm lái là trụ cột. Mỗi nhịp chèo là nỗ lực đưa gia đình tiến bước."
            </p>
            
            <p className="text-lg md:text-xl font-inter text-white/80 leading-relaxed font-light mb-6">
              Nhưng dưới tảng băng kiêu hãnh và lòng tự hào ấy là một nỗi sợ ngầm: <span className="text-white font-medium italic">"Nếu ngày mai giông bão ập đến và tôi buộc phải buông tay chèo, ai sẽ bảo vệ tương lai của các con?"</span>.
            </p>
            
            <div className="h-px w-24 bg-white/20 my-8"></div>
            
            <p className="text-base md:text-lg font-inter text-heritage-gold/90 leading-relaxed font-medium">
              Bảo hiểm nhân thọ thường bị xem là thứ dành cho cái chết. Đã đến lúc chúng ta thay đổi điều đó.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
