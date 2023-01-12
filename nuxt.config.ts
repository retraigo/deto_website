// https://nuxt.com/docs/api/configuration/nuxt-config
import { Constants } from "./utils/constants";
export default defineNuxtConfig({
  app: {
    head: {
      title: `${Constants.NAME}`,
      titleTemplate: `%s | ${Constants.NAME}`,
      link: [
        {
          rel: "apple-touch-icon",
          href: "/icons/apple-touch-icon.png",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxt/image-edge",
    "nuxt-schema-org",
  ],
  colorMode: { classSuffix: "", preference: "dark", fallback: "dark" },
  content: {
    documentDriven: true,
  },
});
