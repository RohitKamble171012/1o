/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f0ff',
          100: '#e0e0fe',
          200: '#c7c6fd',
          400: '#8b87fa',
          500: '#6c67f6',
          600: '#5a54e8',
          700: '#4a44cc',
          900: '#2d2880',
        },
        surface: {
          0: '#ffffff',
          1: '#fafafa',
          2: '#f5f5f7',
          3: '#ebebf0',
        },
        ink: {
          primary: '#0a0a0f',
          secondary: '#3d3d4d',
          muted: '#7a7a8c',
          faint: '#b0b0c0',
        }
      },
      animation: {
        'grid-fade': 'gridFade 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gridFade: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(240,100%,70%,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(260,80%,65%,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,100%,70%,0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
