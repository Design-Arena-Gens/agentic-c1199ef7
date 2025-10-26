/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        earthy: {
          50: '#f9f7f4',
          100: '#f1ede5',
          200: '#e4dccb',
          300: '#d3c5aa',
          400: '#c0ab87',
          500: '#a88f6b',
          600: '#8f7555',
          700: '#6f5b44',
          800: '#5c4c39',
          900: '#4d4031',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c8',
          300: '#a0b5a2',
          400: '#7a9580',
          500: '#5d7963',
          600: '#48604e',
          700: '#3a4d40',
          800: '#303f35',
          900: '#29352d',
        }
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
