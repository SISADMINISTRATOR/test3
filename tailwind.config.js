/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"PT Serif"', 'serif'],
      },
      colors: {
        blue: {
          900: '#002B5E', // Deeper blue for official look
          800: '#003A80',
        },
        red: {
          600: '#D52B1E', // Russian flag red
        }
      }
    },
  },
  plugins: [],
}
