<template>
  <div>
    <div class="container mt-3" :class="{'d-none': isModeEdit}" v-html="HTML"></div>
    <vue-editor v-model="HTML" v-if="isModeEdit" />
  </div>
</template>

<script>
export default {
  name: "Grammar",
  data() {
    return {
      HTML: this.$store.getters.TextPage(this.$route.name),
      tinyOptions: { 'height': 500 }
    };
  },
  computed: {
    isModeEdit() { return this.$store.getters.isModeEdit; }
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>