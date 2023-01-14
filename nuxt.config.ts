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
      meta: [
        {
          name: "theme-color",
          hid: "themeColor",
          content: "ffe15d",
        },
        {
          name: "description",
          hid: "description",
          content:
            "An annual tech festival hosted by the department of Artificial Intelligence and Data Science of Easwari Engineering College in association with SCARDS (Student Council of Artificial Intelligence & Data Science). We conduct a wide range of both technical and non-technical events .",
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
