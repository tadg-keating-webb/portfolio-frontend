/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#90D5EC',
        },
        secondary: {
          500: '#22262a',
          600: '#16191d',

        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

