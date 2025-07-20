---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/hewkawar.png',
    name: 'HewkawAr',
    title: 'CEO & Founder',
    links: [
      { icon: 'github', link: 'https://github.com/hewkawar' },
      { icon: 'discord', link: 'https://discord.com/users/758681611251744788' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Members of HStudio Project
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>