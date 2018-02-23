export default {
  state: {
    Pages: {
      StartPage: 'Изучение китайского языка - это очень полезное занятие',
      Grammar: 'Грамматика китайского языка',
      About: 'История китайского языка',
    }
  },
  getters: {
    TextPage: (state) => (index) => state.Pages[index],
  }
}