/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2337ff',
        secondary: '#000d8a',
      },
      fontFamily: {
        sans: ['Atkinson', 'sans-serif'],
      },
    },
  },
  plugins: [],
};