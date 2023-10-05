import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/loader';
import cls from './pageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: IPageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
