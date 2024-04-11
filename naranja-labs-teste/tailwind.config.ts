import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#2B2D38',
        'primary-color': '#dc396c',
        'gray-not-selected': '#ABABAB',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
