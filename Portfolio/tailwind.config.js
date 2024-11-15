/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RobotoX' : ['Roboto','sans-serif']
      },
      fontSize: {
        '16':'1rem'
      },
      translate: {
        '17':'4.6rem'

      },
      width: {
        '25': '25px'
      },
      height: {
        '2':'2px'
      }, 
      transitionDuration: {
        '600':'600ms'
      },
      container: {
        center: true,
        padding:'1rem'
      }
    },
  },
  plugins: [],
}

