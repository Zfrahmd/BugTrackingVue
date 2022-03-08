<template>
  <div>
    <h3>Edit Project</h3>
    <div class="edit">
      <!-- <form @submit="onSubmit()">
        <input type="text" class="form-control my-3" v-model="project.project_name"
        placeholder="Add Project Name..."/>
        <textarea type="text" class="form-control my-3" v-model="project.description"
        placeholder="Add Project Description..."/>
        <input type="submit" class="btn btn-outline-success my-2" value="Update">
      </form> -->
    </div>
    <p>{{project.project_name}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditProject',
  methods: {
    ...mapActions(['fetchProjects']),
    // onSubmit(event, currentProject) {
    //   event.preventDefault();
    //   const updatedProject = {
    //     id: currentProject.id,
    //     project_name: currentProject.project_name,
    //     description: currentProject.description,
    //   };
    //   this.updateProject(updatedProject);
    //   this.resetData();
    //   this.goBack();
    // },
    // resetData() {
    //   this.project_name = '';
    //   this.description = '';
    // },
    // goBack() {
    //   this.$router.push({ name: 'BrowseProjects' });
    // },
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
