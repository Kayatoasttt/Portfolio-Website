"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      <div className="relative z-10 text-center px-6">
        <motion.p
          className="text-xs tracking-[0.25em] uppercase mb-4"
          style={{ color: "#7a6a8a" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-extralight tracking-tight"
          style={{ color: "#3a2d52", letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Gopinath Kavya
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg font-light max-w-md mx-auto leading-relaxed"
          style={{ color: "#5a4a6a" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          AI developer and designer crafting thoughtful digital experiences
          at the intersection of technology and creativity.
        </motion.p>
      </div>
    </section>
  );
}