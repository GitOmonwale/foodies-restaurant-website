/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#fac031",
        gray: "#ccccc",
      },
      backgroundImage: {
        'cuisto1': "url('./Team/cuisto1.jpg')",
        'cuisto2': "url('./Team/cuisto2.jpg')",
        'cuisto3': "url('./Team/cuisto3.jpg')",
        'team':"url('./Team/background.jpeg')",
      },
    },
  },
  plugins: [],
}

