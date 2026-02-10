import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Brand Colors
        brand: {
          blue: "var(--color-primary)",         // #0066FF
          lightBlue: "var(--color-primary-light)", // #3385FF
          orange: "var(--color-accent)",        // #FF6B35
          navy: "var(--color-bg-dark)",         // #1A1A2E
          success: "var(--color-success)",      // #00D9A3
          purple: "var(--color-purple)",        // #8B5CF6
        },
        // Legacy support
        primary: {
          base: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--black)",
          accent: "var(--color-accent)",
          gray: "var(--grey)",
        },
        secondary: {
          base: "var(--secondary)",
        },
        accent: {
          orange: "var(--color-accent)",
          green: "var(--color-success)",
        },
        bg: {
          white: "var(--white)",
          offWhite: "var(--off-white)",
          dark: "var(--dark-bg)",
          blueTint: "var(--blue-tint)",
          lightGray: "var(--off-white)",
        },
        text: {
          main: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
          primary: "var(--black)",
          secondary: "var(--grey)",
        },
        border: {
          gray: "var(--light-gray)",
        },
      },
      backgroundImage: {
        'momentum-gradient': "var(--gradient-momentum)",
        'blue-fade': "var(--gradient-blue-fade)",
        'subtle-gradient': "var(--gradient-subtle)",
        'hero-gradient': "var(--gradient-hero)",
        'card-gradient': "var(--gradient-card)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography scale matching Matt Gray's approach
        "h1": ["var(--h1)", { lineHeight: "var(--h1-line-height)", fontWeight: "var(--headings-weight)" }],
        "h2": ["var(--h2)", { lineHeight: "var(--h2-line-height)", fontWeight: "var(--headings-weight)" }],
        "h3": ["var(--h3)", { lineHeight: "var(--h3-line-height)", fontWeight: "var(--headings-weight)" }],
        "h4": ["var(--h4)", { lineHeight: "var(--h4-line-height)", fontWeight: "var(--headings-weight)" }],
        "h5": ["var(--h5)", { lineHeight: "var(--h5-line-height)", fontWeight: "var(--headings-weight)" }],
        "h6": ["var(--h6)", { lineHeight: "var(--h6-line-height)", fontWeight: "var(--headings-weight)" }],
        "p1": ["var(--p1)", { lineHeight: "var(--p1-line-height)", fontWeight: "var(--paragraph-font-weight)" }],
        "p2": ["var(--p2)", { lineHeight: "var(--p2-line-height)", fontWeight: "var(--paragraph-font-weight)" }],
        "p3": ["var(--p3)", { lineHeight: "var(--p3-line-height)", fontWeight: "var(--paragraph-font-weight)" }],
        "cta": ["var(--cta-btn)", { fontWeight: "var(--cta-font-weight)" }],
      },
      spacing: {
        "section-top": "var(--top-padding)",
        "section-bottom": "var(--bottom-padding)",
        "element": "var(--element-spacing)",
        "gap": "var(--default-gap)",
      },
      maxWidth: {
        "content": "var(--max-width-smaller)",
        "wide": "var(--max-width-1280)",
        "title": "var(--title-block-max-width)",
      },
      borderRadius: {
        "default": "var(--default-radius)",
        "container": "var(--default-container-radius)",
      },
      boxShadow: {
        "subtle": "0 2px 8px var(--box-shadow)",
        "strong": "var(--box-shadow-strong)",
        "accent": "var(--box-shadow-accent)",
      },
    },
  },
  plugins: [],
};

export default config;
