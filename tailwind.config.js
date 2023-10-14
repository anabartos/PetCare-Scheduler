/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#06b6d4',
        'custom-blue': '#083344', 
        'custom-blue-light': '#155e75',// Asigna un nombre a tu color personalizado y proporciona el valor hexadecimal.
      },
    },
  },
  plugins: [],
}

