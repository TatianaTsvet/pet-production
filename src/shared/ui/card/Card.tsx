import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: ICardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
