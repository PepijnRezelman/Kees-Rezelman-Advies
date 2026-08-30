/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#001a37",
          container: "#002f5b",
          fixed: "#d4e3ff",
          "fixed-dim": "#a6c8fd",
          "on-container": "#7698ca",
        },
        secondary: {
          DEFAULT: "#9f4033",
          container: "#fd8775",
          fixed: "#ffdad4",
          "fixed-dim": "#ffb4a8",
          "on-container": "#731f16",
        },
        tertiary: {
          DEFAULT: "#1a1a1a",
          container: "#2f2f2f",
          fixed: "#e4e2e1",
          "fixed-dim": "#c8c6c6",
          "on-container": "#979696",
        },
        surface: {
          DEFAULT: "#f9f9f9",
          bright: "#f9f9f9",
          dim: "#dadada",
          variant: "#e2e2e2",
          container: {
            lowest: "#ffffff",
            low: "#f3f3f3",
            DEFAULT: "#eeeeee",
            high: "#e8e8e8",
            highest: "#e2e2e2",
          }
        },
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#43474f",
        "outline-variant": "#c3c6d0",
        outline: "#737780",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        structural: "0 12px 40px rgba(0, 26, 55, 0.06)",
        elevated: "0 20px 50px rgba(0, 26, 55, 0.09)",
        card: "0 4px 20px rgba(0, 26, 55, 0.04)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      }
    },
  },
  plugins: [],
}
