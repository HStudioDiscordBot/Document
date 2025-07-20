import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "HStudio",
  description: "24/7 Music bot for Free",

  sitemap: {
    hostname: "https://docs.hstudiobot.com",
  },

  cleanUrls: true,

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    th: {
      label: "ไทย",
      lang: "th",
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/HStudioDiscordBot/Document/edit/main/:path',
          text: 'แก้ไขใน GitHub'
        },

        lastUpdated: {
          text: 'อัปเดตเมื่อ',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'medium',
          }
        },

        nav: [
          { text: "คู่มือ", link: "/th/guide/introduce" },
          { text: "Discord", link: "https://discord.gg/GzTbuZHTEx", target: "_blank" },
          { text: "เว็บไซต์", link: "https://www.hstudiobot.com", target: "_blank" },
        ],

        sidebar: [
          {
            text: "แนะนำบอท",
            link: "/th/guide/introduce"
          },
          {
            text: "ทั่วไป",
            items: [
              { text: "เชิญบอท", link: "/th/guide/invite-bot" },
              { text: "ฟังเพลงแรก", link: "/th/guide/play-first-song" },
              { text: "ฟังเพลงผ่าน Activity", link: "/th/guide/listen-from-activity" },
              { text: "ฟังเพลงจาก YouTube", link: "/th/guide/play-from-youtube" },
            ]
          },
          {
            text: "นโยบาย",
            items: [
              { text: "นโยบายความเป็นส่วนตัว", link: "https://www.hstudiobot.com/privacy-policy", target: "_blank" },
              { text: "ข้อกำหนดในการให้บริการ", link: "https://www.hstudiobot.com/terms-of-service", target: "_blank" },
            ]
          }
        ],

        footer: {
          message: 'สร้างโดย <a href="https://vitepress.dev" target="_blank">VitePress</a> และ <a href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a>',
          copyright: 'สงวนลิขสิทธิ์ © HStudio 2025'
        }
      }
    }
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/favicon.ico",

    editLink: {
      pattern: 'https://github.com/HStudioDiscordBot/Document/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      }
    },

    nav: [
      { text: "Guide", link: "/guide/introduce" },
      { text: "Discord", link: "https://discord.gg/GzTbuZHTEx", target: "_blank" },
      { text: "Website", link: "https://www.hstudiobot.com", target: "_blank" },
    ],

    sidebar: [
      {
        text: "Introduce",
        link: "/guide/introduce"
      },
      {
        text: "General",
        items: [
          { text: "Invite Bot", link: "/guide/invite-bot" },
          { text: "Play first song", link: "/guide/play-first-song" },
          { text: "Listen from Activity", link: "/guide/listen-from-activity" },
          { text: "Play from YouTube", link: "/guide/play-from-youtube" },
        ]
      },
      {
        text: "Policy",
        items: [
          { text: "Privacy Policy", link: "https://www.hstudiobot.com/privacy-policy", target: "_blank" },
          { text: "Terms of Service", link: "https://www.hstudiobot.com/terms-of-service", target: "_blank" },
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/HStudioDiscordBot/Document" }
    ],

    footer: {
      message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a> and <a href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a>',
      copyright: '© HStudio 2025. All rights reserved.'
    }
  }
})
