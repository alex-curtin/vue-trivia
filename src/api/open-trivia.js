import axios from 'axios';

export const getCategories = async () => {
  const res = await axios.get('https://opentdb.com/api_category.php');
  return res.data.trivia_categories;
};

export const getToken = async () => {
  const res = await axios.get(
    'https://opentdb.com/api_token.php?command=request'
  );
  return res.data.token;
};

export const getQuestion = async (category, token) => {
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${category}&token=${token}`
  );
  return res.data.results[0];
};
