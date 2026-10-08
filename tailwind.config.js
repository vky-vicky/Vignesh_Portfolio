/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f3ff',
        'electric-purple': '#bd00ff',
        'deep-space': '#0a0a0a',
        'glass-black': 'rgba(10, 10, 10, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #000000 0%, #1a1a1a 50%, #000000 100%)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px #00f3ff' },
          '50%': { opacity: .5, boxShadow: '0 0 10px #00f3ff' },
        }
      }
    },
  },
  plugins: [],
}
