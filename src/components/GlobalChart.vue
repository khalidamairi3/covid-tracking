<template>
  <div id="charts">
    <canvas id="new-chart"></canvas>
    <canvas id="total-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "global-chart",
  async mounted() {
    if (this.global == undefined) {
      await this.$store.dispatch("getSummary");
    }
    const ctx = document.getElementById("new-chart");
    const config = {
      type: "doughnut",
      data: {
        labels: ["New Deaths", "New Cases"],
        datasets: [
          {
            label: "Daily cases",
            data: [this.global.NewDeaths, this.global.NewConfirmed],
            backgroundColor: ["rgb(180, 13, 13)", "rgb(0, 80, 179)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 24,
              },
            },
          },
        },
      },
    };
    new Chart(ctx, config);

    const ctx1 = document.getElementById("total-chart");
    const config1 = {
      type: "doughnut",
      data: {
        labels: ["Total Deaths", "Total Cases"],
        datasets: [
          {
            label: "Total cases",
            data: [this.global.TotalDeaths, this.global.TotalConfirmed],
            backgroundColor: ["rgb(180, 13, 13)", "rgb(0, 80, 179)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 24,
              },
            },
          },
        },
      },
    };
    new Chart(ctx1, config1);
  },
  computed: {
    global() {
      return this.$store.state.global;
    },
  },
};
</script>
<style lang="scss" scoped>
#new-chart,
#total-chart {
  max-height: 25vh;
  max-width: 25%;
  margin: auto;
}
#new-chart {
  float: left;
}
#charts {
  position: relative;
  height: 40vh;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-items: center;
}
</style>
