<template>
  <div>
    <div class="row d-flex justify-content-center my-5">
      <div class="col-6">
        <form @submit="onSubmit">
          <div class="form-group">
            <label for="exampleFormControlInput1">Enter Bug name :</label>
            <input type="text" class="form-control my-3" v-model="title"
            placeholder="Add Bug Name..."/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Enter Bug Description :</label>
            <textarea type="text" class="form-control my-3" v-model="description"
            placeholder="Add Bug Description..."/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Select Project :</label>
            <select v-model="project_id" class="form-select my-3">
              <option disabled value="">Please select one</option>
              <option v-for="project in allProjectsforBug" :key="project.id" :value="project.id">
                {{project.project_name}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Select Bug Type :</label>
            <select v-model.number="bug_type" class="form-select my-3">
              <option value="" disabled selected>Please select one</option>
              <option value="0">Feature</option>
              <option value="1">Bug</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Select Feature Status :</label>
            <select v-model.number="feature_status" class="form-select my-3">
              <option value="" disabled selected>Please select one</option>
              <option value="0">Feature New</option>
              <option value="1">Feature Started</option>
              <option value="2">Feature Completed</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Select Bug Status :</label>
            <select v-model.number="bug_status" class="form-select my-3">
              <option value="" disabled selected>Please select one</option>
              <option value="0">Bug New</option>
              <option value="1">Bug Started</option>
              <option value="2">Bug Resolved</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Enter Project Deadline:</label>
            <input type="datetime-local" class="form-control my-3" v-model="deadline"/>
          </div>
          <input type="submit" class="btn btn-outline-success my-3" value="Update">
          <a href="javascript:history.go(-1)" class="btn btn-outline-primary mx-3">Cancel</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: 'dummy',
      description: '',
      project_id: null,
      bug_type: null,
      feature_status: null,
      bug_status: null,
      deadline: null,
    };
  },
  computed: {
    ...mapGetters(['allProjectsforBug']),
  },
  methods: {
    ...mapActions(['editBug', 'fetchProjects']),
    onSubmit(event) {
      event.preventDefault();
      const newBugData = {
        bug: {
          title: this.title,
          description: this.description,
          project_id: this.project_id,
          bug_type: this.bug_type,
          feature_status: this.feature_status,
          bug_status: this.bug_status,
          deadline: this.deadline,
        },
      };
      this.editBug(newBugData);
      this.resetData();
      this.goBack();
    },
    resetData() {
      this.title = '';
      this.description = '';
      this.project_id = null;
      this.bug_type = null;
      this.feature_status = null;
      this.bug_status = null;
      this.deadline = null;
    },
    goBack() {
      this.$router.push({ name: 'BrowseBugs' });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<style scoped>

</style>
