<template>
  <div class="last-year-section">
    <div class="last-year-container">
      <!-- Top Section: Title and Description -->
      <div class="top-content">
        <h2 class="section-title">Last Year at DevFest</h2>
        <p class="section-description">
          DevFest 2024 was an unforgettable experience, uniting 1,000+ passionate participants and 35+ expert speakers for a day filled with inspiration and learning. Attendees engaged in 25+ dynamic sessions, featuring lightning talks, workshops, and discussions on cutting-edge technologies. The event showcased the power of community, collaboration, and knowledge exchange, with participants gaining insights into the latest trends and tools in tech.
        </p>
      </div>

      <!-- Main Group Image -->
      <div class="main-image-container">
        <img src="@/assets/last-year-images/group-image-2024.jpg" alt="DevFest 2024 Group Photo" class="main-group-image" />
      </div>

      <!-- Statistics Section -->
      <div class="stats-section">
        <div class="stat-box stat-box-blue">
          <div class="stat-number">35+</div>
          <div class="stat-label">Speakers</div>
        </div>
        <div class="stat-box stat-box-pink">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Participants</div>
        </div>
        <div class="stat-box stat-box-yellow">
          <div class="stat-number">25+</div>
          <div class="stat-label">Sessions</div>
        </div>
        <div class="stat-box stat-box-green">
          <div class="stat-number">1</div>
          <div class="stat-label">Day(s)</div>
        </div>
      </div>

      <!-- Bottom Two Images -->
      <div class="bottom-images">
        <div class="bottom-image-wrapper">
          <img src="@/assets/last-year-images/image-1.jpg" alt="Speaker Session" class="bottom-image" />
        </div>
        <div class="bottom-image-wrapper">
          <img src="@/assets/last-year-images/image-2.jpg" alt="Panel Discussion" class="bottom-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastYearSection'
}
</script>

<style scoped>
.last-year-section {
  width: 100%;
  padding: var(--space-4xl) var(--padding-section-x) var(--space-xl);
  display: flex;
  justify-content: center;
}

.last-year-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

/* Top Content */
.top-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: bold;
  color: var(--color-text-body);
  margin: 0;
}

.section-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-body);
  margin: 0;
}

/* Main Image */
.main-image-container {
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid #000000;
}

.main-group-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Statistics Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.stat-box {
  border: 1px solid #000000;
  border-radius: var(--radius-md);
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.stat-box-blue {
  background-color: #B3E5FC;
}

.stat-box-pink {
  background-color: #FFB3D9;
}

.stat-box-yellow {
  background-color: #FFF9C4;
}

.stat-box-green {
  background-color: #C8E6C9;
}

.stat-number {
  font-size: var(--text-4xl);
  font-weight: bold;
  color: #1E1E1E;
  margin: 0;
  font-family: var(--font-mono);
}

.stat-label {
  font-size: var(--text-base);
  color: #1E1E1E;
  margin: var(--space-sm) 0 0 0;
}

/* Bottom Images */
.bottom-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.bottom-image-wrapper {
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid #000000;
}

.bottom-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .last-year-container {
    width: var(--content-width-tablet);
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bottom-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .last-year-section {
    padding: 3rem var(--padding-section-x) 1.5rem;
  }
  
  .last-year-container {
    width: var(--content-width-mobile);
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-box {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .last-year-section {
    padding: 2.5rem 0.75rem var(--padding-section-x);
  }
  
  .last-year-container {
    width: var(--content-width-mobile);
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-description {
    font-size: 0.9rem;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .stat-box {
    padding: 1.25rem 1rem;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
  }
}
</style>

