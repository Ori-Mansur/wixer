import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import WapsPage from '../views/WapsPage.vue';
import WapPublish from '../views/WapPublish.vue';
import UserDetails from '../views/UserDetails.vue';
import WapEditor from '../views/WapEditor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/wap',
    name: 'Waps',
    component: WapsPage
  },
  {
    path: '/publish/:id',
    name: 'publish',
    component: WapPublish
  },
  {
    path: '/User/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/editor/:id?',
    name: 'WapEditor',
    component: WapEditor
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
