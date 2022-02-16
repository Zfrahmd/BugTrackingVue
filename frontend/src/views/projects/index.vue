<template>
  <div class="py-5">
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
