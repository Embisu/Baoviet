"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
    stiffness: 50,
    damping: 20
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  const displayValue = useTransform(springValue, (current) => {
    return `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
