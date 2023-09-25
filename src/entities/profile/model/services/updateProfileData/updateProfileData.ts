import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers';
import { USER_LOCALSTORAGE_KEY } from 'shared/types';
import { EValidateProfileError, IProfile } from '../../types';
import { getProfileForm } from '../../selectors';
import { validateProfileData } from '../validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<EValidateProfileError[]
>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
        }
    },
);
