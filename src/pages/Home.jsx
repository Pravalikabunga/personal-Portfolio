import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter,
    Target,
    Zap,
    Award,
    ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
        className={`bento-card p-8 group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
    </motion.div>
);

export default function Home() {
    const { isDark } = useTheme();

    return (
        <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* Background Effect */}
            <div className="mesh-gradient animate-mesh" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-6 h-auto md:h-[900px]">

                    {/* Main Hero Card (2x3) */}
                    <BentoCard className="md:col-span-2 md:row-span-3 flex flex-col justify-center gap-6" delay={0.1}>
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-primary-500 font-bold tracking-widest uppercase text-xs"
                            >
                                <Zap size={14} className="fill-primary-500" />
                                Available for Projects
                            </motion.div>
                            <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight">
                                Hi, I'm <span className="gradient-text">Pravalika</span>
                            </h1>
                        </div>

                        <div className="h-12 flex items-center">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer', 2000,
                                    'UI/UX Enthusiast', 2000,
                                    'Automation Specialist', 2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-2xl font-bold text-primary-500 dark:text-brand-light"
                            />
                        </div>

                        <p className="text-lg text-brand-dark dark:text-brand-light/60 max-w-md leading-relaxed">
                            I specialize in building high-performance web applications and crafting intuitive digital experiences that simplify the complex.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/projects"
                                className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-500 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary-500/20"
                            >
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
                                src={isDark ? "/assets/profile-dark.png" : "/assets/profile-light.png"}
                                alt="Pravalika"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />
                            <div className="absolute inset-0 hidden flex items-center justify-center bg-brand-light dark:bg-brand-dark">
                                <span className="text-9xl font-black text-brand-dark/10 dark:text-brand-light/10">P</span>
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

                    {/* Stats Cards (1x2 each) */}
                    <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col justify-center items-center text-center gap-2" delay={0.3}>
                        <Award size={32} className="text-primary-500 mb-2" />
                        <div className="text-4xl font-display font-black text-primary-500 dark:text-brand-light">10+</div>
                        <div className="text-brand-dark/70 dark:text-brand-light/50 text-sm font-bold uppercase tracking-widest">Projects Completed</div>
                    </BentoCard>

                    <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col justify-center items-center text-center gap-2" delay={0.4}>
                        <Zap size={32} className="text-primary-500 mb-2" />
                        <div className="text-4xl font-display font-black text-primary-500 dark:text-brand-light">Intern</div>
                        <div className="text-brand-dark/70 dark:text-brand-light/50 text-sm font-bold uppercase tracking-widest">Ongoing Experience</div>
                    </BentoCard>

                    {/* Connect Card (2x2) */}
                    <BentoCard className="md:col-span-2 md:row-span-3 flex flex-col justify-between" delay={0.5}>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-display font-bold text-primary-500 dark:text-brand-light">Let's build something <span className="italic">extraordinary</span> together.</h2>
                            <p className="text-brand-dark dark:text-brand-light/60">Available for freelance and collaborative projects. Drop a message or find me on socials.</p>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-8">
                            {[
                                { Icon: Github, href: "https://github.com/Pravalika", color: "hover:bg-primary-800" },
                                { Icon: Linkedin, href: "https://linkedin.com/in/Pravalika", color: "hover:bg-primary-700" },
                                { Icon: Mail, href: "mailto:Pravalika@email.com", color: "hover:bg-primary-600" },
                                { Icon: Instagram, href: "#", color: "hover:bg-primary-500" }
                            ].map(({ Icon, href, color }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className={`aspect-square rounded-2xl bg-brand-light dark:bg-brand-dark border border-brand-red/10 dark:border-white/10 flex items-center justify-center text-brand-dark/50 dark:text-brand-light/50 hover:text-white ${color} transition-all duration-300 group`}
                                >
                                    <Icon size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>

                        <Link
                            to="/more"
                            className="mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 hover:text-primary-400 transition-colors"
                        >
                            Contact Page <ArrowUpRight size={16} />
                        </Link>
                    </BentoCard>

                    {/* Education Quick Link (1x1) */}
                    <BentoCard className="md:col-span-1 md:row-span-1 flex items-center justify-between p-6" delay={0.6}>
                        <div className="font-bold text-sm text-brand-dark dark:text-brand-light">Experience</div>
                        <Link to="/experience" className="p-2 rounded-full bg-primary-500 text-white hover:rotate-45 transition-transform">
                            <ExternalLink size={16} />
                        </Link>
                    </BentoCard>

                    {/* Skills Quick Link (1x1) */}
                    <BentoCard className="md:col-span-1 md:row-span-1 flex items-center justify-between p-6" delay={0.7}>
                        <div className="font-bold text-sm text-brand-dark dark:text-brand-light">Skills</div>
                        <Link to="/skills" className="p-2 rounded-full bg-primary-600 text-white hover:rotate-45 transition-transform">
                            <ExternalLink size={16} />
                        </Link>
                    </BentoCard>
                </div>
            </div>
        </div>
    );
}
