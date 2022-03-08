<template>
  <div class="row py-4 text-center">
    <div
    v-for="bug in allBugs"
    :key="bug.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title attribute">Title:
            <p class="attribute_value">{{bug.title}}</p>
          </h5>
          <p class="card-text attribute">Description: <span class="attribute_value">
            {{bug.description}}</span>
          </p>
          <p class="card-text attribute">Bug Type: <span class="attribute_value">
            {{bug.bug_type}}</span>
          </p>
          <p class="card-text attribute">Feature Status: <span class="attribute_value">
            {{bug.feature_status}}</span>
          </p>
          <p class="card-text attribute">Bug Status: <span class="attribute_value">
            {{bug.bug_status}}</span>
          </p>
          <p class="card-text attribute">Deadline: <span class="attribute_value">
            {{format_date(bug.deadline)}}</span>
          </p>
          <p class="card-text attribute">Created at: <span class="attribute_value">
            {{format_date(bug.created_at)}}</span>
          </p>
          <p class="card-text attribute">Updated at: <span class="attribute_value">
            {{format_date(bug.updated_at)}}</span>
          </p>
          <button class="btn btn-outline-primary mx-2 my-3" @click="showBugInfo(bug.id)">
          Read More
          </button>
          <button class="btn btn-outline-primary mx-2 my-3" @click="editBugInfo(bug.id)">
          Edit Bug
          </button>
          <button @click="deleteBug(bug.id)" class="btn btn-outline-danger">
          <i class="fas fa-trash-alt delete_icon"></i>
          </button>
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
    editBugInfo(bugId) {
      this.$router.push({ name: 'editBug', params: { id: bugId } });
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

<style scoped>
.card {
  border-radius: 1.5%;
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}
.attribute {
  color: grey;
}
.attribute_value {
  color: silver;
  display:inline-block;
}
</style>
