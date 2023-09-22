import { IStateSchema } from 'app/providers';

export const getProfileError = (state: IStateSchema) => state?.profile?.error;
