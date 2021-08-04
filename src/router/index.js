import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ShowUser from "../views/ShowUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:id',
    name: 'User Show',
    component: ShowUser
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
