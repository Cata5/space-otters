import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
       'space-dark':'#064F81',
       'space-light':'#B4C8D8',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roca)']
      }

    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
