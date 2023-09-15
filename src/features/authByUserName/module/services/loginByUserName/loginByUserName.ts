import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';

interface ILoginByUserNameProps {
    userName: string;
    password: string;
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
            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
