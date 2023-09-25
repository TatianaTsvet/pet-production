import { IStateSchema } from 'app/providers';

export const getProfileReadonly = (state: IStateSchema) => state?.profile?.readonly;
