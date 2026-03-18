"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-deep-river/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-32 md:w-40 h-10">
            <Image 
              src="/images/9.png" 
              alt="Bảo Việt Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-heritage-gold font-playfair font-bold text-lg md:text-xl tracking-wider hidden sm:block">
            <span className="text-white/50 mx-2">|</span> CHÈO DI SẢN
          </div>
        </div>
        
        <button className="relative group px-6 py-2 rounded-full overflow-hidden bg-baoviet-blue/20 border border-baoviet-blue/50 text-white font-medium hover:text-heritage-gold transition-colors duration-300">
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-px">Duyệt Dự Án</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-heritage-gold/20 backdrop-blur-sm transition-transform duration-300 ease-out z-0"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-heritage-gold/0 group-hover:ring-heritage-gold/50 rounded-full transition-all duration-300"></div>
        </button>
      </div>
    </motion.header>
  );
}
