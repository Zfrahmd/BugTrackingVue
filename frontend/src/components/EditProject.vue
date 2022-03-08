<template>
  <div>
    <h3>Edit Project</h3>
    <div class="edit">
      <form @submit="onSubmit(project)">
        <input type="text" class="form-control my-3" v-model="project_name"
        placeholder="Add Project Name..."/>
        <textarea type="text" class="form-control my-3" v-model="description"
        placeholder="Add Project Description..."/>
        <input type="submit" class="btn btn-outline-success my-2" value="Update">
        <a href="javascript:history.go(-1)" class="btn btn-outline-primary mx-3">Cancel</a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      project_name: '',
      description: '',
    };
  },
  name: 'EditProject',
  methods: {
    ...mapActions(['updateProject', 'fetchProjects']),
    onSubmit(event) {
      // event.preventDefault();
      const updatedProject = {
        id: this.$route.params.id,
        project_name: this.project_name,
        description: this.description,
      };
      this.goBack();
      this.updateProject(updatedProject);
    },
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
