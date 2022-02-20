<template>
  <div class="home">
    <LandingImage />
  </div>
</template>

<script>
// @ is an alias to /src

import LandingImage from "@/components/LandingImage.vue";

export default {
  name: "HomeView",
  components: {
    LandingImage,
  },
};
</script>
