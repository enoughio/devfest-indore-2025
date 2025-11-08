<template>
  <div class="page">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background-color: #ffffff;
}

h1 {
  font-size: 4rem;
  font-weight: 600;
  color: #000000;
}
</style>