const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      screens: {
        wide: "2000px",
        uw: "2800px",
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("current-page", "&.active");
      addVariant("children", "&>*");
      addVariant("descendants", "& *");
    })
  ],
};
