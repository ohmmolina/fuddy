module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      colors:{
        'pri':'#CE3DAE',
        'alt':'#FFE4F1',
        'dark':'#621651',
        'light':'#FBF1F1',
      },
      fontFamily: {
        'righ':'Righteous, cursive',
        'roboto': 'Roboto, sans-serif',
        'poppins': 'Poppins, sans-serif',
        'mina':'Mina, sans-serif',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
