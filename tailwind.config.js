/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-green':'#05422C',
        'green-lime':'#17AF26'
      },
      backgroundImage:{
        hero: "url('./assets/images/banner-desktop.jpg')"
      }
    },
  },
  plugins: [],
}