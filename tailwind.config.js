/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Swig-inspired warm red theme
        bg: '#E23744',
        surface: '#D32F3C',
        'surface-2': '#B82733',
        // `pink` token repurposed as the gold "drizzle" accent (pops on red, matches logo script)
        pink: {
          DEFAULT: '#FFC93C',
          hover: '#FFD75E',
          light: '#FFE08A',
        },
        cream: '#FBF3E2',
        muted: '#F4D2C5',
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
