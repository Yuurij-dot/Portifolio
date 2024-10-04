/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          light: '#5f6bf1'
        },
        whitePrimary: {
          light: '#fafbfd'
        }
      },
      backgroundImage: {
        'AgeCalculator-Image': "url('./src/assets/agecalculator-project.jpg')",
        'Form-Image': "url('./src/assets/form-project.jpg')",
        'Count-Down-Image': "url('./src/assets/countdown-project.jpg')" 
      },
      screens: {
        'sl': '600px'
      }
    },
  },
  plugins: [],
}