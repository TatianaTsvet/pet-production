import { EMods, classNames } from 'shared/lib/classNames';
import {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
}

export const Button: FC<IButtonProps> = memo((props: IButtonProps) => {
    const {
        className,
        children,
        theme = EButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const mods: EMods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
