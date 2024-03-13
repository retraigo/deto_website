import type { Config } from "tailwindcss";

import Typography from "@tailwindcss/typography";

export default <Partial<Config>>{
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
          yellow: "#c39232",
          orange: "#f49d1a",
          red: "#dc3535",
          purple: "#b01e68",
        },
      },
      backgroundImage: {
        banner:
          "linear-gradient(rgba(24, 24, 27, 0.5), rgba(0, 0, 0, 0.5)), url('/banner.webp')",
        pattern:
          "linear-gradient(rgba(24, 24, 27, 0.5), rgba(0, 0, 0, 0.5)), url('/pattern.webp')",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "Quicksand", "sans-serif"],
        atmospheric: ["Atmospheric", "Quicksand", "sans-serif"],
        azonix: ["Azonix", "Quicksand", "sans-serif"],
        bombulate: ["Bombulate", "sans-serif"],
        tahu: ["Tahu", "sans-serif"],
        bebas: ["BebasNeue", "sans-serif"],
        shadowed: ["Shadowed", "serif"],
        elementaryGothic: ["ElementaryGothicBookhand", "sans-serif"],
        cinzel: ["Cinzel Decorative", "cursive"],
        itc: ["ITC Benguiat", "cursive"],
        ltfunk: ["LT Funk", "cursive"],
        loubag: ["Loubag", "cursive"],
        james: ["James Stroker", "cursive"],
        berkshire: ["Berkshire Swash", "sans-serif"],
        barnum: ["Barnum", "sans-serif"],
        rye: ["Rye", "serif"],
      },
    },
  },
  plugins: [Typography],
};
