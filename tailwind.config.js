const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./res/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#130007",
          "200": "#380116",
          "400": "#5D0124",
          "600": "#70012B",
          "700": "#B60045",
          "900": "#FF0060",
          "contrast": {
            DEFAULT: "#fff",
            "low": "#bbb"
          }
        },
        secondary: "#FFF",
        current: "currentColor"
      },
      screens: {
        wide: "2000px",
        uw: "2800px"
      }
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("./plugins/tailwind-text-shadow"),
    plugin(({ addVariant }) => {
      addVariant("is", ":is(&)");
      addVariant("where", ":where(&)");
    })
  ]
};
