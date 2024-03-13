<template>
  <div class="container">新能源</div>
</template>

<script>
export default {
  name: "myEnergy",
  methods: {
    async getCarList() {},
  },
  mounted() {
    this.getCarList();
  },
};
</script>

<style scoped>
.container {
  color: red;
}
</style>
