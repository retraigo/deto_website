import type { Config } from "tailwindcss";

import Typography from "@tailwindcss/typography";

export default <Partial<Config>> {
  darkMode: "class",
  theme: {
    extend: {
      typography(theme: any) {
        return {
          dark: {
            css: {
              color: theme("colors.zinc.300"),
              '[class~="lead"]': { color: theme("colors.zinc.400") },
              a: { color: theme("colors.zinc.100") },
              strong: { color: theme("colors.zinc.100") },
              "ul > li::before": { backgroundColor: theme("colors.zinc.700") },
              hr: { borderColor: theme("colors.zinc.800") },
              blockquote: {
                color: theme("colors.zinc.100"),
                borderLeftColor: theme("colors.zinc.800"),
              },
              h1: { color: theme("colors.zinc.100") },
              h2: { color: theme("colors.zinc.100") },
              h3: { color: theme("colors.zinc.100") },
              h4: { color: theme("colors.zinc.100") },
              code: { color: theme("colors.zinc.100") },
              "a code": { color: theme("colors.zinc.100") },
              pre: {
                color: theme("colors.zinc.200"),
                backgroundColor: theme("colors.zinc.800"),
              },
              thead: {
                color: theme("colors.zinc.100"),
                borderBottomColor: theme("colors.zinc.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.zinc.800") },
            },
          },
          css: {
            maxWidth: "60rem",
          },
        };
      },
      colors: {
        back: {
          high: "#2a3132",
          mediumHigh: "#384143",
          medium: "#475254",
          mediumLow: "#6b7476",
          low: "#909798",
        },
        royal: {
          yellow: "#ffe15d",
          orange: "#f49d1a",
          red: "#dc3535",
          purple: "#b01e68",
        },
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [
    Typography,
  ],
};
