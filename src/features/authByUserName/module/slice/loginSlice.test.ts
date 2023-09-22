import { loginActions, loginReducer } from './loginSlice';
import { ILoginSchema } from '../types';

describe('loginSlice.test', () => {
    test('test set userName', () => {
        const state: DeepPartial<ILoginSchema> = { userName: '123' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUserName('123123'),
        )).toEqual({ userName: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '123' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
