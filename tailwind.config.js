/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#662C91",
        gray: "#4A4A4A",
        lightgray: "#E4E7ED",
        darkgray: "#828282",
      },
    },
  },
  plugins: [],
};
