import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileLoading(state as IStateSchema)).toEqual(undefined);
    });
});
