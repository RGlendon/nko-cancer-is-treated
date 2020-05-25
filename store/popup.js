// state
export const state = () => ({
  popupShown: true,
});

// change state from here
export const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
};

// get data about my state
export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
};
