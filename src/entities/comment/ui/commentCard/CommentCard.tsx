import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
    Skeleton, Avatar, Text, AppLink, HStack, VStack,
} from 'shared/ui';
import { RoutePath } from 'shared/config';
import { IComment } from '../../model';
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
            <HStack max className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </HStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack max className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.userName} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});

export default CommentCard;
