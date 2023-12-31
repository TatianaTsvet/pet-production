import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card, Skeleton } from 'shared/ui';
import { EArticleView } from '../../model';
import cls from './articleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: EArticleView;
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === EArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});

export default ArticleListItemSkeleton;
