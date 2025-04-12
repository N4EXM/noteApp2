/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"]
      },
      colors: {
        "primary": "#10b981",
        "secondary": "#059669",
        "thirdly": "#047857",
        "background": "#18181b",
        "secondBackground": "#27272a",
        "border": "#3f3f46"

      }
    },
  },
  plugins: [],
}