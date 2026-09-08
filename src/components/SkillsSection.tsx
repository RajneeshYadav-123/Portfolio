"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
