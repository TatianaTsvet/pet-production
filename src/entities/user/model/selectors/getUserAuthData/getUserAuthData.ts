import { IStateSchema } from 'app/providers';

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
