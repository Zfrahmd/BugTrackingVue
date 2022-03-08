import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import AllProjects from '@/views/projects/index.vue';
import AllBugs from '@/views/bugs/index.vue';
import EditProject from '@/views/projects/edit.vue';
import NewBug from '@/views/bugs/new.vue';
import EditBug from '@/views/bugs/edit.vue';
import NewProject from '@/views/projects/new.vue';
import BugInfo from '@/components/BugInfo.vue';
import ProjectInfo from '@/components/ProjectInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'BrowseProjects',
    component: AllProjects,
  },
  {
    path: '/projects/:id',
    name: 'showProject',
    component: ProjectInfo,
  },
  {
    path: '/projects/new',
    name: 'NewProject',
    component: NewProject,
  },
  {
    path: '/projects/:id/edit',
    name: 'editProject',
    component: EditProject,
  },
  {
    path: '/bugs',
    name: 'BrowseBugs',
    component: AllBugs,
  },
  {
    path: '/bugs/:id',
    name: 'showBug',
    component: BugInfo,
  },
  {
    path: '/bugs/new',
    name: 'NewBug',
    component: NewBug,
  },
  {
    path: '/bugs/:id/edit',
    name: 'editBug',
    component: EditBug,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
