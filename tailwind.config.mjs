/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        neuton: ['Neuton', 'serif'],
        orbitron: ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: []
}
