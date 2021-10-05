module.exports = {
  purge: ["./pages/**/*.{js,jsx}","./comps/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'vijyellow':"#fbb040",
        "v-yellow":"#FBB040",
        "v-green":"#0D4D4D",
        "v-black":"#000000",
        "bg-cta": '#D3E5E4',
        "v-bg": '#F5F8FD'
      },
      gridAutoColumns: {
        'gcols': '2rem'
      }, 
      fontFamily:{
        'openSans': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        'primary': ['1rem', '3.125rem'],
        'hero': ['3.75rem', '3.125rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
