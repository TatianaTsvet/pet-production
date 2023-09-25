import { IStateSchema } from 'app/providers';

export const getProfileValidateErrors = (state: IStateSchema) => state?.profile?.validateErrors;
