/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
      },
      colors: {
        brand: "#F66B0E",
        darkBlue: "#112B3C",
        lightDarkBlue: "#0B3A5A",
        brandWhite: "#EFEFEF",
        avatarWhite: "#EBE3DE",
        avatarOrange: "#E07D3B",
        tableOrange: "#EE7F36",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif;",
      },
    },
  },
  plugins: [],
};
