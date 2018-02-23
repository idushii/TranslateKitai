<template>
  <div class="container pt-2">
    <div class="row">
      <div class="col-sm-4 col-lg-3">
        <div class="card">
          <div class="card-header">Уровень</div>
          <ul class="list-group mt-2">
            <li class="list-group-item" v-for="(item, key) in Levels" :key="`cat-${key}`">
              <div class="form-check">
                <input type="radio" class="form-check-input" @change="setSearchHSK" :id="`cat-${key}`" :value="key" v-model="SearchHSK.Level">
                <label class="form-check-label" :for="`cat-${key}`">{{item.Title}}</label>
              </div>
            </li>
          </ul>
          <div class="card-header">Категории</div>
          <ul class="list-group mt-2">
            <li class="list-group-item" v-for="(item, key) in Cat" :key="`cat-${key}`">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" @change="setSearchHSK" :id="`cat-${key}`" :value="key" v-model="SearchHSK.Cat">
                <label class="form-check-label" :for="`cat-${key}`">{{item}}</label>
              </div>
            </li>
          </ul>
          <div class="card-header">Часть речи</div>
          <ul class="list-group mt-2">
            <li class="list-group-item" v-for="(item, key) in TypeWords" :key="`type-words-${key}`">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" @change="setSearchHSK" :id="`type-words-${key}`" :value="key" v-model="SearchHSK.TypeWord">
                <label class="form-check-label" :for="`type-words-${key}`">{{item}}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Результаты</div>
          <div class="card-body p-1"><input type="text" class="form-control" placeholder=" Поиск"></div>
          <ul class="list-group">
            <li class="list-group-item">Строка #1</li>
            <li class="list-group-item">Строка #2</li>
            <li class="list-group-item">Строка #3</li>
            <li class="list-group-item">Строка #4</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HSK",
  data() {
    return {
      SearchHSK: {}
    };
  },
  computed: {
    Cat() {
      return this.$store.getters.Cat;
    },
    TypeWords() {
      return this.$store.getters.TypeWords;
    },
    Levels() {
      return this.$store.getters.Levels;
    }
  },
  mounted() {
    this.SearchHSK = this.$store.getters.SearchHSK;
  },
  methods: {
    setSearchHSK() {
      this.$store.dispatch("setSearchHSK", this.SearchHSK);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-check-input {
  margin-top: 2px;
}
</style>