<template>
  <div id="countries-table">
    <h2>Click on the country to show more details</h2>
    <v-data-table
      :headers="headers"
      :items="countries"
      item-key="Country"
      class="elevation-1"
      :loading="true && countries.length == 0"
      loading-text="Loading... Please wait"
    >
      <template v-slot:[`item.Country`]="{ item }">
        <div @click="selectCountry(item)" id="country">
          <v-img
            :src="getUrl(item.CountryCode)"
            width="24"
            height="18"
            :alt="item.Country"
          ></v-img>
          {{ item.Country }}
        </div>
      </template>
      <template v-slot:[`body.append`]> </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: "countries-table",

  mounted() {
    if (this.countries.length == 0) {
      this.$store.dispatch("getSummary");
    }
  },

  data() {
    return {};
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
    headers() {
      return [
        {
          text: "Country",
          align: "start",
          sortable: false,
          value: "Country",
        },
        {
          text: "New Confirmed Cases",
          value: "NewConfirmed",
        },
        { text: "Total Confirmed", value: "TotalConfirmed" },
        { text: "New Deaths", value: "NewDeaths" },
        { text: "TotalDeaths", value: "TotalDeaths" },
        { text: "New Recovered", value: "NewRecovered" },
        { text: "Total Recovered", value: "TotalRecovered" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      console.log(item);
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    selectCountry(country) {
      this.$store.commit("setSelectedCountry", country);
      this.$router.push("/country");
    },

    getUrl(countryCode) {
      return "https://flagcdn.com/24x18/" + countryCode.toLowerCase() + ".png";
    },
  },
};
</script>

<style lang="scss" scoped>
#countries-table {
  width: 80%;
  margin-left: 10%;
}
#country {
  cursor: pointer;
  &:hover {
    color: blue;
  }
}
</style>
