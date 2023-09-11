import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={
                classNames(
                    cls.sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button onClick={onToggle}>{t('toggle')}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang_button} />
            </div>
        </div>
    );
};
export default Sidebar;
