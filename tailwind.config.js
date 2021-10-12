module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-color-1": "#0F2A3D",
        "custom-color-2": "#C830FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
