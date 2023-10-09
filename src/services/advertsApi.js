import axios from 'axios';

axios.defaults.baseURL = 'https://65207c14906e276284c47d4c.mockapi.io/api/v1/';

export const getAdverts = async (page = 1) => {
  const { data } = await axios.get(`/adverts?p=${page}&l=8`);
  return data;
};
