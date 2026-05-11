/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#120b08',
        surface: '#1c130f',
        'surface-2': '#2d1b14',
        pink: {
          DEFAULT: '#ff4d6d',
          hover: '#ff758f',
          light: '#ffb3c1',
        },
        cream: '#fdf5e6',
        muted: '#a68b81',
      },
      fontFamily: {
        display: ['"Lilita One"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
