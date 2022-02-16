<template>
  <div class="container py-5">
    <h1>Browse Bugs</h1>
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
