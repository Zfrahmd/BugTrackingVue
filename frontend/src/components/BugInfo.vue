<template>
  <div class="py-5 text-center">
    <h2><strong>Bug Detail</strong></h2>
    <div class="row py-4">
      <div>
        <p>Title: {{bug.title}}</p>
        <p>Description: {{bug.description}}</p>
        <p>Bug Type: {{bug.bug_type}}</p>
        <p>Belongs to Project: &nbsp;{{bug.project_id}}</p>
        <p>Feature Status: {{bug.feature_status}}</p>
        <p>Bug Status: {{bug.bug_status}}</p>
        <p>Deadline: {{bug.deadline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BugInfo',
  state: {
    bugsList: [],
  },
  methods: {
    ...mapActions(['fetchBugs']),
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
