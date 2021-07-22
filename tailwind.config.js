module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './blog/**/*.mdx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [
        `Arvo`, `Noto Serif CJK SC`, `ui-sans-serif`, `system-ui`, `sans-serif`
      ],
      'serif': [
        `Arvo`, `Noto Serif CJK SC`, `ui-serif`
      ],
      'mono': [
        `Fira Code`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`
      ]
    },
    extend: {}
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
