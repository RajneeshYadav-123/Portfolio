"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <p className="text-lg md:text-xl text-[var(--accent)] mb-4 font-medium">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {portfolioData.personal.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-gradient font-bold mb-6">
            {portfolioData.personal.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-lg">
            {portfolioData.personal.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="/Resume_Rajneesh_Yadav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[var(--accent)]/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-4 border-[var(--accent)]/50 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Soft background glow */}
            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-3xl" />

            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center z-10">
              <img src="/rajneesh.jpeg" alt="Rajneesh Yadav" className="w-full h-full object-cover" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-lg glass rotate-12"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full glass"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
