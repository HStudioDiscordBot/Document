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
    title: 'CEO & ผู้ก่อตั้ง',
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
      ทีมของเรา
    </template>
    <template #lead>
      สมาชิกใน HStudio Project
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>