import type { FC } from 'react';
import { EMods, classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    Input,
    Text,
    ETextAlign,
    ETextTheme,
    VStack,
    HStack,
} from 'shared/ui';
import { Loader } from 'widgets/loader';
import { Avatar } from 'shared/ui/avatar';
import { ECountry } from 'entities/country';
import CountrySelect from 'entities/country/ui/countrySelect/CountrySelect';
import { CurrencySelect, ECurrency } from 'entities/currency';

import { IProfile } from '../../model';
import cls from './profileCard.module.scss';

interface IProfileCardProps {
 className?: string;
 profileData?: IProfile;
 error?: string;
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

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>

        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text align={ETextAlign.CENTER} theme={ETextTheme.ERROR} title={t('profile.error')} />
            </HStack>

        );
    }

    const mods: EMods = {
        [cls.editing]: readonly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.profileCard, mods, [className])}>

            {profileData?.avatar && (
                <HStack max justify="center">
                    <Avatar src={profileData?.avatar} />
                </HStack>
            )}
            <Input
                value={profileData?.first}
                placeholder={t('profile.your.name')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="profileCard.firstName"
            />
            <Input
                value={profileData?.lastName}
                placeholder={t('profile.your.surname')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="profileCard.lastName"
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
                value={profileData?.userName}
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
        </VStack>
    );
};

export default ProfileCard;
