export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
    head: {
      title: "RAISIN",
      link: [{ rel: "icon", type: "image/png", href: "/profile.png" }],

      htmlAttrs: {
        lang: "en-US",
      },

      meta: [
        {
          name: "title",
          content: "SAKURA",
        },
        {
          name: "description",
          content: "Bot for your happiness.",
        },
        {
          name: "og:title",
          content: "SAKURA",
        },
        {
          name: "og:description",
          content: "Bot for your happiness.",
        },
        {
          name: "og:url",
          content: "https://sakura.rlss.in.th",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          content: "https://storage.jirayu.pw/00062-4226130047.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "SAKURA",
        },
        {
          name: "twitter:description",
          content: "Bot for your happiness.",
        },
        {
          name: "twitter:image",
          content: "https://storage.jirayu.pw/00062-4226130047.png",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/mdc",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        preconnect: true,
        prefetch: true,
        preload: true,
        families: {
          Anuphan: true,
          "Readex Pro": true,
        },
      },
    ],
  ],

  devtools: { enabled: true },
});
