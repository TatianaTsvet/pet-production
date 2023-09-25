import type { FC } from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import { EValidateProfileError, IProfile } from 'entities/profile/model';
import { useTranslation } from 'react-i18next';
import {
    Input, Text, TextAlign, TextTheme,
} from 'shared/ui';
import { Loader } from 'widgets/loader';
import { ProfilePageHeader } from 'pages/profilePage';
import { Avatar } from 'shared/ui/avatar';
import { ECountry } from 'entities/country';
import CountrySelect from 'entities/country/ui/countrySelect/CountrySelect';
import { CurrencySelect, ECurrency } from 'entities/currency';
import cls from './profileCard.module.scss';

interface IProfileCardProps {
 className?: string;
 profileData?: IProfile;
 error?: string;
 validateErrors?: EValidateProfileError[];
 isLoading?: boolean;
 readonly?: boolean;
onChangeLastName?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: ECurrency) => void;
    onChangeCountry?: (country: ECountry) => void;

}

const ProfileCard: FC<IProfileCardProps> = (props: IProfileCardProps) => {
    const {
        className,
        profileData,
        error,
        validateErrors,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUserName,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    const validateErrorsTranslation = {
        [EValidateProfileError.INCORRECT_AGE]: t('age.error'),
        [EValidateProfileError.INCORRECT_COUNTRY]: t('region.error'),
        [EValidateProfileError.INCORRECT_USER_DATA]: t('name.error'),
        [EValidateProfileError.NO_DATA]: t('data.error'),
        [EValidateProfileError.SERVER_ERROR]: t('server.error'),
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>

        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('profile.error')} />
            </div>

        );
    }

    const mods: Mods = {
        [cls.editing]: readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text key={err} theme={TextTheme.ERROR} text={validateErrorsTranslation[err]} />
            ))}
            <div>
                {profileData?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={profileData?.avatar} />
                    </div>
                )}
                <Input
                    value={profileData?.first}
                    placeholder={t('profile.your.name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={profileData?.lastName}
                    placeholder={t('profile.your.surname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={profileData?.age}
                    placeholder={t('profile.age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={profileData?.city}
                    placeholder={t('profile.city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={profileData?.username}
                    placeholder={t('profile.enter.user.name')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readonly={readonly}
                />
                <Input
                    value={profileData?.avatar}
                    placeholder={t('profile.enter.avatar.link')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={profileData?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={profileData?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
