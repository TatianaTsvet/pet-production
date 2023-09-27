export interface User {
    id: number;
    userName: string;
}

export interface IUserSchema {
    authData?: User;
    mounted?: boolean;
}
