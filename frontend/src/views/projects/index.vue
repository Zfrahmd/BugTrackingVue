<template>
  <div class="container py-5">
    <h1>Browse Projects</h1>
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
