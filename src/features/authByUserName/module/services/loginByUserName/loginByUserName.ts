import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig, IThunkExtraArg } from 'app/providers';
import { IUser, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';

interface ILoginByUserNameProps {
    userName: string;
    password: string;
}

enum ELoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserNameProps, IThunkConfig<string>>(
    'login/loginByUserName',
    async (authData: ILoginByUserNameProps, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<IUser>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
