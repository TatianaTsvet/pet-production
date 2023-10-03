import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

const Card = memo((props: ICardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

export default Card;
