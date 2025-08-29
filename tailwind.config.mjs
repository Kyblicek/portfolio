/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          ink: "#000000",
          paper: "#ffffff",
          purple: "#642797",
          sky: "#baebff",
          mint: "#6CFFCE",
        },
        fontFamily: {
          display: ["Clash Display", "ui-sans-serif", "system-ui"],   // NADPISY
          body: ["Manrope", "ui-sans-serif", "system-ui"],   // TEXT
        },
      },
    },
    plugins: [],
  };  
  