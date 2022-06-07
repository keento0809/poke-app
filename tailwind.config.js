module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        345: "345px",
        500: "500px",
        650: "650px",
      },
      minHeight: {
        100: "100px",
        398: "398px",
      },
      maxHeight: {
        350: "350px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
