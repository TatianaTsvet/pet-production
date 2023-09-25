import {
    CSSProperties, useMemo, type FC, memo,
} from 'react';
import { Mods, classNames } from 'shared/lib';
import cls from './avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

const Avatar: FC<IAvatarProps> = memo((props: IAvatarProps) => {
    const {
        className, src, size, alt,
    } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
});

export default Avatar;
