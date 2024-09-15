/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors:{
      '--bkg':'#F9F2E7',
      '--text':'#130B08',
      '--btn':'#B4452C',
      '--box':'white',
    },
    extend: {
      borderRadius:{
        'creative' : '38% 62% 24% 76% / 47% 61% 39% 53%',
      }
    },
   
  },
  plugins: [],
}

