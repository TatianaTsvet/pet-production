import { IStateSchema } from 'app/providers';

export const getProfileForm = (state: IStateSchema) => state?.profile?.form;
