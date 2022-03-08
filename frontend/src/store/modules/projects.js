import axios from 'axios';

/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

const api_url = 'http://localhost:3000/api/v1/projects';

export default {
  state: {
    projectsList: [],
    project: null,
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
    async fetchProject({ commit }) {
      const response = await axios.get(api_url);
      commit('setProject', response.data);
    },
    // async editProject({ commit }, newProjectData) {
    //   const response = await axios.put(api_url, newProjectData);
    //   commit('updateProject', response.data);
    // },
    async updateProject({ commit }, updatedProject) {
      const response = await axios.put(`${api_url}/${updatedProject.id}`, updatedProject);
      console.log(`${api_url}/${updatedProject.id}`);
      commit('setUpdatedProject', response.data);
    },
    async deleteProject({ commit }, id) {
      if (confirm('Do you really want to delete?')) {
        await axios.delete(`${api_url}/${id}`);
        commit('removeProject', id);
      }
    },
  },
  mutations: {
    setProjects: (state, projects) => (state.projectsList = projects),
    setProject: (state) => (
      state.project = state.projectsList.filter(
        (project) => project.id === +this.$route.params.id,
      )),
    newProject(state, newProjectData) {
      state.projectsList = newProjectData.project;
    },
    removeProject: (state, id) => (
      state.projectsList = state.projectsList.filter((project) => project.id !== id)),
    setUpdatedProject: (state, updatedProject) => {
      const index = state.projectsList.findIndex((project) => project.id === updatedProject.id);
      if (index !== -1) {
        state.projectsList.splice(index, 1, updatedProject);
      }
    },
  },
};
