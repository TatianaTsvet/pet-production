import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersList, useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/articleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle, fetchCommentsByArticleId, getArticleCommentsIsLoading } from 'pages/articleDetailsPage/model';
import { RoutePath } from 'shared/config';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/page';
import cls from './articleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    useDynamicModuleLoader(reducers, true);

    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onSendComment = useCallback((str: string) => {
        dispatch(addCommentForArticle(str));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('page.not.found')}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('article.back.list')}</Button>
            <ArticleDetails id={id} />
            <Text text={t('article.comments')} className={cls.commentTitle} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
