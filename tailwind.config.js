module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './blog/**/*.mdx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [
        'Arvo', 'Noto Serif CJK SC' , 'ui-sans-serif', 'system-ui', 'sans-serif'
      ],
      'serif': [
        'Arvo', 'ui-serif'
      ]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
