import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';

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
