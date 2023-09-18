import { IStateSchema } from 'app';

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
