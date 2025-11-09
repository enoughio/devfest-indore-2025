<template>
  <div class="agenda-page">
    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <h1 class="page-title">Agenda</h1>
        <p class="preamble">
          Follow code demonstrations by our expert speakers on different tracks. 
          Check out the schedule below and don't forget to mark your calendar so 
          that you don't miss out on any sessions.
        </p>
      </div>

      <!-- Static Events Section -->
      <div class="static-events-section">
        <EventItem
          v-for="event in staticEvents"
          :key="event.id"
          :event="event"
          @click="openModal(event)"
        />
      </div>

      <!-- Track Navigation -->
      <div class="track-navigation">
        <div class="track-tabs">
          <button
            v-for="track in dynamicTracks"
            :key="track"
            class="track-tab"
            :class="{ active: activeTrack === track }"
            @click="activeTrack = track"
          >
            {{ track }}
          </button>
        </div>
      </div>

      <!-- Dynamic Events Section -->
      <div class="dynamic-events-section">
        <EventItem
          v-for="event in dynamicEvents"
          :key="event.id"
          :event="event"
          @click="openModal(event)"
        />
      </div>

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
import { ref, computed } from 'vue'
import EventItem from '@/components/EventItem.vue'
import EventModal from '@/components/EventModal.vue'

export default {
  name: 'AgendaView',
  components: {
    EventItem,
    EventModal
  },
  setup() {
    // All events data
    const allEvents = ref([
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
    ])

    // Active track state
    const activeTrack = ref('Track 1')

    // Modal state
    const showModal = ref(false)
    const selectedEvent = ref({})

    // Computed: Static events (Main Event track)
    const staticEvents = computed(() => {
      return allEvents.value.filter(event => event.track === 'Main Event')
    })

    // Computed: Dynamic tracks (exclude Main Event)
    const dynamicTracks = computed(() => {
      const tracks = [...new Set(allEvents.value.map(event => event.track))]
      return tracks.filter(track => track !== 'Main Event')
    })

    // Computed: Dynamic events based on active track
    const dynamicEvents = computed(() => {
      return allEvents.value.filter(event => event.track === activeTrack.value)
    })

    // Methods
    const openModal = (event) => {
      selectedEvent.value = event
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return {
      allEvents,
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
.agenda-page {
  min-height: calc(100vh - 80px);
  background-color: #ffffff;
  padding: 48px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header Section */
.header-section {
  margin-bottom: 48px;
}

.page-title {
  font-size: 3rem;
  font-weight: 400;
  color: #202124;
  margin: 0 0 24px 0;
  letter-spacing: -0.5px;
}

.preamble {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #5f6368;
  margin: 0;
  max-width: 800px;
}

/* Static Events Section */
.static-events-section {
  margin-bottom: 48px;
}

/* Track Navigation */
.track-navigation {
  margin-bottom: 32px;
  border-bottom: 1px solid #e0e0e0;
}

.track-tabs {
  display: flex;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.track-tabs::-webkit-scrollbar {
  display: none;
}

.track-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 16px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #5f6368;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.track-tab:hover {
  background-color: #f5f5f5;
  color: #202124;
}

.track-tab.active {
  color: #1a73e8;
  border-bottom-color: #1a73e8;
}

/* Dynamic Events Section */
.dynamic-events-section {
  margin-bottom: 48px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .agenda-page {
    padding: 32px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .header-section {
    margin-bottom: 32px;
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 16px;
  }
  
  .preamble {
    font-size: 1rem;
  }
  
  .static-events-section,
  .dynamic-events-section {
    margin-bottom: 32px;
  }
  
  .track-tab {
    padding: 12px 16px;
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .preamble {
    font-size: 0.9375rem;
  }
  
  .track-tab {
    padding: 12px 12px;
  }
}
</style>

