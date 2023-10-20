import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    Avatar, Button, EButtonTheme, Icon, Text, Card, AppLink,
} from 'shared/ui';
import EyeIcon from 'shared/asserts/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig.types';
import {
    EArticleBlockType, EArticleView, IArticle, IArticleTextBlock,
} from '../../model';
import cls from './articleListItem.module.scss';
import { ArticleTextBlockComponent } from '../articleTextBlockComponent';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: EArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article-details');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === EArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === EArticleBlockType.TEXT,
        ) as IArticleTextBlock;

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
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
                        <AppLink target={target} to={RoutePath.article + article.id}>
                            <Button theme={EButtonTheme.OUTLINE}>
                                {t('article.read.more')}
                                ...
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
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
        </AppLink>
    );
});

export default ArticleListItem;
