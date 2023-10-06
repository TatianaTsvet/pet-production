import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/';
import { useTranslation } from 'react-i18next';
import { IComment } from 'entities/comment/model';
import cls from './commentList.module.scss';
import { CommentCard } from '../commentCard';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

const CommentList = memo((props: ICommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation('comments');

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('comments.absent')} />}
        </div>
    );
});

export default CommentList;
