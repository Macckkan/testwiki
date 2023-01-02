import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'sv-SE',
  title: 'Ekstammen Wiki',
  description: 'Ekstammen wiki',
  base: '/testwiki/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: defaultTheme({
    smoothScroll: true,
    docsDir: 'docs',
    editLink: true,
    editLinkText: 'Redigera Dokument',
    lastUpdated: true,
    lastUpdatedText: 'Senast uppdaterad',
    contributors: true,
    contributorsText: 'Uppdaterare',
    sidebarDepth: 2,
    danger: 'FARA',
    tip: 'TIPS',
    warning: 'VARNING',
    notFound: ['Sidan hittades inte'],
    backToHome: 'Ta mig tillbaka',
    logo: '/images/ekstammen_logo.png',
    navbar: [
      {
        text: 'Hem',
        link: '/',
      },
      {
        text: 'Towny',
        link: '/towny/',
      },
      {
        text: 'Hemsida',
        link: 'https://ekstammen.nu',
      },
      {
        text: 'Discord',
        link: 'http://discord.ekstammen.nu',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Hem',
          children: [
            '/',
            '/discord.md',
            '/bedrock.md',
            '/vote.md',
            '/ranker.md',
            '/tokens.md',
          ]
        },
        {
          text: 'Towny',
          children: [
            '/towny/',
            '/towny/regler.md',
            '/towny/världar.md',
            '/towny/spawn/',
            '/towny/ranker.md',
          ]
        },
        {
          text: 'Plugins',
          children: [
            '/plugins/towny.md',
            '/plugins/chestshop.md',
            '/plugins/cmi.md',
            '/plugins/jobs.md',
            '/plugins/lwc.md',
            '/plugins/mobfarmmanager.md',
            '/plugins/playershopgui.md',
          ]
        },
      ],
    }
  }),
})