import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: '#CDD6E9',
        ash: '#6C7278',
        crystal: '#ACAEB7',
        offwhite: '#f7f7f7',
        white: '#FFFFFF',
        dark: '#464B50',
        darker: '#1A1C1E',
        lightGreen: '#E9F5F7',
        green: '#75C5C1',
        error: '#FF515D',
        darkBlue: '#252A41',
        mush: '#1A1C1E',
        syd: '#7988A9',
        ice: '#EEF1F9',
        purple: '#41245F',
        lightRed: '#FFE9EA',
      },
    },
  },
  plugins: [],
};
export default config;
