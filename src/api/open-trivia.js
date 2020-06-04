import axios from 'axios';

export const getCategories = async () => {
  const res = await axios.get('https://opentdb.com/api_category.php');
  return res.data.trivia_categories;
};

export const getQuestion = async (category) => {
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${category}`
  );
  return res.data.results[0];
};
