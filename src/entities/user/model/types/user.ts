export interface User {
    id: number;
    userName: string;
    avatar?: string;
}

export interface IUserSchema {
    authData?: User;
    mounted?: boolean;
}
