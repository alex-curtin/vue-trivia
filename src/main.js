import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import store from './store';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
