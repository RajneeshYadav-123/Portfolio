"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[var(--accent)]"></span>
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl border-[var(--card-border)] overflow-hidden flex flex-col hover:border-[var(--accent)]/30 transition-all"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.githubLink} className="text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.liveLink} className="text-[var(--text-secondary)] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-xs text-[var(--accent)] font-medium mb-6">{project.period}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2">
                      <span className="text-[var(--accent)] mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 py-5 bg-white/[0.02] border-t border-[var(--card-border)] flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[var(--text-secondary)]">
                    {tech}{i < project.tech.length - 1 && <span className="mx-2 text-white/20">|</span>}
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
