import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SortOrder } from 'shared/types';
import { ArticleViewSelector } from 'features/articleViewSelector';
import { useAppDispatch, useDebounce } from 'shared/lib';
import { Card, Input } from 'shared/ui';
import { EArticleView, EArticleSortField, EArticleType } from 'entities/article';
import { ArticleSortSelector } from 'features/articleSortSelector';
import { ArticleTypeTabs } from 'features/articleTypeTabs';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageType,
    getArticlesPageView,
    getArticlesPageSort,
} from '../../model';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './articlesPageFilters.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: EArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: EArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: EArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('articles.search')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});

export default ArticlesPageFilters;
