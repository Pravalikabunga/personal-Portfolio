import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

function AnimatedSection({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-mesh-dark' : 'bg-mesh-light'}`}>
      <div className="orb orb-purple w-80 h-80 top-20 -right-10" />
      <div className="orb orb-pink w-64 h-64 bottom-20 -left-10" />
      <div className="orb orb-cyan w-56 h-56 top-1/2 right-1/4" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="tag bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900 mb-4">
                <FolderOpen size={12} /> Projects
              </span>
              <h2 className="section-title gradient-text mt-3">My Work</h2>
              <p className="section-subtitle mx-auto text-center text-brand-dark dark:text-brand-light/60">
                Projects I've built — click to explore or view source code
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 150}>
                <div className="glass rounded-3xl border border-white/20 dark:border-white/10 shadow-xl card-shine overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                  {/* Project Visual Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                      }}
                    />
                    <span className="text-7xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      {project.bgPattern}
                    </span>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`tag text-xs bg-white/20 backdrop-blur-sm text-white border border-white/30`}>
                        {project.categoryIcon} {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-xl text-primary-500 dark:text-brand-light mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-dark dark:text-brand-light/60 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-brand-light/50 dark:bg-brand-dark/50 text-brand-dark dark:text-brand-light/70 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-2.5"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary-500/10 dark:border-white/10 text-brand-dark dark:text-brand-light/70 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 text-sm font-medium"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* GitHub CTA */}
          <AnimatedSection delay={400}>
            <div className="mt-16 text-center">
              <div className="glass rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-xl card-shine inline-block max-w-md w-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-500 flex items-center justify-center text-white">
                  <Github size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-500 dark:text-brand-light mb-2">See More on GitHub</h3>
                <p className="text-brand-dark dark:text-brand-light/60 text-sm mb-4">All my projects and contributions are available on my GitHub profile.</p>
                <a
                  href="https://github.com/Pravalika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Github size={16} /> Visit GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
