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
        className="relative glass dark:bg-brand-dark rounded-3xl p-2 max-w-3xl w-full mx-4 shadow-2xl shadow-primary-500/20 border border-white/20 dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeInScale 0.3s ease forwards' }}
      >

        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h3 className="font-display font-bold text-xl text-brand-dark dark:text-brand-light">{cert.title}</h3>
            <p className="text-sm text-brand-dark/50 dark:text-brand-light/50">{cert.institution}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-brand-light dark:bg-brand-dark flex items-center justify-center text-brand-dark/60 dark:text-brand-light/60 hover:text-primary-500 transition-all duration-200 hover:scale-110"
          >
            <X size={18} />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="mx-4 mb-4 rounded-2xl overflow-hidden bg-brand-light dark:bg-brand-dark min-h-64 flex items-center justify-center">
          {cert.file ? (
            <img
              src={`/certificates/${cert.file}`}
              alt={cert.title}
              className="w-full h-auto max-h-96 object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className="flex-col items-center justify-center gap-4 text-center p-12"
            style={{ display: cert.file ? 'none' : 'flex' }}
          >
            <div className="text-6xl">{cert.icon || '🎓'}</div>
            <div>
              <p className="font-display font-bold text-2xl gradient-text mb-2">{cert.title}</p>
              <p className="text-brand-dark/50 dark:text-brand-light/50">Certificate Preview</p>
              <p className="text-sm text-brand-dark/40 dark:text-brand-light/40 mt-1">Add your certificate image to /public/certificates/</p>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between px-6 pb-4">
          <div className="flex items-center gap-2">
            <span className={`tag bg-primary-500 text-white text-xs`}>
              {cert.level}
            </span>
            <span className="text-sm text-brand-dark/50 dark:text-brand-light/50">{cert.period}</span>
          </div>
          {cert.file && (
            <a
              href={`/certificates/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
            >
              View Full Size <ExternalLink size={14} />
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
