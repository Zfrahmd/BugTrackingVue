<template>
  <div class="py-5">
    <h1 class="text-center">Create a new bug</h1>
    <AddBug />
  </div>
</template>

<script>
import AddBug from '@/components/AddBug.vue';

export default {
  name: 'New',
  components: {
    AddBug,
  },
};
</script>
