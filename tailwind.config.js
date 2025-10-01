/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./demo/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'material-symbols': ['Material Symbols Rounded', 'sans-serif'],
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'icon-small': ['18px', '18px'],
        'icon-medium': ['24px', '24px'],
        'icon-large': ['36px', '36px'],
      },
    },
    colors: {
      // M3 colors are now defined as CSS custom properties in index.css
    },
  },
  plugins: [],
}