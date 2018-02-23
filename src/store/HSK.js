export default {
  state: {
    Levels: [
      { Title: "Уровень 1" },
      { Title: "Уровень 2" },
      { Title: "Уровень 3" },
    ],
    Cat: [
      "Категория 1",
      "Категория 2",
      "Категория 3",
      "Категория 4",
      "Категория 5",
    ],
    TypeWords: [
      "Существительное",
      "Глагол",
      "Деепричастие"
    ]
  },
  getters: {
    Cat: (state) => state.Cat,
    TypeWords: (state) => state.TypeWords,
    Levels: (state) => state.Levels,
  }
}