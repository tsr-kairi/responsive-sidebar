module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "dark-purple-2": "#0E1F6E",
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
    },
  },
  plugins: [],
};
