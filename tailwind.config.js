/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'mw': '826px',
        'lg': '1024px',
        'lh': '1036px',
        'ls': '1205px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
