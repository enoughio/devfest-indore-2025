<template>
  <div class="statistics-section">
    <div class="statistics-container">
      <!-- Left Side - Abstract Shapes -->
      <div class="statistics-left">
        <img src="@/assets/details-element.svg" alt="Details" class="details-element" />
      </div>

      <!-- Right Side - Statistics Blocks -->
      <div class="statistics-blocks">
        <div class="stat-block stat-block-blue">
          <div class="stat-number">35+</div>
          <div class="stat-label">Speakers</div>
        </div>
        <div class="stat-block stat-block-pink">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Participants</div>
        </div>
        <div class="stat-block stat-block-green">
          <div class="stat-number">25+</div>
          <div class="stat-label">Sessions</div>
        </div>
        <div class="stat-block stat-block-yellow">
          <div class="stat-number">1</div>
          <div class="stat-label">Day(s)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsSection'
}
</script>

<style scoped>
/* Statistics Section */
.statistics-section {
  width: 100%;
  padding: var(--space-xs) var(--padding-section-x);
  display: flex;
  justify-content: center;
}

.statistics-container {
  max-width: var(--content-max-width);
  width: var(--content-width);
  background-color: var(--color-bg-lighter);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl) var(--space-xl) var(--space-md) 0;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.statistics-left {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  height: 100%;
}

.details-element {
  width: auto;
  height: 100%;
  max-height: 280px;
  display: block;
}

.statistics-blocks {
  display: flex;
  gap: var(--space-md);
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 380px;
}

.stat-block {
  flex: 1;
  min-width: 120px;
  border-radius: var(--radius-md);
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.stat-block-blue {
  background-image: url('@/assets/blue.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.stat-block-pink {
  background-image: url('@/assets/pink.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.stat-block-green {
  background-image: url('@/assets/green.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.stat-block-yellow {
  background-image: url('@/assets/yellow.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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
  margin: 0;
  font-family: var(--font-sans);
}

/* Responsive Design for Statistics */
@media (max-width: 1024px) {
  .statistics-container {
    flex-direction: column;
    padding: 1.5rem;
    width: var(--content-width-tablet);
  }

  .statistics-left {
    position: relative;
    width: 100%;
    justify-content: flex-start;
    bottom: auto;
    left: auto;
  }

  .details-element {
    max-width: 180px;
  }

  .statistics-blocks {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }

  .stat-block {
    min-width: 140px;
    flex: 0 1 calc(50% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .statistics-section {
    padding: 1.5rem var(--padding-section-x);
  }

  .statistics-container {
    padding: 1.25rem;
    gap: 1.5rem;
    width: var(--content-width-mobile);
  }

  .statistics-left {
    position: relative;
    bottom: auto;
    left: auto;
  }

  .details-element {
    max-width: 150px;
  }

  .statistics-blocks {
    gap: 0.75rem;
    margin-left: 0;
  }

  .stat-block {
    min-width: 100px;
    height: 180px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .statistics-section {
    padding: var(--padding-section-x) 0.75rem;
  }

  .statistics-container {
    padding: 1rem;
    gap: 1rem;
    border-radius: 12px;
    width: var(--content-width-mobile);
  }

  .details-element {
    max-width: 120px;
  }

  .statistics-blocks {
    flex-direction: column;
    width: 100%;
  }

  .stat-block {
    width: 100%;
    min-width: unset;
    height: 160px;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}
</style>

