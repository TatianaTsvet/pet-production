import { IUser } from 'entities/user';

export interface IComment {
    id: string;
    user: IUser;
    text: string;
}
