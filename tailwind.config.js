/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deep navy base used for the dark theme and for text in the light theme
        navy: {
          50: '#F4F7FB',
          100: '#E6ECF4',
          200: '#C9D5E5',
          300: '#9DB0CB',
          400: '#6B83A6',
          500: '#4A6185',
          600: '#364A6B',
          700: '#253757',
          800: '#152440',
          900: '#0E1B33',
          950: '#0B1628',
        },
        // Single accent colour: UN blue
        accent: {
          DEFAULT: '#4B92DB',
          light: '#7DB3E8',
          dark: '#1F66B0', // darker shade for text on light backgrounds (AA contrast)
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
