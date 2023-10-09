import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { EArticleView, IArticle } from 'entities/article/model';
import { ETextSize, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './articleList.module.scss';
import { ArticleListItem, ArticleListItemSkeleton } from '../articleListItem';

interface IArticleListProps {
    className?: string;
    articles: IArticle[]
    isLoading?: boolean;
    view?: EArticleView;
}

const getSkeletons = (view: EArticleView) => new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item) => (
        <ArticleListItemSkeleton className={cls.card} key={item} view={view} />
    ));

const ArticleList = memo((props: IArticleListProps) => {
    const {
        className,
        articles,
        view = EArticleView.SMALL,
        isLoading,
    } = props;
    const { t } = useTranslation('article-details');

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text size={ETextSize.L} title={t('articles.not.found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && (
                <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                    {getSkeletons(view)}
                </div>
            )}
        </div>
    );
});

export default ArticleList;
