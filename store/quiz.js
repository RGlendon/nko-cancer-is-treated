// state
export const state = () => ({
  currentQuestion: 0,
  questions: [
    {
      title: 'Шаг 1 из 12',
      question: 'Как вас зовут?',
    },
    {
      title: 'Шаг 2 из 12',
      question: `Было ли у вас онкологическое заболевание? Если да – расскажите, пожалуйста, 
      кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей 
      неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.`,
    },
    {
      title: 'Шаг 3 из 12',
      question: `Какие занятия приносят Вам наибольшее удовольствие? Расскажите о ваших неизлечимых 
      привычках, чего Вы боитесь или без чего не можете жить.`,
    },
    {
      title: 'Шаг 4 из 12',
      question: `На что, кроме семьи, быта и работы, Вы тратите свое время?`,
    },
    {
      title: 'Шаг 5 из 12',
      question: `Какие сильные увлечения у Вас есть? Расскажите о занятии, хобби или спорте, 
      которые увлекают Вас с головой.`,
    },
    {
      title: 'Шаг 6 из 12',
      question: `Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки 
      или особенности?`,
    },
    {
      title: 'Шаг 7 из 12',
      question: `Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно? Кроме 
      необходимых, таких, как чистка зубов.`,
    },
    {
      title: 'Шаг 8 из 12',
      question: `Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?`,
    },
    {
      title: 'Шаг 9 из 12',
      question: `Что Вас успокаивает/умиротворяет лучше всего?`,
    },
    {
      title: 'Шаг 10 из 12',
      question: `Какие события/ситуации или действия других людей обычно выводят Вас из себя?`,
    },
    {
      title: 'Шаг 11 из 12',
      question: `Как вы обычно проводите выходные?`,
    },
    {
      title: 'Шаг 12 из 12',
      question: `Почта или телефон для связи. Укажите удобный для вас формат связи. После обработки 
      анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.`,
    },
    {
      title: 'Спасибо что приняли участие!',
    },
  ],
  answers: [1, 2, 3],
});

// change state from here
export const mutations = {
  nextQuestion(state) {
    return (state.currentQuestion = ++state.currentQuestion);
  },
  prevQuestion(state) {
    return (state.currentQuestion = --state.currentQuestion);
  },
  setAnswer(state, { answer, currentQuestion }) {
    return (state.answers[currentQuestion] = answer);
  },
};

// get data about my state
export const getters = {
  getCurrentQuestion(state) {
    return state.currentQuestion;
  },

  getQuestions(state) {
    return state.questions;
  },

  getAnswers(state) {
    return state.answers;
  },
};
