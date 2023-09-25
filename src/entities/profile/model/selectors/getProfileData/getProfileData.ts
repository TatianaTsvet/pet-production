import { IStateSchema } from 'app/providers';

export const getProfileData = (state: IStateSchema) => state?.profile?.form;
