import { memo, type FC, type PropsWithChildren } from 'react';
import { EMods, classNames } from 'shared/lib';
import cls from './text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum ETextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum ETextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<ETextSize, HeaderTagType> = {
    [ETextSize.S]: 'h1',
    [ETextSize.M]: 'h2',
    [ETextSize.L]: 'h3',
};

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ETextTheme;
    align?: ETextAlign;
    size?: ETextSize;
}

export const Text: FC<ITextProps> = memo((props: PropsWithChildren<ITextProps>) => {
    const {
        className,
        text,
        title,
        theme = ETextTheme.PRIMARY,
        align = ETextAlign.LEFT,
        size = ETextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: EMods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
