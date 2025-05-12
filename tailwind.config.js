import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [flowbite.plugin(), require("daisyui")],
};
