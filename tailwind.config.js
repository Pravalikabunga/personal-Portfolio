/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-red': '#92140c',
        'brand-dark': '#1e1e24',
        'brand-light': '#fff8f0',
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#92140c', // Madder Lake
          600: '#7a110a',
          700: '#620e08',
          800: '#4a0a06',
          900: '#330704',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Outfit', 'system-ui', 'sans-serif'],
    },
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'float-delayed': 'float 6s ease-in-out 2s infinite',
      'float-slow': 'float 8s ease-in-out 1s infinite',
      'spin-slow': 'spin 20s linear infinite',
      'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      'gradient-x': 'gradientX 4s ease infinite',
      'shimmer': 'shimmer 2.5s linear infinite',
      'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      pulseGlow: {
        '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(146,20,12,0.5)' },
        '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(146,20,12,0.8)' },
      },
      gradientX: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      shimmer: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
    backgroundSize: {
      '300%': '300%',
    },
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
    },
  },
}
