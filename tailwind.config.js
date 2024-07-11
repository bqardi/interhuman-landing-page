/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./test.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        page: "95rem",
      },
      spacing: {
        startup: "300vh",
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "button-background": "var(--color-button-background)",
        "button-foreground": "var(--color-button-foreground)",
        purple: {
          DEFAULT: "var(--purple)",
          dark: "var(--purple-dark)",
          light: "var(--purple)",
        },
      },
      animation: {
        carousel: "carousel 60s linear infinite",
        startup: "startup 1.2s linear forwards",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        startup: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
