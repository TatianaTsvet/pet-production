import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { EArticleView, IArticle } from 'entities/article/model';
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
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={item} view={view} />
    ));

const ArticleList = memo((props: IArticleListProps) => {
    const {
        className,
        articles,
        view = EArticleView.SMALL,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});

export default ArticleList;
