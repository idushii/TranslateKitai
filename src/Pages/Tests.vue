<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4"  v-for="(Test, key) of Tests" :key="`test-${key}`">
    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">{{Test.Title}}</h5>
        <p class="card-text">{{Test.Desc}}</p>
        <router-link :to="{name: 'Test', params: {index: key}}" class="float-right btn btn-light">Пройти</router-link>
      </div>
    </div></div></div>
  </div>
</template>

<script>
export default {
  name: "Tests",
  data() {
    return {};
  },
  computed: {
    Tests() {
      return this.$store.getters.Tests;
    }
  },
  mounted() {},
  methods: {
    getTest() {
      this.$store.getters.Test(0)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>