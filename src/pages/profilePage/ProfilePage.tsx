import { useEffect, type FC, type PropsWithChildren } from 'react';
import { classNames, useDynamicModuleLoader } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, profileReducer } from 'entities/profile';
import { ReducersList, useAppDispatch } from 'shared/lib/hooks';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
 className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }: PropsWithChildren<IProfilePageProps>) => {
    const { t } = useTranslation('profile.page');
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            {t('profile.page.name')}
        </div>
    );
};

export default ProfilePage;
