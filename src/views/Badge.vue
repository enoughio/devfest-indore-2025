<template>
  <div class="page">
    <BadgeGenerator />
  </div>
</template>

<script>

import BadgeGenerator from '../components/Badges.vue'

export default {
  name: 'BadgeView',
  components: {
    BadgeGenerator
  }
}
</script>

<style scoped>
h1 {
  font-size: var(--text-4xl);
  font-weight: 600;
  color: #000000;
}
</style>

