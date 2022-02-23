<template>
  <div id="country-chart">
    <h1>Total Cases Graph</h1>
    <canvas id="total-cases-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "country-chart",
  props: {
    daysCasesProps: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    const ctx = document.getElementById("total-cases-chart");
    let data = [];
    console.log(data);
    let result = this.daysCasesProps.reduce(function (r, a) {
      r[a.Date] = r[a.Date] || [];
      r[a.Date].push(a);
      return r;
    }, Object.create(null));
    let dates = Object.keys(result);
    let labels = dates.map((date) => {
      return new Date(date).toLocaleString("en", {
        year: "numeric",
        month: "2-digit",
        day: "numeric",
      });
    });
    for (const key in result) {
      let total = 0;
      for (let i = 0; i < result[key].length; i++) {
        total += result[key][i].Confirmed;
      }
      data.push(total);
    }
    console.log(data);
    // console.log(result);
    const config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Total confirmed cases",
            data: data,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
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
  },
};
</script>

<style lang="scss" scoped>
#country-chart {
  width: 80%;
  margin: auto;
}
</style>
