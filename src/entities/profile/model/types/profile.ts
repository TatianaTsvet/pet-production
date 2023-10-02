import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';

export enum EValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    first?: string;
    lastName?: string;
    age?: number,
    currency?: ECurrency,
    country?: ECountry;
    city?: string,
    userName?: string;
    avatar?: string;
    id?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: EValidateProfileError[];
}
