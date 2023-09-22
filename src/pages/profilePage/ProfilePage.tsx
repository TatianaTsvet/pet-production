import { useEffect, type FC, type PropsWithChildren } from 'react';
import { classNames, useDynamicModuleLoader } from 'shared/lib';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/profile';
import { ReducersList, useAppDispatch } from 'shared/lib/hooks';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface IProfilePageProps {
 className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }: PropsWithChildren<IProfilePageProps>) => {
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
