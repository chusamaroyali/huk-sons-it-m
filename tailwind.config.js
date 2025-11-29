/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--bg-main)',
        alt: 'var(--bg-alt)',
        inverse: 'var(--bg-inverse)',
        
        body: 'var(--text-body)',
        heading: 'var(--text-heading)',
        muted: 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        
        card: 'var(--card-bg)',
        
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
        },
        
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
          interactive: 'var(--border-interactive)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
