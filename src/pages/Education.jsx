import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from '../data/education';
import CertificateModal from '../components/CertificateModal';

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

export default function Education() {
  const [activeCert, setActiveCert] = useState(null);

  const openCertModal = (edu) => {
    setActiveCert({
      title: edu.degree,
      institution: edu.institution,
      file: edu.certificateFile,
      icon: edu.icon,
      color: edu.color,
      level: edu.level,
      period: edu.period,
    });
  };

  return (
    <div className="min-h-screen bg-mesh-light">
      <div className="orb orb-purple w-80 h-80 top-20 -right-20" />
      <div className="orb orb-pink w-64 h-64 bottom-20 -left-10" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="tag bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 mb-4">
                <GraduationCap size={12} /> Education
              </span>
              <h2 className="section-title gradient-text mt-3">Academic Journey</h2>
              <p className="section-subtitle mx-auto text-center">
                My educational milestones — click any card to view certificate
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-500 to-transparent -translate-x-1/2" />

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <AnimatedSection key={edu.id} delay={index * 150}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 z-10 rounded-full bg-primary-500 items-center justify-center shadow-lg text-xl text-white">
                      {edu.icon}
                    </div>

                    {/* Card */}
                    <div className="w-full md:w-[46%]">
                      <div
                        className="glass rounded-3xl p-6 border border-white/20 dark:border-white/10 shadow-xl card-shine card-hover-3d cursor-pointer group glow-border"
                        onClick={() => openCertModal(edu)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openCertModal(edu)}
                        aria-label={`View certificate for ${edu.institution}`}
                      >
                        {/* Top row */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                              {edu.icon}
                            </div>
                            <div>
                              <span className={`tag text-xs bg-gradient-to-r ${edu.color} text-white`}>{edu.level}</span>
                              <p className="text-xs text-brand-dark/50 dark:text-brand-light/50 mt-1 flex items-center gap-1">
                                📅 {edu.period}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                            <Award size={12} />
                            View Cert
                          </div>
                        </div>

                        {/* Institution */}
                        <h3 className="font-display font-bold text-lg text-primary-500 dark:text-brand-light mb-1 leading-snug">
                          {edu.institution}
                        </h3>
                        <p className="text-brand-dark dark:text-brand-light/50 text-sm mb-1">📍 {edu.location}</p>

                        {/* Degree */}
                        <p className="text-brand-dark/70 dark:text-brand-light/70 font-medium text-sm mb-4">
                          {edu.degree}
                        </p>

                        {/* Score badge */}
                        <div className="flex items-center gap-3">
                          <div className={`px-3 py-1.5 rounded-xl bg-gradient-to-r ${edu.color} text-white font-bold text-sm shadow-md`}>
                            {edu.score}
                          </div>
                          {edu.hasCertificate && (
                            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-xs font-medium">
                              <Award size={12} />
                              Certificate Available
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-brand-dark dark:text-brand-light/40 mt-3 leading-relaxed">{edu.description}</p>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className="hidden md:block w-[46%]" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <AnimatedSection delay={500}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl border border-white/20 dark:border-white/10 text-sm text-brand-dark dark:text-brand-light/60">
                <Award size={16} className="text-primary-500" />
                Click on any education card to view the corresponding certificate
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </div>
  );
}
