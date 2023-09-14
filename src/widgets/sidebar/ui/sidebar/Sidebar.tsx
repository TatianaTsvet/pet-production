import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/asserts/icons/about.svg';
import HomeIcon from 'shared/asserts/icons/home.svg';
import { useTranslation } from 'react-i18next';
import {
    Button, AppLink, AppLinkTheme, ButtonSize, ButtonTheme,
} from 'shared';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import LangSwitcher from 'widgets/langSwitcher/ui/LangSwitcher';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation(['about', 'main']);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testd="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('main.page', { ns: 'main' })}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('about.site', { ns: 'about' })}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
