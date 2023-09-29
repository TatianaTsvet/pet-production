import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton, Avatar, Text } from 'shared/ui';
import { IComment } from 'entities/comment/model';
import cls from './commentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.userName} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});

export default CommentCard;
