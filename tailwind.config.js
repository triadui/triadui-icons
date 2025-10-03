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
      // Material Design 3 System Colors
      'm3-primary': 'var(--m3-sys-color-primary)',
      'm3-primary-on': 'var(--m3-sys-color-on-primary)',
      'm3-primary-container': 'var(--m3-sys-color-primary-container)',
      'm3-primary-container-on': 'var(--m3-sys-color-on-primary-container)',
      
      'm3-secondary': 'var(--m3-sys-color-secondary)',
      'm3-secondary-on': 'var(--m3-sys-color-on-secondary)',
      'm3-secondary-container': 'var(--m3-sys-color-secondary-container)',
      'm3-secondary-container-on': 'var(--m3-sys-color-on-secondary-container)',
      
      'm3-tertiary': 'var(--m3-sys-color-tertiary)',
      'm3-tertiary-on': 'var(--m3-sys-color-on-tertiary)',
      'm3-tertiary-container': 'var(--m3-sys-color-tertiary-container)',
      'm3-tertiary-container-on': 'var(--m3-sys-color-on-tertiary-container)',
      
      'm3-error': 'var(--m3-sys-color-error)',
      'm3-error-on': 'var(--m3-sys-color-on-error)',
      'm3-error-container': 'var(--m3-sys-color-error-container)',
      'm3-error-container-on': 'var(--m3-sys-color-on-error-container)',
      
      'm3-background': 'var(--m3-sys-color-background)',
      'm3-background-on': 'var(--m3-sys-color-on-background)',
      
      'm3-surface': 'var(--m3-sys-color-surface)',
      'm3-surface-on': 'var(--m3-sys-color-on-surface)',
      'm3-surface-on-surface': 'var(--m3-sys-color-on-surface)',
      'm3-surface-on-variant': 'var(--m3-sys-color-on-surface-variant)',
      'm3-surface-container': 'var(--m3-sys-color-surface-container)',
      'm3-surface-container-low': 'var(--m3-sys-color-surface-container-low)',
      'm3-surface-container-high': 'var(--m3-sys-color-surface-container-high)',
      'm3-surface-container-highest': 'var(--m3-sys-color-surface-container-highest)',
      'm3-surface-on-container': 'var(--m3-sys-color-on-surface)',
      'm3-surface-on-container-high': 'var(--m3-sys-color-on-surface)',
      
      'm3-outline': 'var(--m3-sys-color-outline)',
      'm3-outline-variant': 'var(--m3-sys-color-outline-variant)',
    },
    borderRadius: {
      'm3-none': 'var(--m3-sys-shape-corner-none)',
      'm3-extra-small': 'var(--m3-sys-shape-corner-extra-small)',
      'm3-small': 'var(--m3-sys-shape-corner-small)',
      'm3-medium': 'var(--m3-sys-shape-corner-medium)',
      'm3-large': 'var(--m3-sys-shape-corner-large)',
      'm3-extra-large': 'var(--m3-sys-shape-corner-extra-large)',
    },
  },
  plugins: [],
}