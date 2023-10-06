import { ArticleList, EArticleView } from 'entities/article';
import { ArticleViewSelector } from 'features/articleViewSelector';
import {
    articlesPageReducer,
    getArticles,
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
    articlesPageActions,
    fetchArticlesList,
    fetchNextArticlesPage,
    getArticlesPageInited,
    initArticlesPage,
} from 'pages/articlesPage/model';
import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList, useAppDispatch, useInitialEffect, classNames, useDynamicModuleLoader } from 'shared/lib';
import { Page } from 'shared/ui';
import cls from './articlesPage.module.scss';

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

    useInitialEffect(() => {
        dispatch(initArticlesPage);
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
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </Page>
    );
};

export default memo(ArticlesPage);
