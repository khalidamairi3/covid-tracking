<template>
  <div id="country-view">
    <countryCard />
  </div>
</template>

<script>
import countryCard from "../components/CountryCard.vue";
export default {
  name: "country-view",
  components: {
    countryCard,
  },
};
</script>

<style lang="scss" scoped></style>
