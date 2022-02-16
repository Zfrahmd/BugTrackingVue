<template>
  <div class="row py-4">
    <div
    v-for="project in allProjects"
    :key="project.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{project.project_name}}</h5>
          <p class="card-text">{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Projects',
  methods: {
    ...mapActions(['fetchProjects']),
  },
  computed: {
    ...mapGetters(['allProjects']),
  },
  created() {
    this.fetchProjects();
  },
};

</script>

<style>
.card {
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}

</style>
