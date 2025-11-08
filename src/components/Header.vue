<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <router-link to="/">DevFest Indore 2025</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/team" class="nav-link">Team</router-link>
        </li>
        <li>
          <router-link to="/agenda" class="nav-link">Agenda</router-link>
        </li>
        <li>
          <router-link to="/sponsors" class="nav-link">Sponsors</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-bottom: 1px solid #e0e0e0;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo a {
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #666666;
}

.nav-link.router-link-active {
  color: #000000;
  font-weight: bold;
}
</style>