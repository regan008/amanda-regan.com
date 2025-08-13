/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [{
      highland: {
        "primary": "#1e2228",
        "secondary": "#4B5563",
        "accent": "#0b22e8",
        "neutral": "#F3EEE6",
        "base-100": "#F3EEE6",
        "base-200": "#1e2228",
        "base-300": "#2a2f38",
        "info": "#3B82F6",
        "success": "#22C55E",
        "warning": "#F59E0B",
        "error": "#EF4444",
        "terracotta": "#E85D75",
        "teal": "#0F766E",
        "burgundy": "#9F1239",
      },
    }],
  },
} 