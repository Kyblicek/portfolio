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
          // Additional accents for gradients
          grape: "#7C3AED",
          blue: "#1FB6FF",
          teal: "#14B8A6",
          midnight: "#0b0b12",
        },
        fontFamily: {
          display: ["Clash Display", "ui-sans-serif", "system-ui"],   // NADPISY
          body: ["Manrope", "ui-sans-serif", "system-ui"],   // TEXT
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.2)",
          glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(108,255,206,0.18)",
        },
        keyframes: {
          aurora: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },
          },
          shine: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
        animation: {
          aurora: 'aurora 24s ease-in-out infinite',
          float: 'float 6s ease-in-out infinite',
          shine: 'shine 1.2s linear',
        },
      },
    },
    plugins: [],
  };  
  
