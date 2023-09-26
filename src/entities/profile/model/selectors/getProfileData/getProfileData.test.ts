import { ECountry } from 'entities/country';
import { IStateSchema } from 'app/providers';
import { ECurrency } from 'entities/currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            userName: 'admin',
            age: 22,
            country: ECountry.Armenia,
            lastName: 'Tsv',
            first: 'asd',
            city: 'asf',
            currency: ECurrency.USD,
        };

        const state: DeepPartial<IStateSchema> = {
            profile: { data },
        };

        expect(getProfileData(state as IStateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileData(state as IStateSchema)).toEqual(undefined);
    });
});
