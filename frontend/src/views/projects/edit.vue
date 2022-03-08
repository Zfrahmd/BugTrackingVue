<template>
  <div class="py-5">
    <h1 class="text-center">Edit Project</h1>
    <EditProject />
  </div>
</template>

<script>
import EditProject from '@/components/EditProject.vue';

export default {
  name: 'New',
  components: {
    EditProject,
  },
};
</script>
