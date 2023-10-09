import { memo, type FC, type PropsWithChildren } from 'react';
import { Mods, classNames } from 'shared/lib';
import cls from './text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum ETextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: ETextAlign;
    size?: ETextSize;
}

export const Text: FC<ITextProps> = memo((props: PropsWithChildren<ITextProps>) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = ETextAlign.LEFT,
        size = ETextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
