import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'http://volunteers.uz:8443/user/',
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
  baseURL: 'http://volunteers.uz:8443/user/',
  baseURL: 'http://localhost:8000/user/v2/',
>>>>>>> 11f561a6f7a14807c0d9f6ffda564278f81c5c86
  headers: {
    'Content-Type': 'application/json',
  },
});

