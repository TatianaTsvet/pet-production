import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';

// @deprecated
// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.ru';

export const API = axios.create({
    baseURL: __API__,
    // headers: {
    //     authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    // },
});

API.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
