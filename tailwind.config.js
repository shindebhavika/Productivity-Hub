/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
      },
      // tailwind.config.js

      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // override Tailwind's default 'font-sans'
      },
    screens: {
 xs: '250px',     // existing
        xxs: '350px', 
        '3xl': '1600px',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        },
      },
       keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
  
    },
  },
  plugins: [],
};
