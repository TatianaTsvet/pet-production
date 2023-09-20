import type { FC, PropsWithChildren } from 'react';
import { classNames, useDynamicModuleLoader } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/profile';
import { ReducersList } from 'shared/lib/hooks';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
 className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }: PropsWithChildren<IProfilePageProps>) => {
    const { t } = useTranslation('profile.page');
    useDynamicModuleLoader(reducers, true);
    return (
        <div className={classNames('', {}, [className])}>
            {t('profile.page.name')}
        </div>
    );
};

export default ProfilePage;
