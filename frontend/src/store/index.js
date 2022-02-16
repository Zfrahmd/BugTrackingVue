import { createStore } from 'vuex';
import projects from '@/store/modules/projects';
import bugs from '@/store/modules/bugs';

export default createStore({
  modules: {
    projects,
    bugs,
  },
});
