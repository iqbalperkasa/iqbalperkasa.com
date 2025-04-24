// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon"],
  // typescript: {
  //   typeCheck: true,
  // },
  devServer: {
    port: 1234,
  },
  app: {
    head: {
      title: "Iqbal Perkasa",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content:
            "Website of Iqbal Perkasa, a full-stack engineer from Indonesia.",
        },
        { property: "og:title", content: "Iqbal Perkasa" },
        {
          property: "og:description",
          content:
            "Website of Iqbal Perkasa, a full-stack engineer from Indonesia.",
        },
        { property: "og:url", content: "https://iqbalperkasa.com" },
        { property: "og:type", content: "article" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/avatar.png" }],
      script: [{ src: "/main.js" }],
    },
  },
  googleFonts: {
    families: {
      Inter: "400..500",
    },
    download: true,
  },
  icon: {
    serverBundle: {
      collections: ["gravity-ui"],
    },
  },
});
