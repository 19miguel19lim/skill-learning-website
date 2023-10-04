module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        lightBlue: "#666ca3",
        darkBlue: "#13183f",
        gray: "#83869a",
        pink: "#f74780",
        lightPink: "#ffa7c3",
        white: "#FFFFFF",
      },
    },
    backgroundImage: (theme) => ({
      btGradient: "linear-gradient(to top,#f02aa6, #ff6f48)",
      btGradientBottom: "linear-gradient(to bottom,#4851ff, #f02aa6)",
    }),
  },
  plugins: [],
};
