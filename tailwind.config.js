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
        "v-bg": '#FAFAFB'
      },
      gridAutoColumns: {
        'gcols': '2rem'
      }, 
      fontFamily:{
        'openSans': ['Mulish', 'sans-serif']
      },
      fontSize: {
        'primary': ['1rem', '3.125rem'],
        'hero': ['3.75rem', '3.125rem'],
        'sectionhead':['2.8125rem', '3.125rem'],
        'quotetext':['1.5625rem', '3.125rem'],
        'insectionHeading':['1.875rem', '3.125rem'],
        'cardHead':['2.5rem', '3.125rem'],
        'cardtext':['1.25rem', '3.125rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
