import { FC } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    const {t} = useTranslation(['about', 'main']);
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    {t('main.page', { ns: 'main' })}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
                {t('about.site')}
                </AppLink>
            </div>
        </div>
    );
};
