<template>
  <div class="py-5">
    <h1 class="text-center">hellow from new project</h1>
    <AddProject />
  </div>
</template>

<script>
import AddProject from '@/components/AddProject.vue';

export default {
  name: 'New',
  components: {
    AddProject,
  },
};
</script>
