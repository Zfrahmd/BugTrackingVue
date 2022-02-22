import axios from 'axios';

/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
const api_url = 'http://localhost:3000/api/v1/bugs';
const proj_api_url = 'http://localhost:3000/api/v1/projects';

export default {
  state: {
    bugsList: [],
    projectsList: [],
  },

  getters: {
    allBugs: (state) => state.bugsList,
    allProjectsforBug: (state) => state.projectsList,
    // allProjectsforBug: (state, getters, rootstate) => rootstate.projects.projectsList,
  },

  actions: {
    async fetchBugs({ commit }) {
      const response = await axios.get(api_url);
      commit('setBugs', response.data);
    },
    async fetchProjects({ commit }) {
      const response = await axios.get(proj_api_url);
      commit('setProjects', response.data);
    },
    async addBug({ commit }, newBugData) {
      const response = await axios.post(api_url, newBugData);
      commit('newBug', response.data);
    },
    async deleteBug({ commit }, id) {
      await axios.delete(`${api_url}/${id}`);
      commit('removeBug', id);
    },
  },

  mutations: {
    setBugs: (state, bugs) => (state.bugsList = bugs),
    setProjects: (state, projects) => (state.projectsList = projects),
    newBug(state, newBugData) {
      state.bugsList = newBugData.bug;
    },
    removeBug: (state, id) => (
      state.bugsList = state.bugsList.filter((bug) => bug.id !== id)),
  },
};
