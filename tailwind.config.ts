import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['Space Grotesk'],
    },
    extend: {
      colors: {
        green: {
          dark: '#183717',
          DEFAULT: '#50DA4C',
          light: '#D8FFD8'
        },
        pink: {
          dark: '#FFDBFF',
          DEFAULT: '#FF8BFF',
          light: '#C401C4'
        },
        black: '#1C1C1C',
        light: '#FEFDF8',
        beige: '#F3F0E0'
      },
    }
  },

  plugins: []
} as Config;
