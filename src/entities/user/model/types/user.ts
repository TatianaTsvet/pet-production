export enum EUserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface IUser {
    id: string;
    userName: string;
    avatar?: string;
    roles?: EUserRole[];
}

export interface IUserSchema {
    authData?: IUser;
    mounted?: boolean;
}
