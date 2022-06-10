module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        122: "122px",
      },
      maxWidth: {
        345: "345px",
        500: "500px",
        650: "650px",
      },
      minHeight: {
        100: "100px",
        533: "533px",
        600: "600px",
        650: "650px",
      },
      maxHeight: {
        380: "380px",
        500: "500px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
