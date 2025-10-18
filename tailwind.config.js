/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'custom': ['Your Custom Font', 'sans-serif'],
      },
      fontWeight: {
        'bold': '700',
        'semibold': '600',
        'medium': '500',
        'regular': '400',
      }
    },
  },
  plugins: [],
}