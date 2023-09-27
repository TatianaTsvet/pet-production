import { IStateSchema } from 'app/providers';

export const getUserInit = (state: IStateSchema) => state.user.mounted;
