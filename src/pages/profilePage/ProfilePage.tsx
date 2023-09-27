import {
    useEffect, type FC, type PropsWithChildren, useCallback,
} from 'react';
import { classNames, useDynamicModuleLoader } from 'shared/lib';
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/profile';
import { ReducersList, useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { ECurrency } from 'entities/currency';
import { ECountry } from 'entities/country';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
 className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }: PropsWithChildren<IProfilePageProps>) => {
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const readonly = useSelector(getProfileReadonly);

    const { t } = useTranslation('profile');
    useDynamicModuleLoader(reducers, true);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUserName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ userName: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: ECurrency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: ECountry) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard
                profileData={form}
                isLoading={isLoading}
                error={error}
                validateErrors={validateErrors}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUserName={onChangeUserName}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};

export default ProfilePage;
