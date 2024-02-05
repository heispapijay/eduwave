/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'orange50': '#ff9500',
        'orange70': '#ffbf66',
        'orange75': '#ffca80',
        'orange80': '#ffd499',
        'orange90': '#ffeacc', 
        'orange95': '#fff4e5',
        'orange97': '#fff9f0',
        'orange99': '#fffdfa',
        'white': '#fff',
        'black': '#000',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      }
    },
  },
  plugins: [],
}

