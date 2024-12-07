// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
  css: ["~/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en-US", file: "en-US.json", name: "English" },
      { code: "nl", iso: "nl-NL", file: "nl-NL.json", name: "Dutch" },
    ],
    lazy: true,
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

  compatibilityDate: "2024-12-06",
});
