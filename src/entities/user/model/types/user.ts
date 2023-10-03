export interface IUser {
    id: string;
    userName: string;
    avatar?: string;
}

export interface IUserSchema {
    authData?: IUser;
    mounted?: boolean;
}
