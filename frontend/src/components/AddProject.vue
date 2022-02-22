<template>
  <div>
    <h3>Add Project</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" class="form-control my-3" v-model="project_name"
        placeholder="Add Project Name..."/>
        <textarea type="text" class="form-control my-3" v-model="description"
        placeholder="Add Project Description..."/>
        <input type="submit" class="btn btn-outline-success my-2" value="Create">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddProject',
  data() {
    return {
      project_name: '',
      description: '',
    };
  },
  methods: {
    ...mapActions(['addProject']),
    onSubmit(event) {
      event.preventDefault();
      const newProjectData = {
        project: {
          project_name: this.project_name,
          description: this.description,
        },
      };
      this.addProject(newProjectData);
      this.resetData();
      this.goBack();
    },
    resetData() {
      this.project_name = '';
      this.description = '';
    },
    goBack() {
      this.$router.push({ name: 'BrowseProjects' });
    },
  },
};
</script>

<style scoped>

</style>
