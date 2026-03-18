"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CoreInsight() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Highlight progress from 0 to 100%
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.8, 0.9, 1, 1], [0, 1, 1, 1]); // This one stays longer

  return (
    <section ref={containerRef} className="w-full bg-[#020813] min-h-[400vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Subtle glowing orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-baoviet-blue/10 blur-[150px] rounded-full"
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.8]) }}
        />

        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          
          {/* Statement 1 */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            style={{ opacity: opacity1 }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-playfair font-medium leading-relaxed tracking-wide text-white drop-shadow-2xl">
              "Giải đua ghe 2026 không chỉ là một sự kiện thể thao truyền thống..."
            </p>
          </motion.div>

          {/* Statement 2 */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            style={{ opacity: opacity2 }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-playfair font-medium leading-relaxed tracking-wide text-white drop-shadow-2xl">
              "...mà chúng tôi kiến tạo <span className="text-heritage-gold italic">một lễ hội trên sông</span>, nơi mỗi đội đua là một câu chuyện, mỗi chiếc ghe là một tác phẩm sáng tạo."
            </p>
          </motion.div>

          {/* Statement 3 */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center"
            style={{ opacity: opacity3 }}
          >
            <p className="text-xl md:text-3xl font-inter text-off-white/80 font-light mb-8 max-w-3xl leading-relaxed">
              Dưới tảng băng kiêu hãnh là nỗi sợ câm lặng. Chiếc ghe là sinh mệnh, người cầm lái là trụ cột. Khi giông bão ập đến, ai sẽ giữ chắc tay chèo?
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FADB5F] to-[#B8860B] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Chúng ta không tài trợ một cuộc đua. <br className="hidden md:block"/>
              Chúng ta là <span className="uppercase">Mái Chèo Vô Hình.</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
