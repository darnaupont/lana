const colors = require('./tailwindcss/colors');
const spacing = require('./tailwindcss/spacing');
const screens = require('./tailwindcss/screens');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    spacing,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
