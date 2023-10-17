import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { ArticleList } from 'entities/article';
import { VStack, ETextSize, Text } from 'shared/ui';
import {
    useArticleRecommendationsList,
} from '../../api/articleRecommendationsApi';

interface IArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = memo((props: IArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={ETextSize.L}
                title={t('articles.recommend')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});

export default ArticleRecommendationsList;
