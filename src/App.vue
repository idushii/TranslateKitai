<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm py-0">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link :to="{name: 'StartPage'}" class="navbar-brand">{{info.Title}}</router-link>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(Link, key) in Links" :key="`Link-${Link}`" :class="{active: $route.name == key}">
            <router-link :to="{name: key}" class="nav-link">{{Link}}</router-link>
          </li>
        </ul>
        <span id="btn-edit" @click="toggleEdit" :class="{active: isModeEdit}">✐</span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      info: {
        Title: 'Изучение языка'
      },
      Links: {
        Grammar: 'Грамматика',
        HSK: 'HSK',
        Tests: 'Тесты',
        Additional: 'Доп. материалы',
        About: 'О китае',
      }
    };
  },
  computed: {
    isModeEdit() { return this.$store.getters.isModeEdit; }
  },
  methods: {
    toggleEdit() {
      this.$store.dispatch("setModeEdit", !this.isModeEdit);
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

nav.navbar {
  background: lightgray;
  color: black;
}

a,
a:hover {
  color: black;
}

ul li.nav-item {
  border-bottom: 3px solid transparent;
  transition: all 0.5s;
  padding: 5px 0px;
}
ul li.nav-item.active {
  background-color: rgba(100, 100, 100, 0.1);
  border-bottom: 3px solid rgba(100, 100, 100, 0.5);
}

ul li.nav-item:hover {
  background-color: rgba(100, 100, 100, 0.1);
}

#btn-edit { cursor: pointer; border: 1px solid transparent; padding: 5px; border-radius: 5px; }
#btn-edit.active { border: 1px solid grey; }


 #VueEditor {
   min-height: 500px;
 }

</style>
