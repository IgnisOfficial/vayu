export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Vayu Framework',
      meta: [
        { name: 'description', content: 'A lightweight PHP micro-framework for building web applications and APIs.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['php', 'bash', 'json', 'env', 'apache', 'nginx', 'ini', 'sql'],
        },
      },
    },
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started/installation' },
  },
})
