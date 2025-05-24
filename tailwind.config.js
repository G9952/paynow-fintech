/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'fintech-gradient': 'linear-gradient(to top, #E100FF, #7F00FF)',
      },
      backgroundColor:{
        'fintech-purple':'#7F00FF',
        'fintech-light-purple':'#E100FF',
        'fintech-dark-purple':'#4B0082',
        'fintech-light-blue':'#00BFFF',
        'fintech-dark-blue':'#00008B',
      },
      colors:{
        'fintech-purple':'#7F00FF',
        'fintech-light-purple':'#E100FF',
        'fintech-dark-purple':'#4B0082',
        'fintech-light-blue':'#00BFFF',
        'fintech-dark-blue':'#00008B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

