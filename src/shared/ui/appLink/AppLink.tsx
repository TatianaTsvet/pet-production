import { Link, LinkProps } from 'react-router-dom';
import './appLink.module.scss';
import cls from './appLink.module.scss';
import { classNames } from 'shared/lib';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

