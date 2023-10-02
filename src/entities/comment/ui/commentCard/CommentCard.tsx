import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
    Skeleton, Avatar, Text, AppLink,
} from 'shared/ui';
import { IComment } from 'entities/comment/model';
import { RoutePath } from 'shared/config';
import cls from './commentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.userName} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});

export default CommentCard;
