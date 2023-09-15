import { IUserSchema } from 'entities/user';
import { ILoginSchema } from 'features';

export interface IStateSchema {
    user: IUserSchema;
    loginForm?: ILoginSchema;
}
