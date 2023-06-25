/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      content: {
        'afterImg': 'url("./public/assest/svg/darkBG.svg")',
      },
    },
  },
  plugins: [],
}

