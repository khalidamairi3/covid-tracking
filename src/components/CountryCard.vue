<template>
  <div id="country-card">
    <v-card class="mx-auto" max-width="600">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="getUrl(country.CountryCode)"
      >
        <v-card-title>{{ country.Country }}</v-card-title>
      </v-img>

      <v-card-subtitle v-if="countryInfo.capital != undefined" class="pb-0">
        {{ "Capital: " + countryInfo.capital }}
      </v-card-subtitle>
      <v-card-subtitle class="pb-0">
        {{ "Language: " + countryInfo.languages[0].name }}
      </v-card-subtitle>
      <v-card-subtitle class="pb-0">
        {{
          "Population: " +
          countryInfo.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}
      </v-card-subtitle>
      <v-card-subtitle class="pb-0">
        {{
          "Total cases confirmed: " +
          country.TotalConfirmed.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )
        }}
      </v-card-subtitle>
      <v-card-subtitle class="pb-0">
        {{
          "Total Deaths: " +
          country.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}
      </v-card-subtitle>

      <v-chip class="ma-2" color="orange" label text-color="white">
        {{
          "infection rate: " +
          ((country.TotalConfirmed * 100) / countryInfo.population).toFixed(2) +
          "%"
        }}
      </v-chip>
      <v-chip class="ma-2" color="pink" label text-color="white">
        {{
          "Death rate: " +
          ((country.TotalDeaths * 100) / country.TotalConfirmed).toFixed(2) +
          "%"
        }}
      </v-chip>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "country-view",
  mounted() {
    this.getCovidData();
    this.getCountryInfo();
  },
  computed: {
    country() {
      return this.$store.state.selectedCountry;
    },
  },
  data() {
    return {
      daysCases: [],
      countryInfo: {},
    };
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
    getCountryInfo() {
      axios
        .request({
          method: "GET",
          url:
            "https://restcountries.com/v2/name/" +
            this.country.Country.toLowerCase(),
        })
        .then((response) => {
          this.countryInfo = response.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUrl(countryCode) {
      return "https://flagcdn.com/w320/" + countryCode.toLowerCase() + ".png";
    },
  },
};
</script>

<style lang="scss" scoped>
#country-card {
  //   position: relative;
  width: 80%;
  margin: 10%;
}
</style>
