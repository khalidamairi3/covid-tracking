import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {},
    countries: [],
    selectedCountry: {},
  },
  getters: {},
  mutations: {
    setGlobal: function (state, globalData) {
      state.global = globalData;
    },
    setCountries: function (state, countries) {
      state.countries = countries;
    },
    setSelectedCountry: function (state, country) {
      state.selectedCountry = country;
    },
  },
  actions: {
    getSummary() {
      axios
        .request({
          method: "GET",
          url: "https://api.covid19api.com/summary",
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.commit("setGlobal", response.data.Global);
          this.commit("setCountries", response.data.Countries);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
