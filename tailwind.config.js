/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F4F4F2",
        ink: "#131313",
        cobalt: "#1A39E0",
        "cobalt-soft": "#7E91FF",
        hairline: "#E5E5E2",
        "hairline-soft": "#EDEDEA",
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest2: '.14em',
        widest3: '.16em',
        widest4: '.18em',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}