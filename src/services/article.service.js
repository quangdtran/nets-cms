import axios from 'axios';
import config from '@src/root/configAPI';

const api = axios
  .create({
    // baseURL: 'http://192.168.0.59:3001/api',
    baseURL: `${config.baseURL}/article`,
    timeout: 5000,
  });

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
};

export default {
  getList() {
    const accessToken = window.localStorage.getItem('access_token');
    headers.Authorization = `Bearer ${accessToken}`;
    return api.get('/', { headers });
  },

  getById(id) {
    const accessToken = window.localStorage.getItem('access_token');
    headers.Authorization = `Bearer ${accessToken}`;
    return api.get(`/${id}`, { headers });
  },

  update(post) {
    const accessToken = window.localStorage.getItem('access_token');
    headers.Authorization = `Bearer ${accessToken}`;
    return api.put('/', { ...post }, { headers });
  },

  create(post) {
    const accessToken = window.localStorage.getItem('access_token');
    headers.Authorization = `Bearer ${accessToken}`;
    return api.post('/', { ...post }, { headers });
  },

  deleteById(id) {
    const accessToken = window.localStorage.getItem('access_token');
    headers.Authorization = `Bearer ${accessToken}`;
    return api.delete(`/${id}`, { headers });
  },
};
