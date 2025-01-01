import variableFontWeights from './tailwind.plugin.variable-font-weights.js';
import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Bricolage Grotesque Variable', sans-serif",
      },
      fontSize: {
        '4.5xl': '2.5rem',
        '5.5xl': '3.725rem', // 59.6px
        '6.5xl': '4rem',
      },
      colors: {
        stone: {
          100: '#F3F0DD',
        },
        gray: {
          600: '#949494',
          700: '#727272',
          800: '#292929',
          900: '#191919',
        },
        green: {
          400: '#00E87A',
        },
      },
      spacing: {
        27: '6.75rem', // 108px
        30: '7.5rem', // 120px
        125: '31.25rem', // 500px
      },
      textShadow: {
        DEFAULT: '0 1px 2px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    variableFontWeights,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

