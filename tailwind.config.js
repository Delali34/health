/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary: "#2EC0BB",
        heading: "#233036",
        body: "#667074",
        light: "#F6F6F6",
        yellowLight: "#FFF3D9",
        greenLight: "#CCF0EE",
        purpleLight: "#AEA3E1",
      },
      fontFamily: {
        hero: ['"Ultra"', "serif"],
        maintext: ['"Almarai"', "sans-serif"],
        header: ['"Acme"', " sans-serif"],
        mont: ['"Montserrat","sans-serif"'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
