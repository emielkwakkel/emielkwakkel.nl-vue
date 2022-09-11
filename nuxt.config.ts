import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: ["~/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:image",
          content: "https://emielkwakkel.nl/og-image.jpg",
        },
        {
          property: "og:image:url",
          content: "https://emielkwakkel.nl/og-image.jpg",
        },
        { property: "og:image:alt", content: "Website of Emiel Kwakkel" },
        {
          property: "twitter:image",
          content: "https://emielkwakkel.nl/og-image.jpg",
        },
        {
          property: "og:description",
          content:
            "My mission is to promote Sustainable IT for a greener world",
        },
      ],
      link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    },
  },
});
