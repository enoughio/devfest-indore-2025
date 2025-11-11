<template>
  <div class="page-content">
    <div class="page-content-container">
      <!-- Header Section -->
      <section class="header-section" aria-label="Page header">
        <h1 class="page-title">Agenda</h1>
        <p class="preamble">
          Follow code demonstrations by our expert speakers on different tracks. 
          Check out the schedule below and don't forget to mark your calendar so 
          that you don't miss out on any sessions.
        </p>
      </section>

      <!-- Static Events Section -->
      <section class="static-events-section" aria-label="Main events">
        <EventItem
          v-for="event in staticEvents"
          :key="event.id"
          :event="event"
          @click="openModal(event)"
        />
      </section>

      <!-- Track Navigation -->
      <nav class="track-navigation" aria-label="Event track filters">
        <div class="track-tabs" role="tablist">
          <button
            v-for="track in dynamicTracks"
            :key="track"
            class="track-tab"
            :class="{ active: activeTrack === track }"
            role="tab"
            :aria-selected="activeTrack === track"
            :tabindex="activeTrack === track ? 0 : -1"
            @click="activeTrack = track"
            @keydown.enter.prevent="activeTrack = track"
            @keydown.space.prevent="activeTrack = track"
          >
            {{ track }}
          </button>
        </div>
      </nav>

      <!-- Dynamic Events Section -->
      <section class="dynamic-events-section" aria-label="Track events">
        <template v-if="dynamicEvents.length > 0">
          <EventItem
            v-for="event in dynamicEvents"
            :key="event.id"
            :event="event"
            @click="openModal(event)"
          />
        </template>
        <div v-else class="empty-state">
          <p>No events scheduled for this track.</p>
        </div>
      </section>

      <!-- Event Modal -->
      <EventModal
        :show="showModal"
        :event="selectedEvent"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EventItem from '@/components/EventItem.vue'
import EventModal from '@/components/EventModal.vue'

const EVENTS = [
  // Static Main Events
  {
    id: 1,
    startTime: '9:30 AM',
    endTime: '10:00 AM',
    title: 'Welcome Note',
    track: 'Main Event',
    date: 'Nov 30, 2024',
    fullTime: '09:30 AM to 10:00 AM',
    duration: '30 Min',
    overview: 'Join us for the opening ceremony of DevFest Indore 2025. Meet the organizers, learn about the event schedule, and get ready for an amazing day of learning and networking.'
  },
  {
    id: 2,
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    title: 'Keynote',
    track: 'Main Event',
    date: 'Nov 30, 2024',
    fullTime: '10:00 AM to 11:00 AM',
    duration: '60 Min',
    overview: 'An inspiring keynote presentation covering the latest trends in technology, innovation, and developer tools. Learn about what\'s next in the Google ecosystem and beyond.'
  },
  // Track 1 Events
  {
    id: 3,
    startTime: '11:15 AM',
    endTime: '11:45 AM',
    title: 'Building Scalable Apps with Flutter',
    track: 'Track 1',
    date: 'Nov 30, 2024',
    fullTime: '11:15 AM to 11:45 AM',
    duration: '30 Min',
    overview: 'Learn best practices for building scalable mobile applications using Flutter. This session covers architecture patterns, state management, and performance optimization techniques.'
  },
  {
    id: 4,
    startTime: '12:00 PM',
    endTime: '12:30 PM',
    title: 'Modern Web Development with Angular',
    track: 'Track 1',
    date: 'Nov 30, 2024',
    fullTime: '12:00 PM to 12:30 PM',
    duration: '30 Min',
    overview: 'Discover the latest features in Angular and learn how to build modern, performant web applications. Topics include signals, standalone components, and server-side rendering.'
  },
  {
    id: 5,
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    title: 'Cloud-Native Applications with Google Cloud',
    track: 'Track 1',
    date: 'Nov 30, 2024',
    fullTime: '02:00 PM to 02:30 PM',
    duration: '30 Min',
    overview: 'Explore cloud-native development patterns and learn how to leverage Google Cloud Platform services to build scalable, resilient applications.'
  },
  // Track 2 Events
  {
    id: 6,
    startTime: '11:15 AM',
    endTime: '11:45 AM',
    title: 'Introduction to Machine Learning with TensorFlow',
    track: 'Track 2',
    date: 'Nov 30, 2024',
    fullTime: '11:15 AM to 11:45 AM',
    duration: '30 Min',
    overview: 'Get started with machine learning using TensorFlow. Learn fundamental concepts and build your first ML model in this hands-on session.'
  },
  {
    id: 7,
    startTime: '12:00 PM',
    endTime: '12:30 PM',
    title: 'Firebase: Building Real-time Applications',
    track: 'Track 2',
    date: 'Nov 30, 2024',
    fullTime: '12:00 PM to 12:30 PM',
    duration: '30 Min',
    overview: 'Learn how to build real-time applications using Firebase. This session covers Firestore, Authentication, Cloud Functions, and more.'
  },
  {
    id: 8,
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    title: 'Android Development Best Practices',
    track: 'Track 2',
    date: 'Nov 30, 2024',
    fullTime: '02:00 PM to 02:30 PM',
    duration: '30 Min',
    overview: 'Discover modern Android development best practices including Jetpack Compose, Kotlin coroutines, and architectural patterns.'
  },
  // Lightning Talks
  {
    id: 9,
    startTime: '3:00 PM',
    endTime: '3:15 PM',
    title: 'The Future of Web: WebAssembly',
    track: 'Lightning Talks',
    date: 'Nov 30, 2024',
    fullTime: '03:00 PM to 03:15 PM',
    duration: '15 Min',
    overview: 'A quick dive into WebAssembly and how it\'s changing the landscape of web development.'
  },
  {
    id: 10,
    startTime: '3:15 PM',
    endTime: '3:30 PM',
    title: 'Chrome DevTools Pro Tips',
    track: 'Lightning Talks',
    date: 'Nov 30, 2024',
    fullTime: '03:15 PM to 03:30 PM',
    duration: '15 Min',
    overview: 'Learn advanced Chrome DevTools techniques to supercharge your debugging and development workflow.'
  },
  {
    id: 11,
    startTime: '3:30 PM',
    endTime: '3:45 PM',
    title: 'GraphQL in 15 Minutes',
    track: 'Lightning Talks',
    date: 'Nov 30, 2024',
    fullTime: '03:30 PM to 03:45 PM',
    duration: '15 Min',
    overview: 'A rapid introduction to GraphQL and why it might be the right choice for your next API.'
  },
  // Career Compass
  {
    id: 12,
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    title: 'Navigating Your Tech Career',
    track: 'Career Compass',
    date: 'Nov 30, 2024',
    fullTime: '04:00 PM to 04:30 PM',
    duration: '30 Min',
    overview: 'Get expert advice on navigating your career in tech. Topics include skill development, job searching, and career growth strategies.'
  },
  {
    id: 13,
    startTime: '4:30 PM',
    endTime: '5:00 PM',
    title: 'Interview Preparation for Developers',
    track: 'Career Compass',
    date: 'Nov 30, 2024',
    fullTime: '04:30 PM to 05:00 PM',
    duration: '30 Min',
    overview: 'Learn how to prepare for technical interviews, including coding challenges, system design, and behavioral questions.'
  },
  // Founders and CXOs Round Table
  {
    id: 14,
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    title: 'Building Successful Tech Startups',
    track: 'Founders and CXOs Round Table',
    date: 'Nov 30, 2024',
    fullTime: '05:30 PM to 06:00 PM',
    duration: '30 Min',
    overview: 'Join successful founders and CXOs as they share insights on building and scaling tech startups. Learn about funding, team building, and product-market fit.'
  },
  {
    id: 15,
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    title: 'Leadership in Technology',
    track: 'Founders and CXOs Round Table',
    date: 'Nov 30, 2024',
    fullTime: '06:00 PM to 06:30 PM',
    duration: '30 Min',
    overview: 'A panel discussion on leadership challenges in technology companies, featuring perspectives from experienced executives.'
  }
]

export default {
  name: 'AgendaView',
  components: {
    EventItem,
    EventModal
  },
  setup() {
    const showModal = ref(false)
    const selectedEvent = ref({})
    const activeTrack = ref('')

    const staticEvents = computed(() => 
      EVENTS.filter(event => event.track === 'Main Event')
    )

    const dynamicTracks = computed(() => {
      const tracks = [...new Set(EVENTS.map(event => event.track))].filter(
        track => track !== 'Main Event'
      )
      if (!activeTrack.value && tracks.length > 0) {
        activeTrack.value = tracks[0]
      }
      return tracks
    })

    const dynamicEvents = computed(() =>
      EVENTS.filter(event => event.track === activeTrack.value)
    )

    const openModal = (event) => {
      selectedEvent.value = event
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      selectedEvent.value = {}
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && showModal.value) {
        closeModal()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })

    return {
      staticEvents,
      dynamicTracks,
      dynamicEvents,
      activeTrack,
      showModal,
      selectedEvent,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
/* Header Section */
.header-section {
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
}

.page-title {
  font-size: var(--text-4xl);
  font-weight: 600;
  color: #202124;
  margin: 0;
  letter-spacing: -0.5px;
  font-family: var(--font-sans);
}

.preamble {
  font-size: var(--text-base);
  line-height: 1.6;
  color: #000000;
  margin: 0;
  font-family: var(--font-sans);
}

/* Static Events Section */
.static-events-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Track Navigation */
.track-navigation {
  width: 100%;
  margin: 0;
  padding: 0;
}

.track-tabs {
  display: flex;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  margin: 0;
  padding: 0;
}

.track-tabs::-webkit-scrollbar {
  display: none;
}

.track-tab {
  background-color: transparent;
  border: none;
  padding: clamp(var(--space-sm), 2vw, var(--space-md)) clamp(var(--text-sm), 3vw, var(--space-lg));
  font-size: clamp(0.7rem, 1.5vw, var(--text-sm));
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--font-sans);
  min-height: 44px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-xl);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.track-tab:hover {
  background-color: var(--color-bg-light);
  color: var(--color-text-primary);
}

.track-tab:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.track-tab.active {
  color: var(--color-accent);
  background-color: var(--color-accent-bg);
}

/* Dynamic Events Section */
.dynamic-events-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.empty-state {
  text-align: center;
  padding: clamp(var(--space-xl), 5vw, var(--space-3xl)) clamp(var(--space-md), 2vw, var(--space-xl));
  color: var(--color-text-secondary);
  font-size: clamp(0.8125rem, 1.5vw, var(--text-sm));
}

.empty-state p {
  margin: 0;
}
</style>

