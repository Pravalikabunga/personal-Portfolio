import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ArrowRight, Zap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Zenbeta Technologies',
    type: 'Full-Time',
    mode: 'Onsite',
    period: 'Oct 2025 – Present',
    duration: 'Current',
    color: 'from-primary-600 to-primary-400',
    icon: '💼',
    current: true,
    responsibilities: [
      'Leading full-stack development of scalable web applications using MERN stack',
      'Designing and implementing RESTful APIs and database schemas',
      'Building responsive, accessible UIs with React.js and Tailwind CSS',
      'Implementing testing strategies including unit tests and integration tests',
      'Collaborating with design team to deliver pixel-perfect, user-centered products',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 2,
    role: 'Intern — Software Developer',
    company: 'Zenbeta Technologies',
    type: 'Internship',
    mode: 'Onsite',
    period: 'May 2025 – Oct 2025',
    duration: '6 Months',
    color: 'from-primary-500 to-primary-700',
    icon: '🚀',
    current: false,
    responsibilities: [
      'Collaborated with the development team on real-world web application projects',
      'Worked on frontend development using React.js and modern CSS frameworks',
      'Participated in code reviews, daily standups, and agile development cycles',
      'Assisted in backend development with Node.js and Express.js',
      'Gained hands-on experience with deployment pipelines and version control',
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'Git', 'MongoDB'],
  },
];

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

export default function Experience() {
  return (
    <div className="min-h-screen bg-mesh-light">
      <div className="orb orb-purple w-80 h-80 top-20 right-0" />
      <div className="orb orb-cyan w-64 h-64 bottom-20 left-0" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="tag bg-primary-50 text-primary-600 border border-primary-100 mb-4">
                <Briefcase size={12} /> Experience
              </span>
              <h2 className="section-title gradient-text mt-3">Work Experience</h2>
              <p className="section-subtitle mx-auto text-center">
                My professional journey at Zenbeta Technologies
              </p>
            </div>
          </AnimatedSection>

          {/* Company Banner */}
          <AnimatedSection delay={100}>
            <div className="glass rounded-3xl p-6 border border-white/20 shadow-xl mb-12 card-shine">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary-500 flex items-center justify-center text-3xl shadow-lg shadow-primary-500/30 flex-shrink-0 text-white">
                  ⚡
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-display font-black text-2xl text-primary-500">Zenbeta Technologies</h3>
                  <p className="text-brand-dark mt-1">Software Development Company</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
                    <span className="tag bg-primary-50 text-primary-600 border border-primary-200 text-xs">
                      <MapPin size={10} /> Onsite, Hyderabad
                    </span>
                    <span className="tag bg-primary-50 text-primary-600 border border-primary-200 text-xs">
                      <Calendar size={10} /> May 2025 – Present
                    </span>
                    <span className="tag bg-primary-50 text-primary-600 border border-primary-200 text-xs text-white">
                      <Zap size={10} /> Intern → Full Stack Dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Experience Cards */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.id} delay={index * 200}>
                  <div className="relative md:pl-20">
                    {/* Timeline dot (desktop) */}
                    <div className={`hidden md:flex absolute left-4 top-8 w-9 h-9 -translate-x-1/2 rounded-full bg-gradient-to-br ${exp.color} items-center justify-center text-base shadow-lg z-10`}>
                      {exp.icon}
                    </div>

                    {/* Card */}
                    <div className={`glass rounded-3xl border border-white/20 shadow-xl overflow-hidden card-shine ${exp.current ? 'ring-2 ring-accent-400/40' : ''}`}>
                      {/* Current badge */}
                      {exp.current && (
                        <div className="bg-primary-500 px-4 py-1.5 flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span className="text-white text-xs font-bold uppercase tracking-wider">Current Position</span>
                        </div>
                      )}

                      <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl md:hidden">{exp.icon}</span>
                              <h3 className="font-display font-bold text-xl md:text-2xl text-primary-500">
                                {exp.role}
                              </h3>
                            </div>
                            <p className="text-brand-dark font-semibold">{exp.company}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className={`tag text-xs bg-gradient-to-r ${exp.color} text-white`}>{exp.type}</span>
                            <span className="tag bg-brand-light/50 text-brand-dark text-xs">
                              <MapPin size={10} /> {exp.mode}
                            </span>
                          </div>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 mb-5 text-brand-dark/50 text-sm">
                          <Calendar size={14} />
                          <span className="font-medium">{exp.period}</span>
                          <span className="px-2 py-0.5 rounded-md bg-brand-light/50 text-xs">{exp.duration}</span>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2 mb-6">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-brand-dark text-sm">
                              <ArrowRight size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                              {resp}
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-lg bg-primary-50 text-primary-600 border border-primary-200 text-xs font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
