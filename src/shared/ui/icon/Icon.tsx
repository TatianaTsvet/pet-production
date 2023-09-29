import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
});

export default Icon;
