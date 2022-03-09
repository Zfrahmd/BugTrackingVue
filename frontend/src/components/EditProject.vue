<template>
  <div>
    <h3>Edit Project</h3>
    <div class="edit">
      <form @submit="updateProject()">
      <!-- <form @submit="onSubmit()"> -->
        <input type="text" class="form-control my-3" v-model="project.project_name"
        placeholder="Add Project Name..."/>
        <textarea type="text" class="form-control my-3" v-model="project.description"
        placeholder="Add Project Description..."/>
        <button type="submit" class="btn btn-outline-success my-2">Update</button>
        <router-link :to="{ name: 'BrowseProjects' }" class="btn btn-outline-primary mx-3">
          Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

const api_url = 'http://localhost:3000/api/v1/projects';

export default {
  // data() {
  // return {
  //   project: {},
  // };
  // },
  name: 'EditProject',
  methods: {
    ...mapActions(['fetchProjects']),
    updateProject() {
      axios.patch(`${api_url}/${this.$route.params.id}`, this.project)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.goBack();
    },
    //   onSubmit(event) {
    //     event.preventDefault();
    //     const updatedProject = {
    //       id: this.$route.params.id,
    //       project_name: this.project.project_name,
    //       description: this.project.description,
    //     };
    //     this.goBack();
    //     this.updateProject(updatedProject);
    //   },
    goBack() {
      this.$router.push({ name: 'BrowseProjects' });
    },
  },
  computed: {
    ...mapGetters(['allProjects']),
    project() {
      const project = this.allProjects.filter(
        (allProjects) => allProjects.id === +this.$route.params.id,
      );
      return project[0];
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>
