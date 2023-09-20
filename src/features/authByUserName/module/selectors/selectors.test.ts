import { IStateSchema } from 'app/providers';
import {
    getLoginError, getLoginLoading, getLoginPassword, getLoginUserName,
} from './selectors';

// TODO refactoring
describe('getLoginError test', () => {
    test('should return error', () => {
        const state: IStateSchema = {
            loginForm: {
                error: 'error',
                userName: '',
                password: '',
                isLoading: false,
            },
            user: undefined,
        };
        expect(getLoginError(state)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: IStateSchema = { user: undefined };
        expect(getLoginError(state)).toEqual(undefined);
    });
});

describe('getLoginLoading test', () => {
    test('should return true', () => {
        const state: IStateSchema = {
            loginForm: {
                isLoading: true,
                userName: '',
                password: '',
            },
            user: undefined,
        };
        expect(getLoginLoading(state)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: IStateSchema = { user: undefined };
        expect(getLoginLoading(state)).toEqual(false);
    });
});

describe('getLoginPassword test', () => {
    test('should return true', () => {
        const state: IStateSchema = {
            loginForm: {
                userName: '',
                password: '123',
                isLoading: false,
            },
            user: undefined,
        };
        expect(getLoginPassword(state)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: IStateSchema = { user: undefined };
        expect(getLoginPassword(state)).toEqual('');
    });
});

describe('getLoginUserName test', () => {
    test('should return true', () => {
        const state: IStateSchema = {
            loginForm: {
                userName: 'admin',
                password: '',
                isLoading: false,
            },
            user: undefined,
        };
        expect(getLoginUserName(state)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: IStateSchema = { user: undefined };
        expect(getLoginUserName(state)).toEqual('');
    });
});
