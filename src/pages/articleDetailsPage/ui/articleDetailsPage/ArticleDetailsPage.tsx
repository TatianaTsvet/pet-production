import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList } from 'entities/article';
import { CommentList } from 'entities/comment';
import { ETextSize, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersList, useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/articleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    addCommentForArticle,
    articleDetailsPageReducer,
    fetchArticleRecommendations, fetchCommentsByArticleId, getArticleCommentsIsLoading,
} from 'pages/articleDetailsPage/model';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/page';
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from 'pages/articleDetailsPage/model/slices/articleDetailsPageRecommendationSlice';
import { getArticleRecommendationsIsLoading } from 'pages/articleDetailsPage/model/selectors/recommendations';
import cls from './articleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../articleDetailsPageHeader';

interface IArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    // articleDetailsComments: articleDetailsCommentsReducer,
    // articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    useDynamicModuleLoader(reducers, true);

    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    const onSendComment = useCallback((str: string) => {
        dispatch(addCommentForArticle(str));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('page.not.found')}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <Text
                size={ETextSize.L}
                className={cls.commentTitle}
                title={t('articles.recommend')}
            />
            <ArticleList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={cls.recommendations}
                target="_blank"
            />
            <Text size={ETextSize.L} text={t('article.comments')} className={cls.commentTitle} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
