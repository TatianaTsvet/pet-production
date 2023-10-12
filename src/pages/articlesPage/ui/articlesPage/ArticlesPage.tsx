import { ArticleList, EArticleView } from 'entities/article';
import { ArticleViewSelector } from 'features/articleViewSelector';

import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList, useAppDispatch, useInitialEffect, classNames, useDynamicModuleLoader } from 'shared/lib';
import { Page } from 'widgets/page';
import { useSearchParams } from 'react-router-dom';
import cls from './articlesPage.module.scss';
import { ArticlesPageFilters } from '../articlesPageFilters';
import {
    articlesPageActions,
    articlesPageReducer,
    fetchNextArticlesPage,
    getArticles,
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
    initArticlesPage,
} from '../../model';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    useDynamicModuleLoader(reducers, false);

    const onChangeView = useCallback((view: EArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.articlesPage, {}, [className])}
        >
            <ArticlesPageFilters />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </Page>
    );
};

export default memo(ArticlesPage);
