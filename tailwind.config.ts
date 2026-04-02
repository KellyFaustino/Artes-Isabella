import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text)-(custom-(blue|green|orange|purple|red))(-(secondary))?$/,
    },
  ],
  darkMode: ["class"],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "custom-blue": {
          DEFAULT: "hsl(var(--custom-blue))",
          secondary: "hsl(var(--custom-blue-secondary))",
        },
        "custom-green": {
          DEFAULT: "hsl(var(--custom-green))",
          secondary: "hsl(var(--custom-green-secondary))",
        },
        "custom-orange": {
          DEFAULT: "hsl(var(--custom-orange))",
          secondary: "hsl(var(--custom-orange-secondary))",
        },
        "custom-purple": {
          DEFAULT: "hsl(var(--custom-purple))",
          secondary: "hsl(var(--custom-purple-secondary))",
        },
        "custom-red": {
          DEFAULT: "hsl(var(--custom-red))",
          secondary: "hsl(var(--custom-red-secondary))",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.50rem",
        "3xl": "1.75rem",
        "4xl": "1.875rem",
        "5xl": "3rem",
      },
      lineHeight: {
        xs: "1rem",
        sm: "1.25rem",
        base: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
        "2xl": "2.25rem",
        "3xl": "2.5rem",
        "4xl": "2.75rem",
        "5xl": "3rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        slideDown: {
          from: { height: "0px", opacity: "0" },
          to: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
          to: { height: "0px", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideDown: "slideDown 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
    },
  },
} satisfies Config;
