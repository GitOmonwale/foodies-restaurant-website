/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', // Inclure index.html à partir de la racine
    './src/**/*.html', // Inclure tous les fichiers HTML dans le répertoire src et ses sous-répertoires
    '!./node_modules/**/*.html'],
  theme: {
    extend: {
      colors: {
        orange: "#fac031",
        gray: "#ccccc",
      },
    },
  },
  plugins: [],
}

