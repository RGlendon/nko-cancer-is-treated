import axios from 'axios';

// state
export const state = () => ({
  currentVideo: 0,
  // video: [],
  video: [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/coOppM34GtI',
      created_at: '2020-05-21T09:23:03.898Z',
      updated_at: '2020-05-22T11:04:24.483Z',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/FFrioIZ65q0',
      created_at: '2020-05-21T09:23:43.471Z',
      updated_at: '2020-05-22T11:05:23.927Z',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/ZKWilQnPovg',
      created_at: '2020-05-21T09:23:57.786Z',
      updated_at: '2020-05-22T11:06:14.936Z',
    },
  ],
});

// change state from here
export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
  nextVideo(state) {
    return (state.currentVideo = ++state.currentVideo);
  },
  prevVideo(state) {
    return (state.currentVideo = --state.currentVideo);
  },
};

// get data about my state
export const getters = {
  getNumber(state) {
    return state.currentVideo;
  },
  getVideos(state) {
    return state.video;
  },
  // getCurrentVideo(state, getters) {
  //   return state.videos[getters.getNumber];
  // },
};

export const actions = {
  async fetchVideo({ commit }) {
    const video = await this.$axios.$get(process.env.BASE_URL + '/videos');
    commit('setState', {
      name: 'video',
      value: video,
    });
  },
  // fetchVideo({ commit }) {
  //   return this.$axios.$get(process.env.BASE_URL + '/videos')
  //     .then((resp) => commit('setState', {
  //       name: 'video',
  //       value: resp,
  //     }))
  //     .catch((err) => console.log(err));
  // },
};
