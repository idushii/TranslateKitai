<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">{{Test.Title}}</h5>
            <p class="card-text">{{Test.Desc}}</p>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-body">
            <h5 v-if="Test.Items.length" class="card-title">{{Test.Items[indexItem].Title}}</h5>
          </div>
          <ul class="list-group" v-if="Test.Items.length">
            <li v-for="(Item, key) in Test.Items[indexItem].Variants" :key="`item-${key}`" class="list-group-item" :class="{active: indexVariant == key}" @click="selectVariant(key)">{{Item}}</li>
          </ul>
          <router-link :to="{name: 'Test', params: {index, indexItem: nextIndex} }" class="float-right btn btn-light" :class="{disabled: indexVariant == null}" v-if="nextIndex < Test.Items.length">Дальше</router-link>
          <router-link :to="{name: 'Tests', params: {index, indexItem: nextIndex} }" class="float-right btn btn-light" :class="{disabled: indexVariant == null}" v-else>Посмотреть результаты</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      Test: {
        Title: "",
        Desc: "",
        Items: []
      },
      indexVariant: null
    };
  },
  computed: {
    index() {
      return this.$route.params.index;
    },
    indexItem() {
      return this.$route.params.indexItem || 0;
    },
    nextIndex() {
      return this.indexItem * 1 + 1;
    },
    maxIndexItemVisit() {
      return this.$store.getters.progressTest.indexMaxItem || 0;
    },
    indexMaxItem() {
      return this.indexItem > this.maxIndexItemVisit
        ? this.indexItem
        : this.maxIndexItemVisit;
    }
  },
  mounted() {
    this.Test = this.$store.getters.Test(this.index);
  },
  updated() {
    //this.indexVariant = null
    this.$store.commit("setProgressTest", {
      index: this.index,
      indexItem: this.indexItem,
      indexMaxItem: this.indexMaxItem
    });
  },
  methods: {
    selectVariant(indexVariant) {
      this.indexVariant = indexVariant;
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.indexVariant != null) {
      this.indexVariant = null;
      next();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.visit .page-link {
  border: 1px solid #007bff;
}
</style>