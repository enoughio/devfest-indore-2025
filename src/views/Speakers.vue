<template>
  <v-container fluid class="speakers-section pa-0">
    <!-- Full-width Heading Section -->
    <section class="speakers-header text-center">
      <p class="gdg-heading mb-1">Speakers</p>
      <p class="gdg-subheading mb-6">
        Our speakers are influential leaders and allies actively involved in various
        communities within their organizations, cities, countries, and beyond,
        making a significant impact through their contributions and support.
      </p>
    </section>

    <!-- Main Content -->
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <!-- Sub-heading -->
        <p class="gdg-subtitle mb-4 text-center">This year speakers</p>

        <!-- Speaker Cards -->
        <v-container fluid class="px-1">
          <v-row justify="center" class="fill-height">
           <v-col
              md="4"
              lg="3"
              xl="2"
              sm="2"
              cols="6"
              style="max-width: none !important;"
              class="shadows"
              v-for="(item, index) in SpeakersData"
              :key="index"
            >
              <SpeakerCard :speakerData="item" :sessionDetails="SessionDetails" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SpeakersData from "@/assets/data/speakers.json";
import SessionDetails from "@/assets/data/sessions.json";
import SpeakerCard from "@/components/speakers/SpeakerDialog.vue";

export default {
  name: "SpeakersView",
  components: {
    SpeakerCard,
  },
  data: () => ({
    SpeakersData: [],
    SessionDetails: [],
  }),
  methods: {
    sortByName(data) {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  mounted() {
    this.SpeakersData = this.sortByName(SpeakersData);
    this.SessionDetails = SessionDetails.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
  },
  created() {
    document.title = "Speakers | Devfest Indore 2025";
  },
};
</script>

<style scoped>
/* 🔹 Overall Page Layout */
.speakers-section {
  margin-top: 8vh;
  margin-bottom: 2rem;
}

/* 🔹 Full-width header section */
.speakers-header {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: #f9fafb;
  padding: 3rem 1rem;
  text-align: center;
}

/* 🔹 Heading Styles */
.gdg-heading {
  font-size: 2.8rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
}

/* 🔹 Subheading paragraph */
.gdg-subheading {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* 🔹 Subtitle before cards */
.gdg-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  color: #111;
}

/* 🔹 Card Styling */
.shadows {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.07),
              0 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  transition: all 0.3s ease;
  background: #fff;
}

.shadows:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-3px);
}
</style>
