import axios from 'axios';

const base_url = axios.create({
  baseURL: 'https://test-server-klob.herokuapp.com/',
});

const api = {
  getLoker: async () => {
    try {
      const response = await base_url.get('/fakeJob');
      return response.data;
    } catch (err) {
      return err;
    }
  },
};

export default api;
