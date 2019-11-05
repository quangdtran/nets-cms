import axios from 'axios';
import config from '@src/root/configAPI';

const api = axios
  .create({
    baseURL: config.baseURL,
    timeout: 5000,
  });

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
};

export default {
  getAll() {
    return api.get('/category');
  },
};
