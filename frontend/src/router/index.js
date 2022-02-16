import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import About from '@/views/pages/About.vue';
import ProjectsIndex from '@/views/projects/index.vue';
import BugsIndex from '@/views/bugs/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'BrowseProjects',
    component: ProjectsIndex,
  },
  {
    path: '/bugs',
    name: 'BrowseBugs',
    component: BugsIndex,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
