import { IStateSchema } from 'app';

export const getProfileFirstName = (state: IStateSchema) => state.profile.data.first;
