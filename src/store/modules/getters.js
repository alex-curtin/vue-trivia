export default {
  allCategories: (state) =>
    state.categories.map((cat) => {
      cat.name = cat.name
        .replace('Entertainment: ', '')
        .replace('Science: ', '');
      return cat;
    }),
  question: (state) => state.question,
};
