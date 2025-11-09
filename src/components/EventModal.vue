<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal-card">
        <div class="modal-header">
          <h2 class="modal-title">Details</h2>
          <button class="close-icon" @click="close" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#5f6368"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="timing-info">
            <div class="timing-item">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z" fill="#5f6368"/>
              </svg>
              <span>{{ event.date }}</span>
            </div>
            <div class="timing-item">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#5f6368"/>
              </svg>
              <span>{{ event.fullTime }}</span>
            </div>
            <div class="timing-item">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20Z" fill="#5f6368"/>
              </svg>
              <span>{{ event.duration }}</span>
            </div>
          </div>

          <div class="overview-section">
            <h3 class="section-title">Overview</h3>
            <div class="track-badge">{{ event.track }}</div>
            <p v-if="event.overview" class="overview-text">{{ event.overview }}</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="close-button" @click="close">CLOSE</button>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
              0 24px 38px 3px rgba(0, 0, 0, 0.14),
              0 9px 46px 8px rgba(0, 0, 0, 0.12);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #202124;
  margin: 0;
}

.close-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.close-icon:hover {
  background-color: #f5f5f5;
}

.modal-body {
  padding: 24px;
  flex: 1;
}

.timing-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.timing-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: #5f6368;
}

.icon {
  flex-shrink: 0;
}

.overview-section {
  margin-top: 24px;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #202124;
  margin: 0 0 16px 0;
}

.track-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1a73e8;
  background-color: #e8f0fe;
  padding: 6px 16px;
  border-radius: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.overview-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #5f6368;
  margin: 0;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
}

.close-button {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #e8f0fe;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .modal-card {
    max-height: 95vh;
    margin: 8px;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 16px;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
}
</style>
