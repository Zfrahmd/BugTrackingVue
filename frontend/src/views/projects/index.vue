<template>
  <div class="py-5">
    <!-- <nav class="" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'BrowseProjects' }">Projects</router-link>
        </li>
      </ol>
    </nav> -->
    <h1 class="text-center">Browse Projects</h1>
    <Projects />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';

export default {
  name: 'ProjectsPage',
  components: {
    Projects,
  },
};
</script>

<style scoped>

.breadcrumb a {
  text-decoration: none;
  color: rgb(145, 145, 145);
}
.breadcrumb a:hover {
  text-decoration: none;
  color:white;
}

</style>
