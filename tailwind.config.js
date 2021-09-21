module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#222831",
        primary: "#ffdd55",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    backgroundColor: () => ({
      primary: "#ffc901",
      primaryLight: "#ffc701",
      dark: "#000000",
      violet: "#C837AB",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
