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
      },
      screens:{
        xxs: '16rem', // 256px
        xs: '30rem', // 480px
        sm: '40rem',   // 640px
        md: '48rem',   // 768px
        lg: '64rem',   // 1024px
        xl: '80rem',   // 1280px
        '2xl': '96rem' // 1536px
      }
      
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

