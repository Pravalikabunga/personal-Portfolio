import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/more', label: 'More' },
];

export default function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setMobileOpen(false), [location]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled
            ? 'glass shadow-lg shadow-primary-500/10 py-3'
            : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white font-bold font-display text-lg shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow duration-300">
                        P
                    </div>
                    <span className="font-display font-bold text-xl gradient-text hidden sm:block">
                        Pravalika
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === path
                                ? 'text-primary-500 bg-primary-50'
                                : 'text-brand-dark/70 hover:text-primary-500 hover:bg-primary-50'
                                }`}
                        >
                            {label}
                            {location.pathname === path && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-dark/70 dark:text-brand-light/70 transition-all duration-200 hover:text-primary-500 hover:scale-110"
                        style={{ zIndex: 9999 }}
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileOpen && (
                <div className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`block px-6 py-3 text-sm font-medium transition-all duration-200 ${location.pathname === path
                                ? 'text-primary-500 bg-primary-50'
                                : 'text-brand-dark hover:text-primary-500 hover:bg-primary-50'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
