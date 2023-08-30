/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        header: {
          100: '#16454E',
          200: '#676767'
        },
        btnHover: '#1F5A65',
        productBg: '#f2f1f0'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

