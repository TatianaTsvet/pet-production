import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';

interface ILoginByUserNameProps {
    userName: string;
    password: string;
}

enum ELoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const loginByUserName = createAsyncThunk<User, ILoginByUserNameProps>(
    'login/loginByUserName',
    async ({ userName, password }, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/login',
                { userName, password },
            );
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
