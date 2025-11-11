<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal-card">
        <div class="modal-header">
          <h2 class="modal-title">Event Details</h2>
          <button class="close-button" @click="close" aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div class="modal-divider"></div>

        <div class="modal-body">
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Date</div>
              <div class="info-value">{{ event.date }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Time</div>
              <div class="info-value">{{ event.fullTime }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Duration</div>
              <div class="info-value">{{ event.duration }}</div>
            </div>
          </div>

          <div class="overview-section">
            <div class="section-header">
              <h3 class="section-title">Overview</h3>
              <span class="track-badge">{{ event.track }}</span>
            </div>
            <p v-if="event.overview" class="overview-text">{{ event.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'EventModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-card {
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 600px;
  width: 100%;
  max-height: clamp(60vh, 90vh, 85vh);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1.5rem, 4vw, 2rem);
  padding-bottom: 1rem;
}

.modal-title {
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  font-weight: 600;
  color: #202124;
  margin: 0;
  letter-spacing: 0;
  font-family: var(--font-sans);
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  transition: all 0.2s ease;
  min-width: 48px;
  min-height: 48px;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.close-button:hover {
  background-color: rgba(95, 99, 104, 0.08);
  color: #202124;
}

.close-button:focus-visible {
  outline: 2px solid #1a73e8;
}

.modal-divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 0 clamp(1.5rem, 4vw, 2rem);
}

.modal-body {
  padding: clamp(1.5rem, 4vw, 2rem);
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-size: var(--text-xs);
  font-weight: 500;
  color: #5f6368;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  font-family: var(--font-mono);
}

.info-value {
  font-size: var(--text-xs);
  font-weight: 500;
  color: #202124;
  font-family: var(--font-mono);
}

.overview-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}

.section-title {
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  color: #202124;
  margin: 0;
  font-family: var(--font-sans);
}

.track-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1a73e8;
  background-color: #e8f0fe;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  font-family: var(--font-mono);
}

.overview-text {
  font-size: clamp(0.875rem, 1.5vw, 0.9375rem);
  line-height: 1.6;
  color: #5f6368;
  margin: 0;
  font-family: var(--font-sans);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s cubic-bezier(0.2, 0, 0, 1);
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: scale(0.95) translateY(12px);
}

/* Mobile optimization */
@media (max-width: 600px) {
  .modal-overlay {
    align-items: flex-end;
  }

  .modal-card {
    border-radius: 28px 28px 0 0;
    max-height: 85vh;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}

/* Scrollbar styling */
.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: transparent;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}
</style>
