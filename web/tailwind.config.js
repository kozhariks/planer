/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7089FF',
        warning: '#FC9A08',
        cards: '#212025',
        background: '#0A0A0C',
      },
      spacing: {
        '17': '62px', // отступ сверху для Telegram
        'side': '16px',
        'inner': '4px',
      },
      borderRadius: {
        'glass': '4px',
      },
      backdropBlur: {
        'xs': '4px',
      },
    },
  },
  plugins: [],
}
