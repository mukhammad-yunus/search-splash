/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Roboto", 'sans-serif']
      },
      spacing: {
        '280': '280px'
      },
      gridTemplateColumns: {
        'big-screen-header': '600px 280px 280px',
        'usual-header': '470px 280px 280px',
        'small-header': '380px 280px 280px',
      },
      gridTemplateRows: {
        'custom-header':"280px",
      }
    },
    screens: {
      'sm': '640px',   // Small screens
      'md': '768px',   // Medium screens (tablets)
      'lg': '1024px',  // Large screens (laptops/desktops)
      'xl': '1280px',  // Extra-large screens
      '2xl': '1536px', // Extra-extra-large screens
    },
  },
  plugins: [],
}