import Vue from 'vue';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import store from './store';
import App from './App.vue';
import router from './router';

Vue.use(Chartkick.use(Chart));
Chartkick.options = {
  colors: ['#2655ee', '#c70c0c'],
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
