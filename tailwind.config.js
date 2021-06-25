module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        white: '#ffffff',
        blue: {
          medium: "#005c98"
        },
        black: {
          light: "#005c98",
          faded: "#00000059"
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#dbdbdb'
        },
        red:{
          primary: '#ed4956'
        }
      },
      fill: (theme)=>({
        red: theme('colors.red.primary')
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
    
}