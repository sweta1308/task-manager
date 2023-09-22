/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx, ts}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1500px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "670px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "470px" },
    },
    extend: {
      colors: {
        "dark-mode": "#1A202C",
        "dark-light": "#262c3c",
      },
    },
  },
  plugins: [],
};
