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
    const categories = await getCategories();
    console.log(categories);
    commit('setCategories', categories);
  },
  selectCategories({ commit }, categories) {
    console.log(categories);
    commit('setSelectedCategories', categories);
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setSelectedCategories: (state, categories) => {
    state.selectedCategories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
