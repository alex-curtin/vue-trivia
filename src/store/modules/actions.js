import router from '../../router';
import { getCategories, getQuestion } from '../../api/open-trivia';

export default {
  async fetchCategories({ commit }) {
    const categories = await getCategories();
    commit('setCategories', categories);
  },
  selectCategories({ commit }, categories) {
    commit('setSelectedCategories', categories);
    router.push('/game');
  },
  async fetchQuestion({ commit, rootState }) {
    const category =
      rootState.selectedCategories[
        Math.floor(Math.random() * rootState.selectedCategories.length)
      ];
    const question = await getQuestion(category);
    console.log(question);
    commit('setQuestion', question);
  },
  addToScore({ commit }) {
    commit('addToScore');
  },
};
