import type { Config } from "tailwindcss";

module.exports = {
    darkMode: 'selector'
  }

const config: Config = {
  darkMode: "class", // Use 'class' so we control dark mode manually
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan your src folder (since you moved everything into /src)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;