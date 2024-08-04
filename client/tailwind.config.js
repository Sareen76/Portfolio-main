/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '37': '9.25rem', // Adds a custom width class `w-38`
      },
    },
  },
  plugins: [],
}