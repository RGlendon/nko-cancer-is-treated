// state
export const state = () => ({
  currentNumber: 0,
  answers: [],
  questions: QUESTIONS,
});

// change state from here
export const mutations = {
  setQuestions(state, questions) {
    state.questions = questions;
  },
  saveAnswer(state, { answer, currentNumber }) {
    state.answers[currentNumber] = answer;
  },
  setCurrentNumber(state, { currentNumber }) {
    state.currentNumber = currentNumber;
  },
  resetQuiz(state) {
    state.currentNumber = 0;
    state.answers = [];
  },
};

// get data about my state
export const getters = {
  getQuestions(state) {
    return state.questions;
  },
  getCurrentNumber(state) {
    return state.currentNumber;
  },
  initialAnswer(state) {
    const { currentNumber } = state;
    return state.answers[currentNumber] || '';
  },
  getAnswers(state) {
    return state.answers;
  },
};

export const actions = {
  async PREV_QUESTION({ state, commit }) {
    const { currentNumber } = state;
    await commit('setCurrentNumber', { currentNumber: currentNumber - 1 });
  },
  async NEXT_QUESTION({ state, commit }, { answer }) {
    const { currentNumber } = state;
    await commit('saveAnswer', { answer, currentNumber });
    await commit('setCurrentNumber', { currentNumber: currentNumber + 1 });
  },
};

const QUESTIONS = [
  {
    title: 'Шаг 1 из 12',
    question: 'Как вас зовут?',
  },
  {
    title: 'Шаг 2 из 12',
    question: `Было ли у вас онкологическое заболевание?`,
    questionAdd: `Если да – расскажите, пожалуйста, 
      кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей 
      неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.`,
  },
  {
    title: 'Шаг 3 из 12',
    question: `Какие занятия приносят Вам наибольшее удовольствие?`,
    questionAdd: `Расскажите о ваших неизлечимых 
      привычках, чего Вы боитесь или без чего не можете жить.`,
  },
  {
    title: 'Шаг 4 из 12',
    question: `На что, кроме семьи, быта и работы, Вы тратите свое время?`,
  },
  {
    title: 'Шаг 5 из 12',
    question: `Какие сильные увлечения у Вас есть?`,
    questionAdd: `Расскажите о занятии, хобби или спорте, 
      которые увлекают Вас с головой.`,
  },
  {
    title: 'Шаг 6 из 12',
    question: `Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки 
      или особенности?`,
  },
  {
    title: 'Шаг 7 из 12',
    question: `Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?`,
    questionAdd: `Кроме необходимых, таких, как чистка зубов.`,
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
    question: `Почта или телефон для связи.`,
    questionAdd: `Укажите удобный для вас формат связи. После обработки 
      анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.`,
  },
  {
    title: 'Спасибо что приняли участие!',
  },
];
