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
    async addProject({ commit }, newProjectData) {
      const response = await axios.post(api_url, newProjectData);
      commit('newProject', response.data);
    },
    async deleteProject({ commit }, id) {
      await axios.delete(`${api_url}/${id}`);
      commit('removeProject', id);
    },
  },

  mutations: {
    setProjects: (state, projects) => (state.projectsList = projects),
    newProject(state, newProjectData) {
      state.projectsList = newProjectData.project;
    },
    removeProject: (state, id) => (
      state.projectsList = state.projectsList.filter((project) => project.id !== id)),
  },
};
