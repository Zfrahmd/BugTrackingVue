<template>
  <div>
    <h3>Add Project</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" class="form-control" v-model="project_name"
        placeholder="Add Project Name..."/><br/>
        <textarea type="text" class="form-control" v-model="description"
        placeholder="Add Project Description..."/><br/>
        <input type="submit" class="btn btn-outline-success" value="Create">
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
      this.addProject(this.description, this.project_name);
      // this.addProject(this.description);
      this.project_name = '';
      this.description = '';
    },
  },
};
</script>

<style scoped>

</style>
