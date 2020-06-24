export default {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setSelectedCategories: (state, categories) => {
    state.selectedCategories = categories;
  },
  setToken: (state, token) => {
    state.token = token;
  },
  setQuestion: (state, question) => {
    state.question = question;
  },
  addToScore: (state) => {
    state.score += 1;
  },
  addToQuestionCount: (state) => {
    state.numQuestions++;
  },
};
