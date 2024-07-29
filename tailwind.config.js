/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '11em': '11em',
      },
      height: {
        '11em': '11em',
      },
      margin: {
        '2em': '2em;',
      },
      letterSpacing: {
        '0.4em': '0.4em',
      },
      fontFamily: {
        pacifico: `'Pacifico', cursive`,
      },
    },
  },
  plugins: [],
};
