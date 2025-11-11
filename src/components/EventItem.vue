<template>
  <div class="event-item" @click="$emit('click')">
    <div class="time-column">
      <div class="start-time">{{ event.startTime }}</div>
      <div class="end-time">{{ event.endTime }}</div>
    </div>
    <div class="details-column">
      <div class="event-title">{{ event.title }}</div>
      <div class="track-tag">{{ event.track }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.event-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.event-item:last-child {
  border-bottom: none;
}

.event-item:hover {
  background-color: #f5f5f5;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: -16px;
  margin-right: -16px;
  border-radius: 8px;
}

.time-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.start-time {
  font-size: var(--text-lg);
  font-weight: 500;
  color: #202124;
  line-height: 1.4;
  font-family: var(--font-mono);
}

.end-time {
  font-size: var(--text-base);
  font-weight: 400;
  color: #5f6368;
  line-height: 1.4;
  font-family: var(--font-mono);
}

.details-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.event-title {
  font-size: 1rem;
  font-weight: 500;
  color: #202124;
  line-height: 1.5;
  font-family: var(--font-sans);
}

.track-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1a73e8;
  background-color: #e8f0fe;
  padding: 4px 12px;
  border-radius: 16px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .event-item {
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  
  .start-time {
    font-size: var(--text-base);
  }
  
  .end-time {
    font-size: var(--text-sm);
  }
  
  .event-title {
    font-size: var(--text-sm);
  }
}
</style>
