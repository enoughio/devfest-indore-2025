<template>
  <div class="home-page">
    <HeroSection />
    <StatisticsSection />
    <WhatToExpectSection />
  </div>
</template>

<script>
import HeroSection from '@/components/homePage/HeroSection.vue'
import StatisticsSection from '@/components/homePage/StatisticsSection.vue'
import WhatToExpectSection from '@/components/homePage/WhatToExpectSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    StatisticsSection,
    WhatToExpectSection
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>