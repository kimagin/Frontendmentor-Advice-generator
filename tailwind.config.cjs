/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    //Define Media queries
    /*screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },*/

    //Define Custom Fonts
    fontFamily: {
      sans: ['Manrope', 'sans-serif'], //or alternatively
    },
    extend: {
      //Extend Tailwind Color Pallet
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-gray': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      //Create Custom Animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        //You can call the keyframes
        bounce: 'bounce 3s ease-in-out infinite',
      },

      //Create custom Key-frames
      keyframes: {
        bounce: {
          //You can use css .style in js
          '0%, 100%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
