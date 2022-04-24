module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
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
