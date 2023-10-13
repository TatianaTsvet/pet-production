import { useCallback, type FC } from 'react';
import {
    getProfileData,
    getProfileReadonly, profileActions, updateProfileData,
} from 'entities/profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, classNames } from 'shared/lib';
import { Button, EButtonTheme, Text } from 'shared/ui';
import { getUserAuthData } from 'entities/user';
import { HStack } from 'shared/ui/stack';

interface IProfilePageHeaderProps {
 className?: string;
}

const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props: IProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('profile')} />
            {canEdit ? (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={EButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={EButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('profile.cancel')}
                                </Button>
                                <Button
                                    theme={EButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('profile.save')}
                                </Button>
                            </HStack>
                        )}
                </div>
            ) : null}
        </HStack>
    );
};

export default ProfilePageHeader;
