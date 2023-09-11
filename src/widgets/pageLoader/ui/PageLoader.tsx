import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/loader/ui';
import { FC } from 'react';
import cls from './pageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader: FC<IPageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
export default PageLoader;
