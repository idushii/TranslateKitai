<template>
  <div class="container">
    <div class="row pt-2">
      <div class="col-4">
        <div class="card">
          <div class="card-header">Категории</div>
          <ul class="list-group">
            <li class="list-group-item active">Все записи</li>
            <li class="list-group-item">Видео</li>
            <li class="list-group-item">Текст</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Результаты</div>
        </div>
        <div class="card mt-2">
          <div class="card-header">Видео 1</div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/3rpQNw9h1lg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="card mt-2">
          <div class="card-header">Запись 1</div>
          <div class="card-body">
            Некоторый текст
            <button class="btn btn-light border float-right">Далее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Additional",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
