/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        header: {
          100: '#16454E'
        },
        btnHover: '#1F5A65'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
