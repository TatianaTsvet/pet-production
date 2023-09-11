import { classNames } from 'shared/lib/classNames/classNames';
import './loader.scss';
import { FC } from 'react';

interface ILoaderProps {
    className?: string;
}

const Loader: FC<ILoaderProps> = ({ className }) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
export default Loader;
