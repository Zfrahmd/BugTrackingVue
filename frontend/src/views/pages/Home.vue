<template>
  <div>
    <div class="jumbotron home_banner text-white">
      <h3 class="text-center"><strong>Bug Tracking System</strong></h3>
      <p class="py-3">Welcome to Bug Tracking Sytem. Here manager can assign QA & Developer to a
        project. Quality Assurance can add bug to a project while developer will solve that bug.
      </p>
      <hr class="my-4">
      <p class="text-center">
      </p>
      <p class="text-center">
      </p>
    </div>
    <!-- <div class="home">
      <img alt="Vue logo" src="@/assets/logo.png">
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style>

.home_banner {
  background-image: url('~@/assets/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 7%;
  padding-bottom: 6.5%;
  padding-left: 5%;
  padding-right: 5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}

</style>
