<template>
  <div class="home">
    <LandingImage />
    <GlobalChart />
    <CountriesTable />
  </div>
</template>

<script>
// @ is an alias to /src

import LandingImage from "@/components/LandingImage.vue";
import CountriesTable from "@/components/CountriesTable.vue";
import GlobalChart from "@/components/GlobalChart.vue";

export default {
  name: "HomeView",
  components: {
    LandingImage,
    CountriesTable,
    GlobalChart,
  },
};
</script>
