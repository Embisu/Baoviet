"use client";

import { motion } from "framer-motion";
import { Camera, Radio, Globe, Rss } from "lucide-react";

export default function EndMedia() {
  return (
    <section className="bg-[#020510] py-32 px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#005BAC] bg-[#005BAC]/10 px-4 py-1.5 rounded-full font-inter text-xs tracking-widest uppercase font-bold mb-6 inline-block border border-[#005BAC]/30">
              Truyền Thông Đa Kênh
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-8">
              Mức Độ <br/> <span className="text-[#D4AF37] italic drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">Phủ Sóng</span>
            </h2>
            <p className="text-[#A0AFC0] font-inter text-lg lg:text-xl font-light mb-12">
              Chèo Di Sản 2026 sẽ kích hoạt một chiến dịch PR và Social bùng nổ, đưa hình ảnh Bảo Việt Nhân Thọ lan tỏa xa hơn giới hạn của mặt nước Sông Hương.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                 <Radio size={32} className="text-[#4DA8DA]" />
                 <div>
                    <h4 className="text-xl font-bold font-playfair text-white mb-2">Livestream</h4>
                    <p className="text-[#A0AFC0] text-sm font-light">Phát trực tiếp toàn bộ giải đua với Logo BVNT góc màn hình.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start">
                 <Camera size={32} className="text-[#D4AF37]" />
                 <div>
                    <h4 className="text-xl font-bold font-playfair text-white mb-2">Drone & TikTok</h4>
                    <p className="text-[#A0AFC0] text-sm font-light">Short-forms phủ sóng với Top-shot xếp chữ HUE & nhận diện BVNT.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start">
                 <Globe size={32} className="text-[#005BAC]" />
                 <div>
                    <h4 className="text-xl font-bold font-playfair text-white mb-2">Báo Chí Cố Đô</h4>
                    <p className="text-[#A0AFC0] text-sm font-light">Tuyến bài PR tập trung vào sức bật văn hóa & Giá trị nhà tài trợ trên báo chí Tỉnh.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start">
                 <Rss size={32} className="text-[#A0AFC0]" />
                 <div>
                    <h4 className="text-xl font-bold font-playfair text-white mb-2">Social Fanpages</h4>
                    <p className="text-[#A0AFC0] text-sm font-light">Lan tỏa bài viết từ hàng loạt Page cộng đồng lớn tại Cố Đô.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] w-full rounded-[2rem] bg-gradient-to-tr from-[#003B73]/50 to-[#020510] border-2 border-[#D4AF37]/20 p-8 flex flex-col justify-center shadow-[0_0_50px_rgba(0,59,115,0.4)] overflow-hidden relative group">
              
              <div className="absolute inset-0 bg-[url('/images/3.webp')] bg-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>

              <div className="relative z-10 text-center">
                 <span className="text-[#D4AF37] font-inter text-xs tracking-widest uppercase font-bold mb-4 block">
                    Lời kết
                 </span>
                 <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#F8FAFC] drop-shadow-lg leading-tight mb-8">
                   "Brand Activation <br className="hidden md:block"/> trên mặt nước <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FADB5F] to-[#D4AF37]">ĐỘC NHẤT HUẾ</span>"
                 </h3>
                   <ul className="text-left font-inter text-[#A0AFC0] space-y-3 mb-6 mx-auto w-fit">
                      <li className="flex gap-3 items-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]"></div>
                         <strong>5.000 - 10.000</strong> khán giả trực tiếp
                      </li>
                      <li className="flex gap-3 items-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                         <strong>Hàng trăm nghìn</strong> views online
                      </li>
                      <li className="flex gap-3 items-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                         Logo phủ toàn bộ: <span className="text-white">Ghe - Trang phục - Sân khấu</span>
                      </li>
                   </ul>
                   <p className="text-[#FADB5F] font-playfair italic text-lg max-w-sm mx-auto font-bold px-4 border-l-2 border-[#D4AF37]/50 py-2">
                     "Brand Activation trên mặt nước độc nhất Huế"
                   </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
