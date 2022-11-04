/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: "'Arapey', serif",
      heading: "'Viaoda Libre', cursive",
    },
    colors: {
      transparent: 'transparent',
      primary: {
        main: '#EEEEEE',
        soft: '#EEEEEE10',
      },
      secondary: '#0b0b0b',
      accent: {
        main: '#A27E40',
        soft: '#A27E409a',
      },
      neutral: '#0b0b0b',
      base: '#ffffff',
      info: '#3ABFF8',
      success: '#4ade80',
      warning: '#fcd34d',
      error: '#f43f5e',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
