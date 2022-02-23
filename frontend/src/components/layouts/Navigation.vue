<template>
  <nav class="navbar navbar-expand-sm navigation">
    <div class="container-fluid">
      <a class= "nav-link active link_logo" href="/">Bug Tracking System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Projects
            </a>
            <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
              <li><p class= "text-center"><router-link :to="{ name: 'NewProject' }"
              class="dropdown-item">Create Project</router-link></p>
              </li>
              <li><p class= "text-center"><router-link :to="{ name: 'BrowseProjects' }"
              class="dropdown-item">View Projects</router-link></p>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Bugs
            </a>
            <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
              <li><p class= "text-center"><router-link :to="{ name: 'NewBug' }"
              class="dropdown-item">Create Bug</router-link></p>
              </li>
              <li><p class= "text-center"><router-link :to="{ name: 'BrowseBugs' }"
              class="dropdown-item">View Bugs</router-link></p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
};
</script>

<style>

</style>
