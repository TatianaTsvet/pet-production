import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';
import { IProfile } from '../../types';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<IProfile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
