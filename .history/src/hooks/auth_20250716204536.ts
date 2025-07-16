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

// noAuthApi.ts

export const noAuthApi = axios.create({
  baseURL: 'http://volunteers.uz:8443/user/',
  headers: {
    'Content-Type': 'application/json',
  },
});

