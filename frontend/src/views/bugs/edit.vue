<template>
  <div class="py-5">
    <h1 class="text-center">Edit Bug</h1>
    <EditBug />
  </div>
</template>

<script>
import EditBug from '@/components/EditBug.vue';

export default {
  name: 'New',
  components: {
    EditBug,
  },
};
</script>
