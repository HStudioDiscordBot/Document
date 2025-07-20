import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HStudio",
  description: "24/7 Music bot for Free",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    ]
  }
})
