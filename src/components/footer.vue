<template>
  <v-footer dark padless>
    <v-card
      width="100%"
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
        >
          <a :href="icon.link" :style="{ color: white }" target="_blank">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Simple covid Tracking app is developed by Khaled Amayri. For questions
        and more please contact developer
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "page-footer",
  data() {
    return {
      icons: [
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/khaled-amayri/",
        },
        { icon: "mdi-github", link: "https://github.com/khalidamairi3" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
