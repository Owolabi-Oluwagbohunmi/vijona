module.exports = {
  purge: ["./pages/**/*.{js,jsx}","./comps/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'vijyellow':"#fbb040",
        "v-yellow":"#FBB040",
        "v-green":"#ed1c24",
        "v-black":"#000000",
        "bg-cta": '#D3E5E4',
        "v-bg": '#FAFAFB',
        'v-gray': '#f6f7f7',
        'v-pink': '#FFF9F9',
        'v-black': '#282828'
      },
      gridAutoColumns: {
        'gcols': '2rem'
      }, 
      fontFamily:{
        'openSans': ['Mulish', 'sans-serif']
      },
      fontSize: {
        'primary': ['1rem', '2.5rem'],
        'hero': ['3.75rem', '2.5rem'],
        'sectionhead':['2.8125rem', '3.125rem'],
        'quotetext':['1.5625rem', '2.5rem'],
        'insectionHeading':['1.875rem', '3.125rem'],
        'cardHead':['2.5rem', '2.5rem'],
        'cardtext':['1.25rem', '2.5rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
