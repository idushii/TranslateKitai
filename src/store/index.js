import Vue from 'vue'
import Vuex from 'vuex'
import HSK from './HSK'
import Tests from './Tests'
import TextPages from './TextPages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: {
      isModeEdit: false,
      Test: {
        indexTest: null,
        indexItem: null,
        indexMaxItem: null
      },
      HSK: {
        Search: {
          Level: 0,
          Cat: [0, 1, 2],
          TypeWord: [0, 2],
        }
      }
    },
  },
  mutations: {
    setProgressTest(state, {index, indexItem, indexMaxItem}) {
      state.User.Test = {index, indexItem, indexMaxItem}
    },
    setSearchHSK(state, Search) {
      state.User.HSK.Search = Search;
    },
    setModeEdit(state, Type) { 
      state.User.isModeEdit = Type;
    }
  },
  actions: {
    saveLocal(context) {
      localStorage['Data'] = JSON.stringify(context.state.User)
    },
    loadLocal(context) {
      if (localStorage['Data']) {
        context.state.User = JSON.parse(localStorage['Data'])
        console.log("Локальные данные загружены")
      } else {
        console.log("Нет сохраненных данных")
      }
    },
    setSearchHSK(context, Search) {
      context.commit('setSearchHSK', Search)
      this.dispatch('saveLocal')
    },
  },
  getters: {
    progressTest: (state) => state.User.Test,
    SearchHSK:  (state) => state.User.HSK.Search,
    isModeEdit:  (state) => state.User.isModeEdit,
  },
  modules: {
    HSK,
    Tests,
    TextPages
  }
})