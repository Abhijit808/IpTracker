export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-desktop": "url('./src/images/pattern-bg-desktop.png')",
        "pattern-mobile": "url('./src/images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
