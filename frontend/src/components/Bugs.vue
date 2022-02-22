<template>
  <div class="row py-4">
    <div
    v-for="bug in allBugs"
    :key="bug.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Title:
          <p style="color:yellow; display:inline-block;">{{bug.title}}</p></h5>
          <p class="card-text">Description: {{bug.description}}</p>
          <p class="card-text">Bug Type: {{bug.bug_type}}</p>
          <p class="card-text">Feature Status: {{bug.feature_status}}</p>
          <p class="card-text">Bug Status: {{bug.bug_status}}</p>
          <p class="card-text">Dealine: {{format_date(bug.deadline)}}</p>
          <p class="card-text">Created at: {{format_date(bug.created_at)}}</p>
          <p class="card-text">Updated at: {{format_date(bug.updated_at)}}</p>
          <i @click="deleteBug(bug.id)" class="fas fa-trash-alt delete_icon"></i>
          <br/>
          <button @click="showBugInfo(bug.id)">Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'Bugs',
  methods: {
    ...mapActions(['fetchBugs', 'deleteBug']),
    // data formatting function
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY');
      }
      return ('Date not passed');
    },
    showBugInfo(bugId) {
      this.$router.push({ name: 'showBug', params: { id: bugId } });
    },
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
