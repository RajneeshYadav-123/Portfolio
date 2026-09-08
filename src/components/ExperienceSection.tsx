"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {portfolioData.experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <Briefcase size={16} />
              </div>
              
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{job.position}</h3>
                  <span className="text-[var(--accent)] text-sm font-medium mt-1 md:mt-0">{job.period}</span>
                </div>
                <div className="text-[var(--text-secondary)] font-medium mb-4">
                  {job.company} &bull; {job.location}
                </div>
                
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2">
                      <span className="text-[var(--accent)] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-[var(--text-secondary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
