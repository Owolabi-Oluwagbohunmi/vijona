module.exports = {
  purge: ["./pages/**/*.{js,jsx}","./comps/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        'card':'21.5rem'
      },
      height:{
        "h-card": '291px'
        
      },
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
        'gcols': 'minmax(0,2rem)'
      },
      gridTemplateColumns:{
        'ignitecard': 'max-content max-content max-content 10% 40%'
      },
      gridTemplateRows:{
        'ignitecard': 'max-content max-content max-content'
      }, 
      fontFamily:{
        'openSans': ['Mulish', 'sans-serif']
      },
      fontSize: {
        'primary': ['1rem', '1.8rem'],
        'hero': ['3.75rem', '2.5rem'],
        'cta': ['3rem', '4.5rem'],
        'sectionhead':['2.8125rem', '3.125rem'],
        'quotetext':['1.5625rem', '2.5rem'],
        'insectionHeading':['1.875rem', '3.125rem'],
        'cardHead':['2.5rem', '2.5rem'],
        'cardtext':['1.25rem', '2.5rem'],
        'headings':['2rem', '3rem'],
      },
      height: {
        'cus-height': '37.2rem'
      },
      margin:{
        '29' : '7.4rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
