<template>
  <div class="div">
    <Navigation />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/layouts/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>

body {
  font-family: Poppins, sans-serif;
  /* text-align: center; */
  background: #1f1f1f;
  color: white;
  margin-bottom: 100px; /* Margin bottom by footer height */
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s ease-in;
}

.table {
  color: white;
}

/* Navigation bar starts */
.link_logo {
  color:white;
  transition: all 0.2s ease-in;
}

.link_logo:hover {
  transition: all 0.2s ease-in;
}

.navbar-nav .nav-link {
  color:rgb(145, 145, 145);
  transition: all 0.2s ease-in;
}

.navbar-nav .nav-link:hover {
  transition: all 0.2s ease-in;
}

.navbar-light .navbar-nav .nav-link {
  color: rgb(145, 145, 145);
  transition: all 0.2s ease-in;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: white;
  transition: all 0.2s ease-in;
}

.navigation {
  background: linear-gradient(-90deg, #212529 0%, #1f222e 100%);
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.3);
}

.dropdown-menu.show {
  background-color: #20242a;
  box-shadow: 0.1em 0.1em 1rem rgb(0 0 0 / 70%);
  transition: all 0.2s ease-in;
}

.dropdown-item {
  color: #ffffff;
}

.dropdown-item:hover {
  color: #ffffff;
  background-color: #1f1f1f;
}

.router-link-active {
  font-weight: bold;
}
/* Navigation bar end */

</style>
