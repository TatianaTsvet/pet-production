import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { updateProfileData } from '../services';
import { EValidateProfileError, IProfileSchema } from '../types';
import { profileReducer, profileActions } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: ECountry.Armenia,
    lastName: 'Tsvet',
    first: 'asd',
    city: 'asf',
    currency: ECurrency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<IProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as IProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<IProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: [],
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<IProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateErrors: [EValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
