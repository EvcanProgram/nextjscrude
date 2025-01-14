/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        colors: {
          primary: '#ababab'
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
