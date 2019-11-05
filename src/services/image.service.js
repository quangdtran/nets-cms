import axios from 'axios';

const clientId = '5937f55e2d6ecdc';
const clientSecret = '2e5112e1bd30bad5b53b30a7769c154528e4cd78';

const api = axios
  .create({
    baseURL: 'https://api.imgur.com/3',
    timeout: 5000,
  });

const headers = {
  Authorization: `Client-ID ${clientId}`,
};

export const upload = (blobImage) => {
  return api.post('/image', {
    image: blobImage,
    type: 'base64',
  },
  { headers });
};
