// state
export const state = () => ({
  popupShown: false,
  quizShown: false,
  feedbackShown: false,
  socialsShown: false,
});

// change state from here
export const mutations = {
  closePopup(state) {
    state.popupShown = false;
    state.quizShown = false;
    state.feedbackShown = false;
    state.socialsShown = false;
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
  openSocials(state) {
    state.popupShown = true;
    state.socialsShown = true;
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
  getSocialsShown(state) {
    return state.socialsShown;
  },
};
