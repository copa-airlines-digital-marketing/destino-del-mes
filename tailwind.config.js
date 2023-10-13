/** @type {import('tailwindcss').Config} */
const cmpreset = require('cmds-tailwind-styles')

module.exports = {

  content: [
    './Sections/*.{html,js}'

  ],
  presets: [cmpreset]
}