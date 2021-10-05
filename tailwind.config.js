module.exports = {
  purge: ["./pages/**/*.{js,jsx}","./comps/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'vijyellow':"#fbb040"
      },
      height: {
        'h30': '40rem'
      },
      gridAutoColumns: {
        'gcols': '2rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
