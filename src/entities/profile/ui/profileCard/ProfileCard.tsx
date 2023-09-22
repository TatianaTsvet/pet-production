import type { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import { getProfileData, getProfileError, getProfileLoading } from 'entities/profile/model';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    Button, ButtonTheme, Input, Text,
} from 'shared/ui';
import cls from './profileCard.module.scss';

interface IProfileCardProps {
 className?: string;
 children?: ReactNode;
}

const ProfileCard: FC<IProfileCardProps> = (props: IProfileCardProps) => {
    const { className, children } = props;
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={profileData?.first}
                    placeholder={t('profile.your.name')}
                    className={cls.input}
                />
                <Input
                    value={profileData?.lastName}
                    placeholder={t('profile.your.name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
