/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './contexts/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3F3F46', // Zinc-700
          dark: '#D4D4D8',  // Zinc-300
        },
        background: {
          light: '#FFFFFF', // White
          dark: '#18181B',  // Zinc-900
        },
        text: {
          light: '#27272A', // Zinc-800
          dark: '#F4F4F5',  // Zinc-100
        },
        secondary: {
          light: '#71717A', // Zinc-500
          dark: '#A1A1AA',  // Zinc-400
        },
        border: {
          light: '#E4E4E7', // Zinc-200
          dark: '#3F3F46',  // Zinc-700
        },
        accent: {
          light: '#52525B', // Zinc-600
          dark: '#D4D4D8',  // Zinc-300
        },
      },
    },
  },
  plugins: [],
};
