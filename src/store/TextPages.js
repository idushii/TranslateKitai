export default {
  state: {
    Pages: {
      StartPage: 'Изучение китайского языка - это очень полезное занятие',
      Grammar: 'Грамматика китайского языка',
      About: 'История китайского языка',
    }
  },
  mutations: {
    setTextPage(state, {Page, HTML}) {
      state.Pages[Page] = HTML
    }
  },
  getters: {
    TextPage: (state) => (index) => state.Pages[index],
  }
}