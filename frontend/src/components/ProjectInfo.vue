<template>
  <div class="bg_container py-5 text-center">
    <h2><strong>Project Detail</strong></h2>
    <hr class="my-4">
    <div class="row py-4">
      <div>
        <h5 class="card-title attribute">Name:
          <p class="attribute_value">{{project.project_name}}</p></h5>
        <p class="card-text attribute">Description: <span class="attribute_value">
          {{project.description}}</span></p>
      </div>
      <p><router-link :to="{ name: 'BrowseProjects' }" class="btn btn-outline-primary my-3">
      View Projects
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProjectInfo',
  methods: {
    ...mapActions(['fetchProjects']),
  },
  computed: {
    ...mapGetters(['allProjects']),
    project() {
      const project = this.allProjects.filter(
        (allProjects) => allProjects.id === +this.$route.params.id,
      );
      console.log(project);
      console.log(this.$route.params.id);
      return project[0];
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style scoped>
.bg_container {
  background-image: url('~@/assets/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1.5%;
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}
</style>
