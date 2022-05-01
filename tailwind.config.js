const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#e0e0e0",
        dark: "#252525",
        secondary: "#7c7c7c",
        active: "#9c9c9c"
      },
      screens: {
        wide: "2000px",
        uw: "2800px"
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
