<template>
  <header class="header">
    <nav class="nav">
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
      </button>
      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <img src="@/assets/devfest-indore-header-logo.png" alt="DevFest Indore" class="logo-image" />
        </router-link>
        <span class="location-tag">Indore</span>
      </div>

      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/agenda" class="nav-link" active-class="active">Agenda</router-link>
        </li>
        <li>
          <router-link to="/speakers" class="nav-link" active-class="active">Speakers</router-link>
        </li>
        <li>
          <router-link to="/badge" class="nav-link" active-class="active">Badge</router-link>
        </li>
        <li>
          <router-link to="/sponsors" class="nav-link" active-class="active">Sponsors</router-link>
        </li>
        <li>
          <router-link to="/team" class="nav-link" active-class="active">Team</router-link>
        </li>
        <li>
          <router-link to="/faq" class="nav-link" active-class="active">FAQ</router-link>
        </li>
      </ul>
      <button class="register-btn" @click="handleRegister">Register Now</button>
    </nav>
    
    <!-- Mobile overlay backdrop -->
    <div class="mobile-overlay" :class="{ 'active': isMobileMenuOpen }" @click="closeMobileMenu"></div>
    
    <!-- Mobile bottom sheet -->
    <div class="mobile-bottom-sheet" :class="{ 'active': isMobileMenuOpen }">
      <ul class="mobile-nav-links">
        <li>
          <router-link to="/" class="nav-link" active-class="active" @click="closeMobileMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/agenda" class="nav-link" active-class="active" @click="closeMobileMenu">Agenda</router-link>
        </li>
        <li>
          <router-link to="/speakers" class="nav-link" active-class="active" @click="closeMobileMenu">Speakers</router-link>
        </li>
        <li>
          <router-link to="/badge" class="nav-link" active-class="active" @click="closeMobileMenu">Badge</router-link>
        </li>
        <li>
          <router-link to="/sponsors" class="nav-link" active-class="active" @click="closeMobileMenu">Sponsors</router-link>
        </li>
        <li>
          <router-link to="/team" class="nav-link" active-class="active" @click="closeMobileMenu">Team</router-link>
        </li>
        <li>
          <router-link to="/faq" class="nav-link" active-class="active" @click="closeMobileMenu">FAQ</router-link>
        </li>
      </ul>
      <button class="mobile-register-btn" @click="handleRegisterAndClose">Register Now</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    handleRegister() {
      window.open('https://konfhub.com/pre-devfest-indore', '_blank')
    },
    handleRegisterAndClose() {
      this.handleRegister()
      this.closeMobileMenu()
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: transparent;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  pointer-events: none;
}

.nav {
  width: min(95%, 1400px);
  background-color: #F0F0F0;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: auto;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.register-btn {
  background-color: #FBBC04;
  color: #333333;
  border: 1px solid #000000;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.register-btn:hover {
  background-color: #F9AB00;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo-image {
  height: 32px;
  width: auto;
  object-fit: contain;
  display: block;
}

.location-tag {
  background-color: #ffffff;
  color: #333333;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  border: 1px solid #000000;
  font-size: 0.75rem;
  font-weight: normal;
  font-family: var(--font-sans);
  white-space: nowrap;
}

.nav-links {
  display: none;
  list-style: none;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

/* Show nav links on desktop, hide on mobile */
@media (min-width: 1024px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  color: #333333;
  text-decoration: none;
  padding: 0.4rem 0.875rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-family: var(--font-sans);
  border-radius: 50px;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.nav-link.active {
  background-color: #D0D0D0;
  color: #333333;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;
  flex-shrink: 0;
}

/* Show hamburger only on smaller screens */
@media (max-width: 1023px) {
  .mobile-menu-toggle {
    display: flex;
  }
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: #333333;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

/* Mobile overlay backdrop */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Mobile bottom sheet */
.mobile-bottom-sheet {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  background: #F0F0F0;
  padding: 1.5rem 1rem;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1060;
  border-radius: 28px 28px 0 0;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  pointer-events: auto;
}

.mobile-bottom-sheet.active {
  transform: translateY(0);
}

.mobile-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  max-height: calc(80vh - 3rem);
}

.mobile-nav-links .nav-link {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 12px;
  transition: background-color 0.2s;
}

.mobile-nav-links .nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.mobile-nav-links .nav-link.active {
  background-color: #D0D0D0;
}

.mobile-register-btn {
  width: 100%;
  background-color: #FBBC04;
  color: #333333;
  border: 1px solid #000000;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all 0.2s;
  margin-top: 1rem;
}

.mobile-register-btn:hover {
  background-color: #F9AB00;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Tablet and medium screens */
@media (max-width: 1200px) {
  .nav {
    width: min(96%, 1400px);
    padding: 0.5rem 1.25rem;
    gap: 0.75rem;
  }
}

/* Mobile screens */
@media (max-width: 1023px) {
  .nav-links {
    display: none;
  }
  
  .nav {
    width: min(97%, 1400px);
    padding: 0.4rem 1rem;
    gap: 0.5rem;
  }
  
  .register-btn {
    padding: 0.4rem 0.85rem;
    font-size: 0.75rem;
  }
}

/* Small mobile screens */
@media (max-width: 640px) {
  .nav {
    width: min(98%, 1400px);
    padding: 0.35rem 0.85rem;
    gap: 0.4rem;
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .header {
    padding: 0.5rem;
  }
  
  .nav {
    width: 99%;
    padding: 0.3rem 0.7rem;
    gap: 0.35rem;
  }
  
  .logo-image {
    height: 24px;
  }
  
  .register-btn {
    padding: 0.35rem 0.75rem;
    font-size: 0.7rem;
  }
}

/* Hide navbar register button on screens ≤400px */
@media (max-width: 400px) {
  .register-btn {
    display: none;
  }
}


</style>