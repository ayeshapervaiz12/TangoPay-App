/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#FAC239",
        lightmustard: "#FCF4DE",
        lightblack: "#0B1928",
        lightgray: "#FBFCFE",
        outline: "#EBF0FA",
        textcolour: "#0B1928",
        hovermustard: "#F1C865",
        lightyellow: "#FCF4DE",
        zinckshade: "#347CC5",
        shadedyellow: "#F5D993",
      },
    },
  },
  plugins: [],
};
