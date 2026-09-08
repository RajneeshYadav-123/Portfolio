"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          Achievements & Milestones
        </h2>

        <div className="grid gap-4">
          {portfolioData.achievements.map((achievement, index) => {
            // Extract the highlighted numbers from the string for visual emphasis
            const parts = achievement.split(/(1100\+|1700\+|5th|100\+|3,600\+)/g);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 glass p-6 rounded-2xl border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors"
              >
                <div className="p-3 bg-[var(--accent)]/10 rounded-xl text-[var(--accent)] shrink-0 mt-1">
                  <Trophy size={24} />
                </div>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {parts.map((part, i) => (
                    <span key={i} className={/(1100\+|1700\+|5th|100\+|3,600\+)/.test(part) ? "text-[var(--accent)] font-bold" : ""}>
                      {part}
                    </span>
                  ))}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
