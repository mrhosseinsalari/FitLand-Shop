/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return `rgba(var(${variableName}), <alpha-value>)`;
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: withOpacity("--color-primary-main"),
          900: withOpacity("--color-primary-900"),
          850: withOpacity("--color-primary-850"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          150: withOpacity("--color-primary-150"),
          50: withOpacity("--color-primary-50"),
        },
        secondary: {
          main: withOpacity("--color-secondary-main"),
          900: withOpacity("--color-secondary-900"),
          850: withOpacity("--color-secondary-850"),
          700: withOpacity("--color-secondary-700"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          150: withOpacity("--color-secondary-150"),
          50: withOpacity("--color-secondary-50"),
          10: withOpacity("--color-secondary-10"),
          0: withOpacity("--color-secondary-0"),
        },
        error: {
          800: withOpacity("--color-error-800"),
          500: withOpacity("--color-error-500"),
          200: withOpacity("--color-error-200"),
        },
        warning: {
          800: withOpacity("--color-warning-800"),
          500: withOpacity("--color-warning-500"),
          200: withOpacity("--color-warning-200"),
        },
        success: {
          800: withOpacity("--color-success-800"),
          500: withOpacity("--color-success-500"),
          200: withOpacity("--color-success-200"),
        },
        info: {
          800: withOpacity("--color-info-800"),
          500: withOpacity("--color-info-500"),
          200: withOpacity("--color-info-200"),
        },
        neutral: {
          black: withOpacity("--color-neutral-black"),
          800: withOpacity("--color-neutral-800"),
          700: withOpacity("--color-neutral-700"),
          600: withOpacity("--color-neutral-600"),
          500: withOpacity("--color-neutral-500"),
          400: withOpacity("--color-neutral-400"),
          300: withOpacity("--color-neutral-300"),
          200: withOpacity("--color-neutral-200"),
          100: withOpacity("--color-neutral-100"),
          white: withOpacity("--color-neutral-white"),
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
};
