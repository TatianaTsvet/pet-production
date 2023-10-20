import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EButtonTheme } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getCanEditArticle } from 'entities/article';
import { RoutePath } from 'shared/config';
import cls from './articleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('article.back.list')}
            </Button>
            {/* can edit article only user who created the article */}
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={EButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('articles.edit')}
                </Button>
            )}
        </div>
    );
});

export default ArticleDetailsPageHeader;
