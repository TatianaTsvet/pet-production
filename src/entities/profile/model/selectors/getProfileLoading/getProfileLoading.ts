import { IStateSchema } from 'app/providers';

export const getProfileLoading = (state: IStateSchema) => state?.profile?.isLoading;
