/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#030917',
      'secondary': '#687ca6',
      'primary-text': '#d5dff2',
      'secondary-text': '#88aaf2'
    },
    extend: {},
  },
  plugins: [],
}