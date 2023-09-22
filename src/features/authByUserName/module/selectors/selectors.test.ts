import { IStateSchema } from 'app/providers';
import {
    getLoginError, getLoginLoading, getLoginPassword, getLoginUserName,
} from './selectors';

// TODO refactoring
describe('getLoginError test', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'error',
            },

        };
        expect(getLoginError(state as IStateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getLoginLoading test', () => {
    test('should return true', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as IStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginLoading(state as IStateSchema)).toEqual(false);
    });
});

describe('getLoginPassword test', () => {
    test('should return true', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                userName: '',
                password: '123',
                isLoading: false,
            },
            user: undefined,
        };
        expect(getLoginPassword(state as IStateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = { user: undefined };
        expect(getLoginPassword(state as IStateSchema)).toEqual('');
    });
});

describe('getLoginUserName test', () => {
    test('should return true', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                userName: 'admin',
                password: '',
                isLoading: false,
            },
            user: undefined,
        };
        expect(getLoginUserName(state as IStateSchema)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = { user: undefined };
        expect(getLoginUserName(state as IStateSchema)).toEqual('');
    });
});
