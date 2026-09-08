"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl border-[var(--card-border)] p-8 md:p-16 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Have an idea, opportunity, or project in mind? Let's connect.
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <a
            href={`mailto:${portfolioData.personal.contactEmail}`}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white font-medium w-full md:w-auto justify-center"
          >
            <Mail className="text-[var(--accent)]" size={20} />
            {portfolioData.personal.contactEmail}
          </a>
          <a
            href={`tel:${portfolioData.personal.contactPhone}`}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white font-medium w-full md:w-auto justify-center"
          >
            <Phone className="text-[var(--accent)]" size={20} />
            {portfolioData.personal.contactPhone}
          </a>
        </div>

        <div className="relative z-10 flex justify-center gap-6 mt-12 pt-12 border-t border-white/5">
          <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent)] hover:border-transparent transition-all border border-white/10" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent)] hover:border-transparent transition-all border border-white/10" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href={portfolioData.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent)] hover:border-transparent transition-all border border-white/10" aria-label="LeetCode">
            <SiLeetcode size={24} />
          </a>
          <a href={portfolioData.socialLinks.codechef} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent)] hover:border-transparent transition-all border border-white/10" aria-label="CodeChef">
            <SiCodechef size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
