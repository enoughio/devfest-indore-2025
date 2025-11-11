<template>
  <div class="hero-section">
    <div class="hero-container">
      <!-- Left Image -->
      <div class="hero-left-image">
        <div class="left-image-container">
          <img src="@/assets/hero-img1.png" alt="DevFest Indore" class="left-hero-image" />
        </div>
      </div>

      <!-- Left Content -->
      <div class="hero-left-content">
        <!-- Description -->
        <div class="description-section">
          <p class="description-text">
            DevFest Indore is India's largest community driven tech conference, hosted by Google Developer Groups Indore, bringing together industry experts for an in-depth exploration of emerging technologies, best practices, and innovative solutions.
          </p>
          <p class="description-text">
            Now in its 12th edition, DevFest Indore continues to attract passionate professionals from diverse industries, including developers, architects, product owners, team leaders, coaches, and managers, all eager to expand their knowledge and stay ahead of the curve.
          </p>
        </div>

        <!-- Date and Location Info -->
        <div class="info-section">
          <div class="info-item">
            <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>15 December 2025</span>
            <svg class="info-icon info-icon-spacing" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="location-link">Sayaji Indore</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <button class="cta-btn primary" @click="handleRegister">REGISTER NOW</button>
          <router-link to="/sponsors" class="cta-btn secondary">Sponsors</router-link>
        </div>
      </div>

      <!-- Right Section -->
      <div class="hero-right">
        <div class="right-image-container">
          <img src="@/assets/hero-2025-image2.svg" alt="DevFest Indore" class="right-hero-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    handleRegister() {
      window.open('https://konfhub.com/pre-devfest-indore', '_blank')
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - var(--navbar-height));
  padding: var(--space-sm) var(--padding-section-x) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--navbar-height);
}

.hero-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

/* Left Image - Desktop: part of left column */
.hero-left-image {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  grid-column: 1;
  grid-row: 1;
}

/* Left Content - Desktop: part of left column, below image */
.hero-left-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
}

/* Right Section - Desktop: right column */
.hero-right {
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-image-container {
  width: 100%;
  max-width: 400px;
  background: transparent;
  margin: 0 auto 0 0;
}

.left-hero-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: transparent;
  mix-blend-mode: normal;
}

.description-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #000000;
  font-family: var(--font-sans);
  margin: 0;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #000000;
  font-family: var(--font-sans);
  flex-wrap: wrap;
}

.info-icon {
  flex-shrink: 0;
  color: #000000;
}

.info-icon-spacing {
  margin-left: 1rem;
}

.location-link {
  text-decoration: underline;
  cursor: pointer;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-btn {
  background-color: #FBBC04;
  color: #333333;
  border: 1px solid #000000;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font-sans);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.2s;
  white-space: nowrap;
}

.cta-btn:hover {
  background-color: #F9AB00;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-btn.secondary {
  background-color: #FBBC04;
}


.right-image-container {
  width: 100%;
  max-width: 100%;
  background: transparent;
}

.right-hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: transparent;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-container {
    gap: 3rem;
  }
  
  .left-image-container {
    max-width: 350px;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    width: var(--content-width-tablet);
  }
  
  /* Mobile order: left image (1), content (2), right image (3) */
  .hero-left-image {
    grid-column: 1;
    grid-row: auto;
    order: 1;
    justify-content: center;
  }
  
  .hero-left-content {
    grid-column: 1;
    grid-row: auto;
    order: 2;
    align-items: center;
    text-align: center;
  }
  
  .hero-right {
    grid-column: 1;
    grid-row: auto;
    order: 3;
  }
  
  .left-image-container {
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1.5rem var(--padding-section-x);
  }
  
  .hero-container {
    gap: 2rem;
    width: var(--content-width-mobile);
  }
  
  .hero-left-content {
    gap: 1.5rem;
  }
  
  .left-image-container {
    max-width: 280px;
  }
  
  .description-text {
    font-size: 0.9rem;
    text-align: left;
  }
  
  .info-section {
    align-items: flex-start;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-btn {
    width: 100%;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: var(--padding-section-x) 0.75rem;
  }
  
  .hero-container {
    gap: 1.5rem;
    width: var(--content-width-mobile);
  }
  
  .hero-left {
    gap: 1.25rem;
  }
  
  .left-image-container {
    max-width: 220px;
  }
  
  .description-text {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .info-item {
    font-size: 0.875rem;
    flex-wrap: wrap;
  }
  
  .info-icon {
    width: 18px;
    height: 18px;
  }
  
  .cta-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>

