<template>
  <vue-chart :options="chartOptionsBar"></vue-chart>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      chartOptionsBar: {},
    };
  },
};
</script>
