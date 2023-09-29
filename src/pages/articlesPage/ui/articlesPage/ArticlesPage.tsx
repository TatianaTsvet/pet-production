import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './articlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
