import { memo, type FC } from 'react';
import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { classNames } from 'shared/lib';
import cls from './sidebarItem.module.scss';
import { ISidebarItemType } from '../../model/items';

interface ISidebarItemProps {
    item: ISidebarItemType;
    collapsed: boolean;
}

const SidebarItem: FC<ISidebarItemProps> = memo((props: ISidebarItemProps) => {
    const { item, collapsed } = props;
    // className={classNames(cls., {}, [className])}

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;
