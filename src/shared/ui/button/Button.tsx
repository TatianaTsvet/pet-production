import { classNames } from 'shared/lib';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

type buttonType = 'button' | 'submit' | 'reset';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,

        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
