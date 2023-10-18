import { IStateSchema } from 'app/providers';
import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            userName: 'admin',
            age: 22,
            country: ECountry.Ukraine,
            lastname: 'tsvet',
            first: 'asd',
            city: 'asf',
            currency: ECurrency.USD,
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
    });
});
