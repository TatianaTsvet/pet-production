import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/article';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks';
import { Page } from 'widgets/page';
import { ArticleRecommendationsList } from 'features/articleRecommendationList';
import { articleDetailsPageRecommendationsReducer, articleDetailsCommentsReducer } from '../../model';
import cls from './articleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../articleDetailsPageHeader';

import { ArticleDetailsComments } from '../articleDetailsComments';

interface IArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
    // articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    useDynamicModuleLoader(reducers, true);

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
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
