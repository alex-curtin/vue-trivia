import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Categories from '../views/Categories';
import MainGame from '../views/MainGame';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/game', name: 'MainGame', component: MainGame },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
