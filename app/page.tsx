"use client";

import Hero from "@/components/sections/hero";
import WorkShowcase from "@/components/sections/work-showcase";
import ScrollSection from "@/components/sections/scroll-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <WorkShowcase />
      <ScrollSection />
      <Footer />
    </main>
  );
}
