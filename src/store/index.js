import Vuex from 'vuex';
import Vue from 'vue';
import actions from './modules/actions';
import state from './modules/state';
import mutations from './modules/mutations';
import getters from './modules/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
});
