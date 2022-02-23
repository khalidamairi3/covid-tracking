<template>
  <div id="country-view">
    <countryCard />
    <countryChart v-if="daysCases.length > 0" :daysCasesProps="daysCases" />
  </div>
</template>

<script>
import axios from "axios";
import countryCard from "../components/CountryCard.vue";
import countryChart from "../components/CountryChart.vue";
export default {
  name: "country-view",
  components: {
    countryCard,
    countryChart,
  },
  mounted() {
    this.getCovidData();
  },
  data() {
    return {
      daysCases: [],
    };
  },
  computed: {
    country() {
      return this.$store.state.selectedCountry;
    },
  },
  methods: {
    getCovidData() {
      axios
        .request({
          url:
            "https://api.covid19api.com/live/country/" + this.country.Country,
          method: "GET",
        })
        .then((response) => {
          this.daysCases = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
