/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-\[\#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\]/, // Permite cores arbitrárias
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};