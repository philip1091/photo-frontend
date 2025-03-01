/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "900px",
      lg: "960px",
      xl: "1200px",
    },
  },
  plugins: [],
}

