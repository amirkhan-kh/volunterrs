import axios from 'axios';
// authApi.ts token bilan so'rovlar uchun ishlatiladi









export const authApi = axios.create({
  baseURL: 'http://localhost:8000/user/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});




authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// noAuthApi.ts tokensiz so'rovlar uchun ishlatiladi




export const noAuthApi = axios.create({
  baseURL: 'http://localhost:8000/user/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

