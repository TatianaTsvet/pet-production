import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchProfileData } from './fetchProfileData';

const data = {
    userName: 'admin',
    age: 22,
    country: ECountry.Armenia,
    lastName: 'tsvet',
    first: 'asd',
    city: 'asf',
    currency: ECurrency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
