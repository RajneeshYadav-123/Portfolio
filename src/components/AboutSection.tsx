"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          {portfolioData.personal.aboutHeading}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="space-y-6">
            {portfolioData.personal.aboutText.map((paragraph, index) => (
              <p key={index} className="text-[var(--text-secondary)] text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-6">
            {portfolioData.statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border-[var(--card-border)] flex flex-col items-center justify-center text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
