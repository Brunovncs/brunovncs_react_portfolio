import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transitionProperty: {
          'colors': 'background-color, color, border-color, fill, stroke',
        },
        transitionDuration: {
          'theme': '1000ms',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
