import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import Home from './components/Home';
import Categories from './components/Categories';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
