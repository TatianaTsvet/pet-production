import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
import { FC, ReactNode, memo } from 'react';
import cls from './appLink.module.scss';

export enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: EAppLinkTheme;
    children?: ReactNode;
}

export const AppLink: FC<IAppLinkProps> = memo((props: IAppLinkProps) => {
    const {
        className, children, to, theme = EAppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
