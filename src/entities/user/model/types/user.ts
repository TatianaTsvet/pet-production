export interface User {
    id: string;
    userName: string;
}

export interface IUserSchema {
    authData?: User;
}
