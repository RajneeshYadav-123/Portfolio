"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, Users } from "lucide-react";

export default function BackgroundSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-20">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          Education
        </h2>
        <div className="grid gap-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="glass p-8 rounded-2xl border-[var(--card-border)] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--accent)]/30 transition-colors">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-white/5 rounded-2xl text-[var(--accent)] shrink-0 hidden md:block">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-lg text-[var(--text-secondary)] font-medium mb-1">
                    {edu.degree} in {edu.major}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">{edu.location}</p>
                </div>
              </div>
              <div className="text-left md:text-right shrink-0">
                <div className="inline-block px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] font-bold rounded-lg mb-2">
                  CGPA: {edu.cgpa}
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-medium block">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications & Leadership */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
            <Award className="text-[var(--accent)]" />
            Certifications
          </h2>
          <div className="space-y-4">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="glass p-6 rounded-2xl border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white pr-4">{cert.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded font-medium shrink-0 ${cert.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {cert.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
            <Users className="text-[var(--accent)]" />
            Leadership & Responsibility
          </h2>
          <div className="space-y-4">
            {portfolioData.leadership.map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
