// state
export const state = () => ({
  popupShown: false,
  quizShown: false,
  feedbackShown: false,
});

// change state from here
export const mutations = {
  closePopup(state) {
    state.popupShown = false;
    state.quizShown = false;
    state.feedbackShown = false;
  },
  // togglePopup(state) {
  //   state.popupShown = !state.popupShown;
  // },
  openPopupQuiz(state) {
    state.popupShown = true;
    state.quizShown = true;
  },
  openPopupFeedback(state) {
    state.popupShown = true;
    state.feedbackShown = true;
  },
};

// get data about my state
export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
  getFeedbackShown(state) {
    return state.feedbackShown;
  },
  getQuizShown(state) {
    return state.quizShown;
  },
};
