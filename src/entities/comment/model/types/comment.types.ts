import { User } from 'entities/user';

export interface IComment {
    id: string;
    user: User;
    text: string;
}
