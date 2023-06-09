import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
  key: '36940250-ff22d55fc3b5b349bac83f37c',
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
