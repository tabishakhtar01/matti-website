/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" }, // Increased travel distance
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.5s ease-out", // Increased duration for smoother effect
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
