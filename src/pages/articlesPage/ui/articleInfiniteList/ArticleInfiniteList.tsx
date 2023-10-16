import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/article';
import { Text } from 'shared/ui';
import {
    getArticles,
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model';

interface IArticleInfiniteListProps {
    className?: string;
}

const ArticleInfiniteList = memo((props: IArticleInfiniteListProps) => {
    const { className } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const { t } = useTranslation('article-details');

    if (error) {
        return <Text text={t('articles.upload.error')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});

export default ArticleInfiniteList;
