import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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