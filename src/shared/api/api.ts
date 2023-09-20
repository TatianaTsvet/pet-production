import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';

export const API = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
