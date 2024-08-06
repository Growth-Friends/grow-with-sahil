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
        primaryColor: "#AFCAF2",
        bgBlackPara: "#ACACAC",
        borderColor: "#D2D2D2",
      },
      backgroundImage: {
        blackSideLeft:
          "linear-gradient(90deg, #060011 0%, rgba(6, 0, 17, 0) 100%)",
        blackSideRight:
          "linear-gradient(90deg, rgba(6, 0, 17, 0) 0%, #060011 100%)",
      },
    },
  },
  plugins: [],
};
