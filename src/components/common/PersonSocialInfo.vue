<template>
  <v-container fluid class="py-0 my-0">
    <v-row justify="start" align="center">
      <v-col cols="12" class="d-flex align-center flex-wrap">

        <!-- Twitter / X Icon -->
        <v-btn
          v-if="checkExistance(socialInfo.twitter, 0)"
          icon
          class="mx-1 twitter-btn"
          :href="socialInfo.twitter"
          target="_blank"
          variant="flat"
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
          v-if="checkExistance(socialInfo.linkedin, 0)"
          icon
          class="mx-1"
          :href="socialInfo.linkedin"
          target="_blank"
        >
          <v-icon color="#0077b5">mdi-linkedin</v-icon>
        </v-btn>

        <!-- GitHub -->
        <v-btn
          v-if="checkExistance(socialInfo.github, 0)"
          icon
          class="mx-1"
          :href="socialInfo.github"
          target="_blank"
        >
          <v-icon color="black">mdi-github</v-icon>
        </v-btn>

        <!-- Website -->
        <v-btn
          v-if="checkExistance(socialInfo.website, 0)"
          icon
          class="mx-1"
          :href="socialInfo.website"
          target="_blank"
        >
          <v-icon color="#333333">mdi-link-variant</v-icon>
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PersonSocialhandel",
  props: ["socialInfo"],
  methods: {
    checkExistance(link, size) {
      return link && link.length > size;
    },
  },
};
</script>

<style scoped>
/* Default icon color */
.v-btn .v-icon svg {
  fill: #000 !important;
}

/* Add margin between icons */
.v-btn {
  margin-right: 6px;
}

/* Add white glow for X (Twitter) icon */
.twitter-icon svg {
  fill: #000 !important;
  filter: drop-shadow(0 0 2px #ffffff)
          drop-shadow(0 0 3px #ffffff);
  transition: filter 0.3s ease;
}

/* On hover, make the white glow stronger */
.twitter-btn:hover .twitter-icon svg {
  filter: drop-shadow(0 0 5px #ffffff)
          drop-shadow(0 0 8px #ffffff);
}
</style>
