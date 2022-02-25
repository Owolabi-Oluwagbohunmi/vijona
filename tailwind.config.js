module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./comps/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        9999: 9999,
      },
      screens: {
        phones: "300px",
        navscreenmax: "1270px",
      },
      width: {
        card: "21.5rem",
      },
      height: {
        "h-card": "291px",
        "open-menu": "100%",
        hcos: "400px",
        events: "982px"
      },
      colors: {
        vijyellow: "#fbb040",
        navyellow: "#FFF9DC",
        viblue: "#008CDB",
        "v-yellow": "#FBB040",
        "v-green": "#ed1c24",
        "v-black": "#000000",
        "bg-cta": "#D3E5E4",
        "v-bg": "#FAFAFB",
        "v-gray": "#f6f7f7",
        "v-pink": "#FFF9F9",
        "v-black": "#282828",
        "v-darkgray": "#E6E6E8",
        "v-brown": "#fffae5",
        "l-header": "#F9FAFC",
        "header-col": "#1D1E2C",
        "text-legal": "#1D1E2C",
        "donate-col": "#FBF2DA",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('../public/assets/donate.jpeg')",
      },

      gridAutoColumns: {
        gcols: "minmax(0,2rem)",
      },
      gridTemplateColumns: {
        ignitecard: "max-content max-content max-content 10% 40%",
        ignitecardPhones: "max-content",
        ignitecardmd: "max-content max-content max-content",
        aboutusTemplate: "50% 50%",
        whoweareTemplate: "30% 55%",
      },
      gridTemplateRows: {
        ignitecard: "max-content max-content max-content",
        ignitecardPhones:
          "max-content max-content max-content max-content max-content max-content max-content max-content max-content",
        ignitecardmd:
          "max-content max-content max-content max-content max-content",
        aboususTemplate: "max-content max-content",
      },
      fontFamily: {
        openSans: ["Mulish", "sans-serif"],
      },
      fontSize: {
        primary: ["1rem", "1.8rem"],
        hero: ["3.75rem", "2.5rem"],
        cta: ["3rem", "4.5rem"],
        sectionhead: ["2.8125rem", "3.125rem"],
        quotetext: ["1.5625rem", "2.5rem"],
        insectionHeading: ["1.875rem", "3.125rem"],
        cardHead: ["2.5rem", "2.5rem"],
        cardtext: ["1.25rem", "2.5rem"],
        headings: ["2rem", "3rem"],
      },
      height: {
        "cus-height": "37.2rem",
      },
      margin: {
        29: "7.4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
