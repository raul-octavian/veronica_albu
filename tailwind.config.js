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
      secondary: {
        main: '#0b0b0b',
        soft: '#0b0b0b9a',
      },
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
    extend: {
      flexGrow: {
        2: 2,
        3: 3,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
