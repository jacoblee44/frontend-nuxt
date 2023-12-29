// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    '@nuxtjs/i18n',
    'nuxt3-leaflet',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: { families: { 'Source+Sans+Pro': true } },
  i18n: {
    lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de.json',
      },
    ],
    strategy: 'no_prefix',
    langDir: 'locales/',
    defaultLocale: 'de',
  },
  plugins: ['~/plugins/vue-tailwind-datepicker.ts'],
});
