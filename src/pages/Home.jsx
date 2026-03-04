import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowUpRight, ExternalLink, Award, Zap, Github, Linkedin, Mail, Instagram, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoCard = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.8,
            delay,
            type: "spring",
            stiffness: 100,
            damping: 20
        }}
        className={`bento-card p-8 group ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
    </motion.div>
);

export default function Home() {
    return (
        <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">

            {/* Background Effect */}
            <div className="mesh-gradient animate-mesh" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6 h-auto md:h-[600px]">

                    {/* Main Hero Card (2x3) */}
                    <BentoCard className="md:col-span-2 md:row-span-3 flex flex-col justify-center gap-6" delay={0.1}>
                        <div className="space-y-2">
                            <span className="text-2xl font-bold text-black">
                                Hi, I'm </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight">
                                Pravalika
                            </h1>
                        </div>

                        <div className="h-12 flex items-center text-secondary">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer', 2000,
                                    'UI/UX Enthusiast', 2000,
                                    'Automation Specialist', 2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-2xl font-bold text-secondary"
                            />
                        </div>

                        <p className="text-lg text-brand-dark max-w-md leading-relaxed">
                            I specialize in building high-performance web applications and crafting intuitive digital experiences that simplify the complex.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/projects"
                                className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-500 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary-500/20">
                                My Portfolio
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </BentoCard>

                    {/* Profile Card (2x3) */}
                    <BentoCard className="md:col-span-2 md:row-span-3 p-0 overflow-hidden group" delay={0.2}>
                        <div className="relative w-full h-full min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-10" />
                            <img
                                src="/assets/images/home-page.jpg"
                                alt="Pravalika"
                                className="w-full h-full object-cover object-center -translate-y-16 scale-110 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-115 transition-all duration-700"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />
                            <div className="absolute inset-0 hidden flex items-center justify-center bg-brand-light">
                                <span className="text-9xl font-black text-brand-dark/10">P</span>
                            </div>

                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/50 backdrop-blur-md flex items-center justify-center text-white">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Top Quality</h4>
                                        <p className="text-white/60 text-sm">Full Cycle Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Connect Card (2x2) */}
                    <BentoCard className="md:col-span-4 md:row-span-1 flex flex-col gap-4 justify-center py-6" delay={0.5}>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                            <div className="space-y-1 flex-1">
                                <h2 className="text-2xl font-display font-bold text-primary-500">Let's build something extraordinary together.</h2>
                                <p className="text-brand-dark text-sm">Available for freelance and collaborative projects. Drop a message or find me on socials.</p>
                            </div>

                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    { Icon: Github, href: "https://github.com/Pravalikabunga", color: "hover:bg-primary-600" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/pravalika-bunga/", color: "hover:bg-primary-600" },
                                    { Icon: Mail, href: "mailto:pravalikabunga@gmail.com", color: "hover:bg-primary-600" },
                                    { Icon: Instagram, href: "https://www.instagram.com/pravaaaa.lliii/", color: "hover:bg-primary-600" },
                                ].map(({ Icon, href, color }, idx) => (
                                    <a
                                        key={idx}
                                        href={href}
                                        className={`w-10 h-10 rounded-lg bg-brand-light border border-brand-red/20 flex items-center justify-center text-brand-dark/50 hover:text-white ${color} transition-all duration-300 group`}
                                    >
                                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-brand-red/10 pt-3">
                            <Link
                                to="/more"
                                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 hover:text-primary-400 transition-colors"
                            >
                                Contact Page <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </div>
    );
}
