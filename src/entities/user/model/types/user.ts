export interface User {
    id: string;
    userName: string;
    avatar?: string;
}

export interface IUserSchema {
    authData?: User;
    mounted?: boolean;
}
