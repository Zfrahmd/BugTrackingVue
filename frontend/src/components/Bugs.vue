<template>
  <div class="row py-4">
    <div
    v-for="bug in allBugs"
    :key="bug.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{bug.title}}</h5>
          <p class="card-text">{{bug.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Bugs',
  methods: {
    ...mapActions(['fetchBugs']),
  },
  computed: {
    ...mapGetters(['allBugs']),
  },
  created() {
    this.fetchBugs();
  },
};

</script>

<style>
.card {
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}

</style>
