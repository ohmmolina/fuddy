module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'pri':'#CE3DAE',
      'alt':'#FFE4F1',
      'dark':'#621651',
      'light':'#FBF1F1',
      'grad':'linear-gradient(100.3deg, #543242 -9.85%, #CE3DAE 35.68%, 106.7%)'
    },
    fontFamily: {
      'righ':'Righteous, cursive',
      'roboto': 'Roboto, sans-serif',
      'poppins': 'Poppins, sans-serif',
      'mina':'Mina, sans-serif',
    },
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
