import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Send, User, Phone, MessageSquare, Figma } from 'lucide-react';
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

const socialProfiles = [
  {
    name: 'Behance',
    url: 'https://behance.net/Pravalika',
    icon: '🎨',
    color: 'from-primary-500 to-primary-700',
    description: 'UI/UX Design projects & case studies',
    handle: '@Pravalika',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/Pravalika',
    icon: '🏀',
    color: 'from-primary-400 to-primary-600',
    description: 'Design shots and creative work',
    handle: '@Pravalika',
  },
  {
    name: 'Figma',
    url: 'https://figma.com/@Pravalika',
    icon: '✏️',
    color: 'from-primary-600 to-primary-800',
    description: 'Design files and prototypes',
    handle: '@Pravalika',
  },
];

export default function More() {
  const [activeCert, setActiveCert] = useState(null);
  const [formData, setFormData] = useState({ name: '', contact: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', contact: '', feedback: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const openCert = (edu) => {
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
      <div className="orb orb-purple w-80 h-80 top-20 -left-10" />
      <div className="orb orb-pink w-60 h-60 bottom-40 right-0" />
      <div className="orb orb-cyan w-56 h-56 top-1/3 right-1/3" />

      <div className="relative z-10 section-padding pt-32">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* === CERTIFICATES SECTION === */}
          <section>
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="tag bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 mb-4">
                  <Award size={12} /> Certificates
                </span>
                <h2 className="section-title gradient-text mt-3">My Certificates</h2>
                <p className="section-subtitle mx-auto text-center text-brand-dark dark:text-brand-light/60">
                  Click on any certificate card to view it in full
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationData.map((edu, i) => (
                <AnimatedSection key={edu.id} delay={i * 100}>
                  <div
                    className="glass rounded-3xl border border-white/20 dark:border-white/10 shadow-xl card-shine overflow-hidden cursor-pointer group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
                    onClick={() => openCert(edu)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openCert(edu)}
                  >
                    {/* Certificate preview header */}
                    <div className={`h-32 bg-gradient-to-br ${edu.color} relative flex items-center justify-center overflow-hidden`}>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                      />
                      <span className="text-5xl drop-shadow group-hover:scale-110 transition-transform duration-300">{edu.icon}</span>
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Award size={10} className="text-white" />
                        <span className="text-white text-xs font-medium">Certificate</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span className={`tag text-xs bg-gradient-to-r ${edu.color} text-white mb-2`}>{edu.level}</span>
                      <h3 className="font-display font-bold text-sm text-primary-500 dark:text-brand-light mt-2 mb-1 leading-snug">{edu.institution}</h3>
                      <p className="text-xs text-brand-dark dark:text-brand-light/50">{edu.period}</p>
                      <div className="flex items-center gap-1 mt-3 text-primary-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view <ExternalLink size={10} />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* === SEE MY WORKS SECTION === */}
          <section>
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary-300 dark:to-primary-700" />
                  <span className="tag bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 text-sm font-semibold px-5 py-2">
                    ✨ See My More Works
                  </span>
                  <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary-300 dark:to-primary-700" />
                </div>
                <p className="text-brand-dark dark:text-brand-light/60 text-base">
                  Explore my creative work across design platforms
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-3 gap-6">
              {socialProfiles.map((profile, i) => (
                <AnimatedSection key={profile.name} delay={i * 100}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-3xl border border-white/20 dark:border-white/10 shadow-xl card-shine p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 group block"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {profile.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary-500 dark:text-brand-light mb-1">{profile.name}</h3>
                    <p className="text-primary-500 dark:text-primary-400 text-sm font-medium mb-2">{profile.handle}</p>
                    <p className="text-brand-dark dark:text-brand-light/50 text-xs leading-relaxed mb-4">{profile.description}</p>
                    <div className="flex items-center gap-1 text-xs text-brand-dark/40 dark:text-brand-light/40 group-hover:text-primary-500 transition-colors">
                      Visit Profile <ExternalLink size={10} />
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* === CONTACT FORM === */}
          <section>
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary-300 dark:to-primary-700" />
                  <span className="tag bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 text-sm font-semibold px-5 py-2">
                    💌 Wanna Connect?
                  </span>
                  <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary-300 dark:to-primary-700" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl gradient-text mt-2 mb-2">Fill out this</h2>
                <p className="text-brand-dark dark:text-brand-light/50">I'd love to hear from you! Let's build something amazing together.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="max-w-xl mx-auto">
                <div className="glass rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl shadow-primary-500/10 card-shine">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-3xl shadow-lg animate-bounce-gentle">
                        ✅
                      </div>
                      <h3 className="font-display font-bold text-2xl text-brand-dark dark:text-brand-light mb-2">Message Sent!</h3>
                      <p className="text-brand-dark/60 dark:text-brand-light/60">Thank you for reaching out. I'll get back to you soon!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark/70 dark:text-brand-light/70 mb-2">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark/40" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-light/50 dark:bg-brand-dark/50 border border-brand-red/10 dark:border-white/10 text-brand-dark dark:text-brand-light placeholder-brand-dark/40 dark:placeholder-brand-light/40 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 text-sm"
                          />
                        </div>
                      </div>

                      {/* Contact */}
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark/70 dark:text-brand-light/70 mb-2">
                          Contact Info * <span className="text-xs font-normal text-brand-dark/40">(email or phone)</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark/40" />
                          <input
                            type="text"
                            required
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            placeholder="email@example.com or +91 9XXXXXXXXX"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-light/50 dark:bg-brand-dark/50 border border-brand-red/10 dark:border-white/10 text-brand-dark dark:text-brand-light placeholder-brand-dark/40 dark:placeholder-brand-light/40 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 text-sm"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-brand-dark/70 dark:text-brand-light/70 mb-2">
                          Your Message *
                        </label>
                        <div className="relative">
                          <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-brand-dark/40" />
                          <textarea
                            required
                            rows={4}
                            value={formData.feedback}
                            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                            placeholder="Tell me about your project, opportunity, or just say hi..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-light/50 dark:bg-brand-dark/50 border border-primary-500/10 dark:border-white/10 text-brand-dark dark:text-brand-light placeholder-brand-dark/40 dark:placeholder-brand-light/40 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 text-sm resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </section>

        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />}
    </div>
  );
}
