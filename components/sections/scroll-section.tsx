"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "framer-motion";

export default function ScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress: MotionValue<number> = useMotionValue(0);

  // Initialize scrollProgress without conditionally calling hooks
  const { scrollYProgress: scrollProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.set(scrollProgress.get()); 
    const unsubscribe = scrollProgress.on("change", (v) => scrollYProgress.set(v));
    return () => unsubscribe();
  }, [scrollProgress, scrollYProgress]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-[150vh] bg-black text-white py-20">
      <div className="sticky top-[20vh] h-[60vh] overflow-hidden">
        <div className="container mx-auto px-4 h-full relative flex flex-col justify-center">
          <motion.div className="max-w-5xl mx-auto text-center" style={{ opacity, scale }}>
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-12" style={{ y: y1 }}>
              Creating digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                experiences that matter
              </span>
            </motion.h2>
            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto" style={{ y: y2 }}>
              Our team of experts combines creativity and technology to create impactful digital
              products that drive business growth and delight users.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
