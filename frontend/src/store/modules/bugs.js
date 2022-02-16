import axios from 'axios';

/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
const api_url = 'http://localhost:3000/api/v1/bugs';

export default {
  state: {
    bugsList: [],
  },

  getters: {
    allBugs: (state) => state.bugsList,
  },

  actions: {
    async fetchBugs({ commit }) {
      const response = await axios.get(api_url);
      commit('setBugs', response.data);
    },
    async deleteBug({ commit }, id) {
      await axios.delete(`${api_url}/${id}`);
      commit('removeBug', id);
    },
  },

  mutations: {
    setBugs: (state, bugs) => (state.bugsList = bugs),
    removeBug: (state, id) => (
      state.bugsList = state.bugsList.filter((bug) => bug.id !== id)),
  },
};
