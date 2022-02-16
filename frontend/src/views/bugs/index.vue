<template>
  <div class="py-5">
    <h1 class="text-center">Browse Bugs</h1>
    <Bugs />
  </div>
</template>

<script>
import Bugs from '@/components/Bugs.vue';

export default {
  name: 'BugsPage',
  components: {
    Bugs,
  },
};

</script>
