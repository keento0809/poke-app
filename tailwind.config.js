module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        110: "110px",
      },
      minWidth: {
        120: "120px",
        122: "122px",
      },
      maxWidth: {
        120: "120px",
        345: "345px",
        500: "500px",
        650: "650px",
      },
      minHeight: {
        40: "40px",
        100: "100px",
        500: "500px",
        533: "533px",
        600: "600px",
        650: "650px",
      },
      maxHeight: {
        380: "380px",
        420: "420px",
        450: "450px",
        500: "500px",
        550: "550px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
