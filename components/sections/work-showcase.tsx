"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Digital Banking Experience",
    description:
      "Reimagining the future of financial services with a user-centered approach",
    category: "UX Design • Mobile App",
    image: "/assets/Digital_Banking_Experience.jpg",
  },
  {
    id: 2,
    title: "Fitness Platform",
    description:
      "Connected workout experience for the digital-first fitness generation",
    category: "Web Development • Branding",
    image: "/assets/Fitness_Platform.jpg",
  },
  {
    id: 3,
    title: "E-commerce Redesign",
    description:
      "Transforming the online shopping experience with immersive interactions",
    category: "Interaction Design • Web Development",
    image: "/assets/E-commerce_Redesign.jpg",
  },
];

export default function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Selected Work</h2>

          <div className="grid grid-cols-1 gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <Link href="#" className="block relative">
                  <div className="overflow-hidden rounded-2xl">
                    <motion.div
                      className="relative w-full aspect-[4/3]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                        <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        style={{ width: "auto", height: "auto" }}
                        className="object-cover rounded-2xl"
                        priority
                        unoptimized // Disable Next.js optimization
                        />

                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.span
                          className="text-white font-medium px-6 py-3 border border-white rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            activeIndex === index
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          View Project
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-3xl font-semibold">{project.title}</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                      {project.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
