<template>
  <div class="bg_container py-5 text-center">
    <h2><strong>Bug Detail</strong></h2>
    <hr class="my-4">
    <div class="row py-4">
      <div>
        <h5 class="card-title attribute">Title:
          <p class="attribute_value">{{bug.title}}</p></h5>
        <p class="card-text attribute">Description: <span class="attribute_value">
          {{bug.description}}</span></p>
        <p class="card-text attribute">Bug Type: <span class="attribute_value">
          {{bug.bug_type}}</span></p>
        <p class="card-text attribute">Feature Status: <span class="attribute_value">
          {{bug.feature_status}}</span></p>
        <p class="card-text attribute">Bug Status: <span class="attribute_value">
          {{bug.bug_status}}</span></p>
        <p class="card-text attribute">Dealine: <span class="attribute_value">
          {{format_date(bug.deadline)}}</span></p>
        <p class="card-text attribute">Created at: <span class="attribute_value">
          {{format_date(bug.created_at)}}</span></p>
        <p class="card-text attribute">Updated at: <span class="attribute_value">
          {{format_date(bug.updated_at)}}</span></p>
      </div>
      <p><router-link :to="{ name: 'BrowseBugs' }" class="btn btn-outline-primary my-3">
      View Bugs
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'BugInfo',
  methods: {
    ...mapActions(['fetchBugs']),
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY');
      }
      return ('Date not passed');
    },
  },
  computed: {
    ...mapGetters(['allBugs']),
    bug() {
      // const allBugs = this.$store.state.bugs.bugsList;
      const bug = this.allBugs.filter((allBugs) => allBugs.id === +this.$route.params.id);
      console.log(bug);
      console.log(this.$route.params.id);
      return bug[0];
    },
  },
  created() {
    this.fetchBugs();
  },
};
</script>

<style scoped>
.bg_container {
  background-image: url('~@/assets/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 1.5%;
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}
</style>
