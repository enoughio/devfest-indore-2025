<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Google+Sans+Mono:wght@400;500;600;700&display=swap');

:root {
  /* Font families */
  --font-sans: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Google Sans Mono', 'Courier New', monospace;
  
  /* Typography Scale (fluid with clamp - matches home page responsive behavior) */
  --text-xs: clamp(0.65rem, 0.5vw + 0.55rem, 0.75rem);      /* 10.4px → 12px */
  --text-sm: clamp(0.75rem, 0.8vw + 0.6rem, 0.875rem);      /* 12px → 14px */
  --text-base: clamp(0.8rem, 1.2vw + 0.6rem, 1rem);         /* 12.8px → 16px (paragraphs) */
  --text-lg: clamp(0.9rem, 1.4vw + 0.65rem, 1.125rem);      /* 14.4px → 18px */
  --text-xl: clamp(1.05rem, 1.6vw + 0.7rem, 1.25rem);       /* 16.8px → 20px */
  --text-2xl: clamp(1.3rem, 2.2vw + 0.75rem, 1.5rem);       /* 20.8px → 24px */
  --text-3xl: clamp(1.75rem, 2.5vw + 1rem, 2rem);           /* 28px → 32px */
  --text-4xl: clamp(1.75rem, 4vw + 1rem, 2.5rem);           /* 28px → 40px */
  
  /* Spacing Scale (rem-based) */
  --space-xs: 0.25rem;     /* 4px */
  --space-sm: 0.5rem;      /* 8px */
  --space-md: 1rem;        /* 16px */
  --space-lg: 1.5rem;      /* 24px */
  --space-xl: 2rem;        /* 32px */
  --space-2xl: 2.5rem;     /* 40px */
  --space-3xl: 3rem;       /* 48px */
  --space-4xl: 4rem;       /* 64px */
  
  /* Border Radius Scale */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 28px;
  --radius-full: 50%;
  
  /* Layout System */
  --navbar-height: 80px;
  --page-margin-top: 80px;
  --content-max-width: 1400px;
  --content-width: 80%;
  --content-width-tablet: 90%;
  --content-width-mobile: 95%;
  
  /* Responsive Padding */
  --padding-section-y: clamp(2.5rem, 5vw, 4rem);
  --padding-section-x: 1rem;
  --gap-section: clamp(1rem, 3vw, 2rem);
  
  /* Colors */
  --color-text-primary: #202124;
  --color-text-secondary: #5f6368;
  --color-text-body: #000000;
  --color-accent: #1a73e8;
  --color-accent-bg: #e8f0fe;
  --color-bg-light: #f5f5f5;
  --color-bg-lighter: #E5E5E5;
  --color-border: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  background-color: #ffffff;
  color: var(--color-text-body);
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  background-color: #ffffff;
}

/* Typography utilities */
.font-mono { font-family: var(--font-mono); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-sans); margin: 0; }
h1 { font-size: var(--text-4xl); line-height: 1.2; }
h2 { font-size: var(--text-3xl); line-height: 1.25; }
h3 { font-size: var(--text-2xl); line-height: 1.3; }
p { margin: 0; line-height: 1.6; }

/* ============================================
   UNIFIED LAYOUT SYSTEM
   Based on original Home page gold standard
   ============================================ */

/* Page wrapper - for non-home pages (Agenda, Team, FAQ, etc.) */
.page-content {
  width: 100%;
  margin-top: var(--navbar-height);
  padding: 0.5rem 1rem var(--space-xl) 1rem;
  display: flex;
  justify-content: center;
}

/* Content container - for non-home pages */
.page-content-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  gap: var(--gap-section);
}

/* Responsive width utilities */
@media (max-width: 1024px) {
  .page-content-container {
    width: var(--content-width-tablet);
  }
}

@media (max-width: 768px) {
  .page-content-container {
    width: var(--content-width-mobile);
  }
}

</style>