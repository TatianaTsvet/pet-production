import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/user';
import { useAppDispatch } from 'shared/lib';
import { HStack, Button, EButtonTheme, Text } from 'shared/ui';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
                                data-testid="editableProfileCard.EditButton"
                                theme={EButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    data-testid="editableProfileCard.CancelButton"
                                    theme={EButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('profile.cancel')}
                                </Button>
                                <Button
                                    data-testid="editableProfileCard.SaveButton"
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
});
