import router from '../../router';
import { getCategories, getQuestion, getToken } from '../../api/open-trivia';

export default {
  async fetchCategories({ commit }) {
    const categories = await getCategories();
    commit('setCategories', categories);
  },
  async selectCategories({ commit }, categories) {
    const token = await getToken();
    commit('setSelectedCategories', categories);
    commit('setToken', token);
    router.push('/game');
  },
  async fetchQuestion({ commit, rootState }) {
    commit('setQuestion', null);
    const category =
      rootState.selectedCategories[
        Math.floor(Math.random() * rootState.selectedCategories.length)
      ];
    const token = rootState.token;
    const question = await getQuestion(category, token);
    console.log(question);
    commit('setQuestion', question);
    commit('addToQuestionCount');
  },
  addToScore({ commit }) {
    commit('addToScore');
  },
};
