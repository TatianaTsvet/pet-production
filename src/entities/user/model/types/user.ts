import { EUserRole } from '../consts';

export interface IUser {
    id: string;
    userName: string;
    avatar?: string;
    role?: EUserRole[];
}

export interface IUserSchema {
    authData?: IUser;
    mounted?: boolean;
}
