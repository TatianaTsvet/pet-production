import { IProfile } from 'entities/profile';
import { EValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [EValidateProfileError.NO_DATA];
    }

    const {
        first, lastName, age, country,
    } = profile;

    const errors: EValidateProfileError[] = [];

    if (!first || !lastName) {
        errors.push(EValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(EValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(EValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
