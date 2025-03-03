"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroTexts = ["creative", "bold", "strategic", "innovative"];
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Text animation variants
  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  };

  // Scroll to the work section
  const handleSeeWork = () => {
    const workSection = document.getElementById("work-section");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work-section" className="relative w-full flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-[120px]"
          initial={{ x: -300, y: -300 }}
          animate={{ x: [-300, 300, -300], y: [-300, 300, -300] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            We build{" "}
            <div className="relative inline-block h-[1.2em] overflow-hidden">
              <motion.span
                key={currentTextIndex}
                className="absolute left-0"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {heroTexts[currentTextIndex]}
              </motion.span>
            </div>
            <br />
            digital experiences
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Award-winning design studio creating next-level websites,
            digital experiences, and mobile applications.
          </p>

          <div className="flex gap-4 mt-8">
            <Button 
              onClick={handleSeeWork} 
              className="rounded-full py-6 px-8 text-lg font-medium bg-white text-black hover:bg-gray-200"
            >
              See our work
            </Button>
            <Button 
              onClick={() => router.push("/contact")} 
              variant="outline" 
              className="rounded-full py-6 px-8 text-lg font-medium border-white text-white hover:bg-white/10"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
