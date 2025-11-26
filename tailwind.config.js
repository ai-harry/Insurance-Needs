/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f0fa',
          100: '#ebdff4',
          200: '#d6bfe9',
          300: '#c29fde',
          400: '#9b60c9',
          500: '#7522b3', // Main purple vibe
          600: '#5b1484', // Darker brand color from logo
          700: '#4a106b',
          800: '#3d0d59',
          900: '#320b49',
        }
      }
    },
  },
  plugins: [],
}