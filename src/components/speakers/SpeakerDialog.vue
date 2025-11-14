<template>
  <v-dialog v-model="dialog" max-width="850">
    <template #activator="{ props: activatorProps }">
      <div
        v-bind="activatorProps"
        class="text-center ma-0 fill-height card-activator"
      >
        <div class="heightabove">
          <v-avatar size="150">
            <v-img
              :src="getImgUrl(speakerData.image)"
              :alt="speakerData.name"
              cover
            />
          </v-avatar>

          <p class="mt-3 mb-0 font-weight-medium" style="font-size: 110%">
            {{ speakerData.name }}
          </p>
          <p class="mt-1 mb-0" style="font-size: 80%">
            {{ speakerData.company?.name }}
          </p>
        </div>

        <!-- 🔹 Social Media Icons -->
        <div class="height social-icons">
          <!-- X (Twitter) -->
          <v-btn
            v-if="speakerData.social?.twitter"
            icon
            size="small"
            :href="speakerData.social.twitter"
            target="_blank"
            variant="flat"
            class="mx-1 twitter-btn"
          >
            <v-icon size="20" class="twitter-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M714.163 519.284L1160.89 0h-106.91L663.77 442.53 363.197 0H0l468.755 681.707L0 1226.37h106.91l418.11-466.892
                  316.38 466.892H1200L714.163 519.284zM575.705 686.272l-48.47-69.188L145.91 79.71h166.876l311.423 444.31
                  48.47 69.188 397.58 567.688H903.38L575.705 686.272z"
                />
              </svg>
            </v-icon>
          </v-btn>

          <!-- LinkedIn -->
          <v-btn
            v-if="speakerData.social?.linkedin"
            icon
            size="small"
            :href="speakerData.social.linkedin"
            target="_blank"
            variant="flat"
            class="mx-1"
            color="#0077b5"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </div>
    </template>

    <!-- 🔹 DIALOG CONTENT -->
    <v-card class="rounded-xl">
      <v-card-text>
        <v-container fluid class="py-6">
          <v-row>
            <v-col cols="12" md="10">
              <v-list>
                <v-list-item>
                  <template #prepend>
                    <v-avatar size="100">
                      <v-img
                        :src="getImgUrl(speakerData.image)"
                        :alt="speakerData.name"
                        cover
                      />
                    </v-avatar>
                  </template>
                  <v-list-item-title class="text-h5 font-weight-bold">
                    {{ speakerData.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-if="speakerData.company?.designation"
                    class="text-body-1"
                  >
                    {{ speakerData.company.designation }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-if="speakerData.company?.name"
                    class="text-body-1"
                  >
                    {{ speakerData.company.name }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col cols="12" md="2" class="text-right d-none d-md-flex">
              <v-tooltip text="View in New Tab" location="bottom">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-open-in-new"
                    variant="text"
                    :to="'/speakers/' + speakerData.id"
                    target="_blank"
                  />
                </template>
              </v-tooltip>
            </v-col>
          </v-row>

          <!-- 🔹 BIO -->
          <v-row class="pt-4">
            <v-col cols="12" md="12">
              <p class="text-body-1 mt-2">
                {{ speakerData.bio }}
              </p>

              <PersonSocialInfo
                v-if="speakerData.social"
                :socialInfo="speakerData.social"
                class="mb-4"
              />

              <SpeakerSessionsCard
                v-if="speakerData.sessionId?.length"
                :small="true"
                :speakerData="speakerData"
                :sessionDetails="sessionDetails"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn
          color="success"
          variant="flat"
          class="rounded-lg text-white"
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PersonSocialInfo from "@/components/common/PersonSocialInfo.vue";
import SpeakerSessionsCard from "@/components/speakers/SpeakerSessionCards.vue";

export default {
  name: "SpeakerDialog",
  components: {
    PersonSocialInfo,
    SpeakerSessionsCard,
  },
  props: {
    speakerData: {
      type: Object,
      required: true,
    },
    sessionDetails: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    getChipColor(track) {
      switch (track) {
        case "WEB":
          return "red";
        case "Cloud":
          return "green";
        case "ML":
          return "yellow";
        default:
          return "primary";
      }
    },
    getImgUrl(imagePath) {
      if (!imagePath) return "";
      if (imagePath.startsWith("http")) return imagePath;
      try {
        return new URL(
          `../../assets/img/speakers/${imagePath}`,
          import.meta.url
        ).href;
      } catch (e) {
        console.warn("⚠️ Image not found:", imagePath);
        return "";
      }
    },
  },
};
</script>

<style scoped>
.v-avatar {
  border: 3px solid #f3f4f6;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.card-activator {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  text-align: center;
}

.card-activator:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 🔹 Add spacing between social icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
}

/* 🔹 Custom X (Twitter) icon with white shadow */
.twitter-icon svg {
  fill: #000 !important;
  filter: drop-shadow(0 0 2px #ffffff)
          drop-shadow(0 0 3px #ffffff);
  transition: filter 0.3s ease;
}

.twitter-btn:hover .twitter-icon svg {
  filter: drop-shadow(0 0 5px #ffffff)
          drop-shadow(0 0 8px #ffffff);
}

.v-chip {
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
}

.v-card-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}
</style>
