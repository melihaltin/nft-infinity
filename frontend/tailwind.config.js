/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        darkGray: "rgba(255, 255, 255, 0.15)",
        textGray: "var(--gray-3, #828282)",
      },

      fontFamily: {
        sans: ["Inter", "Montserrat"],
      },
    },
  },
  plugins: [],
};
