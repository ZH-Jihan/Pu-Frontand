/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#570DF8",
"secondary": "#F000B8",
"accent": "#37CDBE",
"neutral": "#3A4256",
"base-100": "#FFFFFF",
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",   
"error": "#e5e5e5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
