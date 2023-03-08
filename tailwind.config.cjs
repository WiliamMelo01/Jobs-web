/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        roboto: 'Roboto',
      },
      colors: {
        myColors: {
          100: '#282538',
          200: '#1E86FF',
          300: '#334680',
          400: '#B9BDCF',
          500: '#FFFFFF',
        },
      },
      backgroundImage: {
        builds: 'url("../backgroundImg.png")',
      },
    },
  },
  plugins: [],
};
