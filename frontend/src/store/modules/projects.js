import axios from 'axios';

/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
const api_url = 'http://localhost:3000/api/v1/projects';

export default {
  state: {
    projectsList: [],
  },

  getters: {
    allProjects: (state) => state.projectsList,
  },

  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get(api_url);
      commit('setProjects', response.data);
    },
  },

  mutations: {
    setProjects: (state, projects) => (state.projectsList = projects),
  },
};
