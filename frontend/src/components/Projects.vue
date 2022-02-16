<template>
  <div class="row py-4">
    <div
    v-for="project in allProjects"
    :key="project.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Name:
          <p style="color:yellow; display:inline-block;">{{project.project_name}}</p></h5>
          <p class="card-text">Description: {{project.description}}</p>
          <i @click="deleteProject(project.id)" class="fas fa-trash-alt delete_icon"></i>
          <!-- <router-link :to="{name: 'edit_product', params: { id: project.id }}"
          class="btn btn-primary">Edit</router-link>-->
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
    ...mapActions(['fetchProjects', 'deleteProject']),
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

.delete_icon {
  cursor: pointer;
}
</style>
