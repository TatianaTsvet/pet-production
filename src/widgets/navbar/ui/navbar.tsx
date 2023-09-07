import { FC } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
