import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { Text } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersList, useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/articleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId, getArticleCommentsIsLoading } from 'pages/articleDetailsPage/model';
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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('page.not.found')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text text={t('article.comments')} className={cls.commentTitle} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
