/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xsm:"400px"
    },
    extend: {
      container:{
        center:true
      },
      spacing:{
        "13":"13px"
      }
    },
  },
  plugins: [],
}

