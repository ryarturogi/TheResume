module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        oswald: {
          50: '#f9e9f2',
          100: '#f3c9e0',
          200: '#e89fc5',
          300: '#de6fa3',
          400: '#d6407c',
          500: '#d60d72',
          600: '#c60a6a',
          700: '#a8085a',
          800: '#8a074b',
          900: '#6f063e',
        },
      },
    },
  },
  plugins: [],
}
