import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2 } from 'lucide-react';
import { skillsData } from '../data/skills';

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

const categoryOrder = ['languages', 'webDev', 'mobile', 'devTools', 'databases', 'design', 'testing', 'coursework', 'soft'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredCategories = activeCategory
    ? categoryOrder.filter((k) => k === activeCategory)
    : categoryOrder;

  return (
    <div className="min-h-screen bg-mesh-light">
      <div className="orb orb-purple w-80 h-80 -top-20 left-1/4" />
      <div className="orb orb-pink w-60 h-60 bottom-10 right-1/4" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="tag bg-primary-50 text-primary-600 border border-primary-100 mb-4">
                <Code2 size={12} /> Skills
              </span>
              <h2 className="section-title gradient-text mt-3">Technical Expertise</h2>
              <p className="section-subtitle mx-auto text-center text-brand-dark">
                A comprehensive look at my skills across different domains
              </p>
            </div>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${!activeCategory
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass border border-white/20 dark:border-white/10 text-brand-dark/60 dark:text-brand-light/60 hover:text-primary-500'
                  }`}
              >
                All
              </button>
              {categoryOrder.map((key) => {
                const cat = skillsData[key];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key === activeCategory ? null : key)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${activeCategory === key
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'glass border border-white/20 text-brand-dark/60 hover:text-primary-500'
                      }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="hidden sm:inline">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCategories.map((key, index) => {
              const cat = skillsData[key];
              return (
                <AnimatedSection key={key} delay={index * 80}>
                  <div className="glass rounded-3xl p-6 border border-white/20 shadow-xl card-shine h-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-lg`}>
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-primary-500">{cat.label}</h3>
                        <p className="text-xs text-brand-dark">{cat.skills.length} skills</p>
                      </div>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`skill-badge ${cat.bgLight} ${cat.bgDark} ${cat.border} ${cat.textColor} border text-xs font-medium hover:scale-105 hover:-translate-y-0.5 cursor-default`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Summary stats */}
          <AnimatedSection delay={500}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Languages', count: skillsData.languages.skills.length, icon: '💻', color: 'from-primary-600 to-primary-400' },
                { label: 'Frameworks', count: skillsData.webDev.skills.length + skillsData.mobile.skills.length, icon: '⚛️', color: 'from-primary-500 to-primary-700' },
                { label: 'Tools', count: skillsData.devTools.skills.length + skillsData.design.skills.length + skillsData.testing.skills.length, icon: '🛠️', color: 'from-primary-400 to-primary-600' },
                { label: 'Databases', count: skillsData.databases.skills.length, icon: '🗄️', color: 'from-primary-500 to-primary-300' },
              ].map(({ label, count, icon, color }) => (
                <div key={label} className="glass rounded-2xl p-5 border border-white/20 shadow-lg text-center card-shine">
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-md`}>
                    {icon}
                  </div>
                  <div className="font-display font-black text-2xl gradient-text">{count}+</div>
                  <div className="text-xs text-brand-dark mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
