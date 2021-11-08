const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '37': '2.313rem',
        '189': '11.813rem'
      }
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      vibrantDark: "#c0d731",
      pageBgDark: "#121212",
      switchLabelDark: '#555555',
      smNavbarBgColor: '#121212',

      switchToggleColor: "#333333",
      inputPlaceholderBgLight: "#222222",
      vibrantLight: "#690fad",
      pageBgLight: "#f1f1f1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
