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
  font-size: 1.125rem;
  font-weight: 500;
  color: #202124;
  line-height: 1.4;
}

.end-time {
  font-size: 0.875rem;
  font-weight: 400;
  color: #5f6368;
  line-height: 1.4;
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
}

@media (max-width: 768px) {
  .event-item {
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  
  .start-time {
    font-size: 1rem;
  }
  
  .end-time {
    font-size: 0.8125rem;
  }
  
  .event-title {
    font-size: 0.9375rem;
  }
}
</style>
