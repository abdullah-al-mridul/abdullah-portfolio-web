/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "desktop-x": { raw: "(max-width: 1920px)" },
      "desktop-l": { raw: "(max-width: 1440px)" },
      "desktop-m": { raw: "(max-width: 1280px)" },
      "desktop-s": { raw: "(max-width: 1024px)" },
      "tablet-l": { raw: "(max-width: 800px)" },
      "tablet-s": { raw: "(max-width: 640px)" },
      "mobile-l": { raw: "(max-width: 480px)" },
      "mobile-s": { raw: "(max-width: 320px)" },
    },
  },
  plugins: [],
};
