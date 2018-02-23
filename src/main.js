// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

//import tinymce from 'vue-tinymce-editor'
//Vue.component('tinymce', tinymce)

import { VueEditor } from 'vue2-editor'
Vue.component('VueEditor', VueEditor)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.appVue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  beforeCreate() {
    this.$store.dispatch('loadLocal')
  }
})
