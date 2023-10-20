import { IProfile } from 'entities/profile';
import { EValidateProfileError } from '../consts';

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: EValidateProfileError[];
}
