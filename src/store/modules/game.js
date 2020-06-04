import { router } from '../../main';
import { getCategories, getQuestion } from '../../api/open-trivia';

const state = {
  categories: [],
  selectedCategories: [],
  score: 0,
  numQuestions: 0,
  correctAnswers: 0,
  question: null,
};

const getters = {
  allCategories: (state) => state.categories,
  question: (state) => state.question,
};

const actions = {
  async fetchCategories({ commit }) {
    const categories = await getCategories();
    commit('setCategories', categories);
  },
  selectCategories({ commit }, categories) {
    commit('setSelectedCategories', categories);
    router.push('/game');
  },
  async fetchQuestion({ commit }) {
    const category =
      state.selectedCategories[
        Math.floor(Math.random() * state.selectedCategories.length)
      ];
    const question = await getQuestion(category);
    console.log(question);
    commit('setQuestion', question);
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setSelectedCategories: (state, categories) => {
    state.selectedCategories = categories;
  },
  setQuestion: (state, question) => {
    state.question = question;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
