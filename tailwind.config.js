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
      }
    },
  },
  plugins: [],
}