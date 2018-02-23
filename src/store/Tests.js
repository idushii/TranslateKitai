export default {
  state: {
    Tests: [{
      Title: 'Тест 1',
      Items: [
        { Title: 'Вопрос 1', Variants: ['Вариант 1.1', 'Вариант 1.2', 'Вариант 1.3'], isTrue: 0 },
        { Title: 'Вопрос 2', Variants: ['Вариант 2.1', 'Вариант 2.2', 'Вариант 2.3'], isTrue: 1 },
        { Title: 'Вопрос 3', Variants: ['Вариант 3.1', 'Вариант 3.2', 'Вариант 3.3'], isTrue: 2 },
        { Title: 'Вопрос 4', Variants: ['Вариант 4.1', 'Вариант 4.2', 'Вариант 4.3'], isTrue: 1 },
      ],
      Desc: "Отличный тест"
    },
    {
      Title: 'Тест 2',
      Items:
        [
          { Title: 'Вопрос 1', Variants: ['Вариант 1.1', 'Вариант 1.2', 'Вариант 1.3'], isTrue: 1 },
          { Title: 'Вопрос 2', Variants: ['Вариант 2.1', 'Вариант 2.2', 'Вариант 2.3'], isTrue: 2 },
          { Title: 'Вопрос 3', Variants: ['Вариант 3.1', 'Вариант 3.2', 'Вариант 3.3'], isTrue: 1 },
          { Title: 'Вопрос 4', Variants: ['Вариант 4.1', 'Вариант 4.2', 'Вариант 4.3'], isTrue: 0 },
        ],
      Desc: "Отличный тест"
    }],
  },
  getters: {
    Tests: (state) => state.Tests,
    Test: (state) => (index) => state.Tests[index],
  }
}