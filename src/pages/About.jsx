import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Palette, TestTube, Zap, Globe } from 'lucide-react';

const roles = [
  { icon: Globe, label: 'Full Stack Developer', color: 'from-primary-600 to-primary-400', desc: 'Building end-to-end web applications with modern frameworks' },
  { icon: Smartphone, label: 'App Developer', color: 'from-[#1e1e24] to-[#4a4a4f]', desc: 'Creating cross-platform mobile apps with React Native' },
  { icon: Palette, label: 'UI/UX Designer', color: 'from-primary-500 to-primary-700', desc: 'Designing intuitive, user-centered interfaces' },
  { icon: TestTube, label: 'Test Engineer', color: 'from-primary-400 to-primary-600', desc: 'Ensuring quality through manual & automation testing' },
];

function AnimatedSection({ children, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-mesh-light">
      {/* Orbs */}
      <div className="orb orb-purple w-96 h-96 top-10 -left-20" />
      <div className="orb orb-cyan w-64 h-64 bottom-10 right-10" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <span className="tag bg-primary-100 text-primary-600 border border-primary-200 mb-4">
                <Zap size={12} /> About Me
              </span>
              <h2 className="section-title gradient-text mt-3">Who Am I?</h2>
              <p className="section-subtitle mx-auto text-center text-brand-dark">
                Passionate developer & designer turning ideas into reality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Visual Side */}
            <AnimatedSection>
              <div className="relative">
                {/* Main card */}
                <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-lg sm:shadow-xl md:shadow-2xl card-shine">
                  {/* Avatar */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary-200">
                        <img
                          src='/assets/profile-light.png'
                          alt="Pravalika"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                        <div className="w-full h-full bg-primary-500 flex items-center justify-center" style={{ display: 'none' }}>
                          <span className="text-white font-bold text-2xl font-display">P</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary-500 rounded-full border-2 border-[var(--bg-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary-500">Pravalika</h3>
                      <p className="text-sm text-brand-dark">Full Stack Developer & Designer</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        <span className="text-xs text-brand-dark font-medium">Available for opportunities</span>
                      </div>
                    </div>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { label: 'Location', value: 'Hyderabad, India', icon: '📍' },
                      { label: 'Experience', value: '1+ Years', icon: '💼' },
                      { label: 'Degree', value: 'B.Tech AI & DS', icon: '🎓' },
                      { label: 'Focus', value: 'Full Stack & UX', icon: '🎯' },
                    ].map(({ label, value, icon }) => (
                      <div key={label} className="bg-brand-light/5 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-primary-500/5 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">{icon}</span>
                          <span className="text-xs text-brand-dark font-medium uppercase tracking-wider">{label}</span>
                        </div>
                        <p className="text-sm font-semibold text-primary-500">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 shadow-xl border border-white/20 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                      <Code2 size={12} className="sm:size-13 md:size-14 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-dark/70 transition-colors">Open Source</p>
                      <p className="text-xs text-brand-dark/40 transition-colors">Contributing & Building</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text Side */}
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="font-display font-bold text-3xl text-primary-500">
                  Crafting Digital Experiences with
                  <span className="gradient-text"> Passion & Precision</span>
                </h3>
                <p className="text-brand-dark leading-relaxed text-lg">
                  Aspiring Full Stack Web Developer, App Developer, UI/UX Designer, and Manual & Automation Tester
                  with hands-on internship experience in software development and design.
                </p>
                <p className="text-brand-dark dark:text-brand-light/60 leading-relaxed">
                  Passionate about building scalable web and mobile applications, crafting intuitive and
                  user-centered interfaces, and ensuring high-quality performance through effective manual
                  and automated testing.
                </p>
                <p className="text-brand-dark dark:text-brand-light/60 leading-relaxed">
                  Dedicated to leveraging modern technologies and best practices to deliver impactful,
                  reliable, and innovative digital solutions.
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React.js', 'Node.js', 'Python', 'Figma', 'MongoDB', 'React Native'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-50 text-primary-600 border border-primary-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Role Cards */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {roles.map(({ icon: Icon, label, color, desc }) => (
                <div key={label} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 card-shine card-hover-3d group text-center">
                  <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="sm:size-22 md:size-24 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-base text-primary-500 mb-2">{label}</h4>
                  <p className="text-xs text-brand-dark leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
