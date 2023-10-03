import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    Avatar, Button, ButtonTheme, Icon, Text, Card,
} from 'shared/ui';
import EyeIcon from 'shared/asserts/icons/eye.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    ArticleBlockType, EArticleView, IArticle, IArticleTextBlock,
} from 'entities/article/model';
import cls from './articleListItem.module.scss';
import { ArticleTextBlockComponent } from '../articleTextBlockComponent';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: EArticleView;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === EArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as IArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.userName} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('article.read.more')}
                            ...
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});

export default ArticleListItem;
