import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';
import { IProfile } from '../../types';
import { getProfileForm } from '../../selectors';

enum ELoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
