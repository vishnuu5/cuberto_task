"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation" 
import { Button } from "@/components/ui/button"

export default function Footer() {
  const router = useRouter();

  const revealVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  }

  const services = [
    "UX/UI Design",
    "Web Development",
    "Mobile Applications", 
    "Branding",
    "Strategy"
  ]

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold">
              <motion.div className="overflow-hidden">
                <motion.span 
                  className="inline-block"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0}
                  variants={revealVariants}
                >
                  Let&apos;s create
                </motion.span>
              </motion.div>
              <br />
              <motion.div className="overflow-hidden">
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={1}
                  variants={revealVariants}
                >
                  something amazing
                </motion.span>
              </motion.div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 mb-24">
            <div>
              <motion.h3 
                className="text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h3>
              <ul className="space-y-4">
                {services.map((service, i) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="#" 
                      className="text-lg text-gray-400 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <motion.h3 
                className="text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-400 mb-6">
                  Have a project in mind? Let&apos;s talk about how we can help you achieve your goals.
                </p>
                <Button 
                  onClick={() => router.push("/contact")} 
                  className="rounded-full py-6 px-8 text-lg font-medium bg-white text-black hover:bg-gray-200"
                >
                Contact Us
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-500 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Cuberto Clone. All rights reserved.
            </motion.p>
            
            <div className="flex space-x-6">
              {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social, i) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
