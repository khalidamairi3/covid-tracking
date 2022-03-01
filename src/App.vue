<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="covid"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://media-s3-us-east-1.ceros.com/abc/images/2020/10/13/8a34b0cef8823bd2dbdd6b9b2113c70f/living-in-the-times-of-covid-logo-white.svg"
          width="100"
          @click="goHome"
          id="logo"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
      <pageFooter />
    </v-main>
  </v-app>
</template>

<script>
import pageFooter from "./components/footer.vue";
export default {
  name: "App",
  components: {
    pageFooter,
  },

  data: () => ({
    //
  }),
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
#logo {
  cursor: pointer;
}
</style>
