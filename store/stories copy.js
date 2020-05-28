import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStory: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStories({ commit }) {
    const stories = await this.$axios.$get(process.env.BASE_URL + '/stories');
    commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
  fetchStoriesWithId(state, payload) {
    return axios
      .get(process.env.BASE_URL + `/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentStory',
          value: response.data,
        });
      });
  },
};
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCurrentsStory(state) {
    return state.currentStory;
  },
};
