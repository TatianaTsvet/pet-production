import { IStateSchema } from 'app/providers';

export const getLoginState = (state: IStateSchema) => state.loginForm;
