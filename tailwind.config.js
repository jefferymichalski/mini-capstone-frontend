module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths as necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
