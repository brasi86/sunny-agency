/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        100: "hsl(0, 0%, 100%)",
        200: "hsl(210, 4%, 67%)",
        300: "hsl(232, 10%, 55%)",
        400: "hsl(213, 9%, 39%)",
        500: "hsl(212, 27%, 19%)",
        transparent: "hsl(0 0% 100% )",
      },
    },
    extend: {
      fontFamily: {
        Barlow: ['"Bralow"', "sans-serif"],
        Fraunces: ['"Fraunces"', "serif"],
      },
      fontWeight: {
        regular: "600",
        b: "700",
        verybold: "900",
      },
      colors: {
        red: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        cyan: "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-cyan": "hsl(168, 34%, 41%)",
      },
    },
  },
  plugins: [],
};
