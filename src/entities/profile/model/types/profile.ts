import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';

export interface IProfile {
    first?: string;
    lastName?: string;
    age?: number,
    currency?: ECurrency,
    country?: ECountry;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
