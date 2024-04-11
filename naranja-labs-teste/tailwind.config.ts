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
      },
      fontSize: {
        'normal-title': ['80px', '100px'],
        'normal-paragraph': ['24px', '40px'],
        'small-paragraph': ['18px', '27px'],
        'logo-size': ['36px', '45px'],
      }
    },
  },
  plugins: [],
};
export default config;
