module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        360: "360px",
      },
      maxHeight: {
        350: "350px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
