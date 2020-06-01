import axios from 'axios';

export const state = () => ({
  allData: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getAllData(state) {
    return state.allData;
  },

  getTellUsData(state) {
    return state.allData.filter(item => item.block === 'story')[0];
  },
};

export const actions = {
  async fetchBlocks({ commit }) {
    let allData = await this.$axios.$get(process.env.BASE_URL + '/blocks');
    console.log(allData);
    commit('setState', {
      name: 'allData',
      value: allData,
    });
  },
};
