<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <div class="form-group">
          <label for="exampleFormControlInput1">Enter Project Title :</label>
          <input type="text" class="form-control my-3" v-model="project_name"
          placeholder="Add Project Name..."/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Enter Project Description :</label>
          <textarea type="text" class="form-control my-3" v-model="description"
          placeholder="Add Project Description..."/>
        </div>
        <input type="submit" class="btn btn-outline-success my-2" value="Create">
        <a href="javascript:history.go(-1)" class="btn btn-outline-primary mx-3">Cancel</a>
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
