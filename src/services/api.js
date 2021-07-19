import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://52.88.150.170' : 'http://localhost:3333',
});

export default api;
