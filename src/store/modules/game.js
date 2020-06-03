import { getCategories } from '../../api/open-trivia';

const state = {
  categories: [],
  selectedCategories: [],
  score: 0,
  numQuestions: 0,
};

const getters = {
  allCategories: (state) => state.categories,
};

const actions = {
  async fetchCategories({ commit }) {
    const categories = getCategories();
    console.log(categories);
    commit('setCategories', categories);
  },
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
