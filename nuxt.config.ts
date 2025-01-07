// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/image"],
  css: ["~/assets/css/styles.css"],
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: ["/manifest.json"],
    },
  },
  image: {
    quality: 80,
  },
  runtimeConfig: {
    public: {
      nuxtEnv: "production", // Defaults to production, overwrite in .env like this 'NUXT_PUBLIC_NUXT_ENV=development'
    },
  },
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
          name: "theme-color",
          content: "#101827",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "theme-color",
          content: "#fff",
          media: "(prefers-color-scheme: light)",
        },
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
      link: [
        { rel: "icon", type: "image/ico", href: "/favicon.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icon-180.png" },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
  compatibilityDate: "2024-12-06",
});
