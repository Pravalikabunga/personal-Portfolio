import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="relative glass dark:bg-brand-dark rounded-3xl p-3 sm:p-4 md:p-6 max-w-sm sm:max-w-3xl w-[90vw] sm:w-full mx-2 sm:mx-4 shadow-2xl shadow-primary-500/20 border border-white/20 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeInScale 0.3s ease forwards' }}
      >

        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex-1">
            <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-brand-dark dark:text-brand-light truncate">{cert.title}</h3>
            <p className="text-xs sm:text-sm text-brand-dark/50 dark:text-brand-light/50 truncate">{cert.institution}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-light dark:bg-brand-dark flex items-center justify-center text-brand-dark/60 dark:text-brand-light/60 hover:text-primary-500 transition-all duration-200 hover:scale-110 flex-shrink-0"
          >
            <X size={14} className="sm:size-18" />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="mx-2 sm:mx-4 mb-3 sm:mb-4 rounded-2xl overflow-hidden bg-brand-light dark:bg-brand-dark min-h-48 sm:min-h-64 flex items-center justify-center">
          {cert.file ? (
            <img
              src={`/certificates/${cert.file}`}
              alt={cert.title}
              className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 object-contain rounded-lg sm:rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className="flex-col items-center justify-center gap-3 sm:gap-4 text-center p-6 sm:p-8 md:p-12"
            style={{ display: cert.file ? 'none' : 'flex' }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl">{cert.icon || '🎓'}</div>
            <div className="w-full max-w-xs sm:max-w-sm">
              <p className="font-display font-bold text-lg sm:text-xl md:text-2xl gradient-text mb-2 truncate">{cert.title}</p>
              <p className="text-sm sm:text-base text-brand-dark/50 dark:text-brand-light/50">Certificate Preview</p>
              <p className="text-xs sm:text-sm text-brand-dark/40 dark:text-brand-light/40 mt-1 hidden sm:block">Add your certificate image to /public/certificates/</p>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between px-4 sm:px-6 pb-3 sm:pb-4">
          <div className="flex items-center gap-2">
            <span className={`tag bg-primary-500 text-white text-xs`}>
              {cert.level}
            </span>
            <span className="text-xs sm:text-sm text-brand-dark/50 dark:text-brand-light/50">{cert.period}</span>
          </div>
          {cert.file && (
            <a
              href={`/certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-xs text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              <span className="hidden sm:inline">View Full Size</span>
              <span className="sm:hidden">Full</span>
              <ExternalLink size={10} className="sm:size-14" />
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
