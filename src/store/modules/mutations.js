export default {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  setSelectedCategories: (state, categories) => {
    state.selectedCategories = categories;
  },
  setQuestion: (state, question) => {
    state.question = question;
  },
  addToScore: (state) => {
    state.score += 10;
  },
};
