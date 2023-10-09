import axios, { AxiosError } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instanceAxios.interceptors.request.use((config) => {
  const persist = JSON.parse(localStorage.getItem('persist:auth') ?? '');
  const tokenInfo = JSON.parse(persist.token ?? '');
  if (tokenInfo.accessToken) {
    const modifiedConfig = { ...config };
    modifiedConfig.headers.Authorization = `Bearer ${tokenInfo.accessToken}`;
    return modifiedConfig;
  }

  return config;
});

instanceAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => Promise.reject(error),
);
